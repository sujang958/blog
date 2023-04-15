---
title: "Git Hooks: The Timesaver"
description: All developers need this.
category: Git
date: 1672558273110
image: "/images/hook.png"
---


## **Situation you must've experienced**

I wrote a code and committed.
Oops! The code isn't formatted.
I formatted it and committed again.
Oh, I didn't test the code.
I ran the test and committed again.

## **Solution I use**

To prevent situations like this, I use Git Hooks.
Git Hooks are in the .git/hooks folder.

I opened `pre-commit.sample` and renamed it to `pre-commit`.
And I wrote this code.

```sh
#!/bin/sh

yarn lint

LINT_EXIT_CODE=$?

if [ $LINT_EXIT_CODE -eq 2 ]; then
  echo Linting failed, not committed.
  exit 1
fi

exit 0
```

Git won't commit my code if the lint doesn't succeed because of the Git hook I wrote.


## **Troubleshooting**


### The '.git/hooks/pre-commit' hook was ignored because it's not set as executable.


```sh
$ chmod ug+x .git/hooks/*
```

Run the command above to fix this issue.