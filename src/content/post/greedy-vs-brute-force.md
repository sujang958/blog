---
title: Greedy v/s Brute Force
description: What's the difference between them?
category: Algorithm
date: 1723608949937
image: "/images/greedy-vs-brute-force.png"
---

I was solving [a Leet Code problem](https://leetcode.com/problems/container-with-most-water). It was about finding the biggest rectangle using two different heights of the given heights. For example, if the given heights are [1, 2, 4, 3], then the biggest rectangle’s extent will be 4 because of 2 and 3.

![description](/images/water-container.png)

I thought it was an easy two-pointer problem and immediately made a simple two-pointer O(n^2) algorithm to solve it. And my submission get declined. 

## The Problem

I checked the problem’s topics and they were `Array`, `Two Pointers`, and `Greedy`. I was like, “Man, isn’t the Greedy aloghrithm the same as brute force?”. I googled about it and realized that it’s a different thing. So basically, brute force is brute force, and greedy is to choose the best option in each situation. Brute force doesn’t give a freak about the best option, it just brute-forces. Greedy, however, does really think about the best option in each situation. 

I changed my nested for loop code to infinite-looping while code and the second pointer nows starts at the end of the array. The change of two pointers that I first implemented is compare the two next height from each pointer and move the pointer whose next height is higher than that of the other. But it was declined by [1, 2, 4, 3] testcase. So I changed the way the two pointers move. Now the one whose current height is lower than that of the other moves.

```ts
function maxArea(height: number[]): number {
  let answer = 0

  let i = 0
  let j = height.length - 1

  while (true) {
    if (i >= j) break

    const left = height[i]
    const right = height[j]

    const actualHeight = left > right ? right : left
    const extent = actualHeight * (j - i)

    if (extent > answer) answer = extent
    if (left < right) i++ 
    else j--
  }

  return answer
}
```

Accepted.