---
title: "Jotai only accepts WritableAtom"
description: A fix for Jotai's TypeScript error
category: TypeScript
date: 1694271031026
image: "/images/jotai-typescript.png"
---

## The Problem

I was using Jotai. I created an atom and used `useSetAtom` to only receive the function that modifies the value but I was getting a TypeScript error.

## The Fix

The `useSetAtom` function only accepted `WritableAtom` and my atom was just `Atom`. I googled it and found the fix, initializing with `false`. If an atom is initialized with `null` or `undefined`, It won't be a `WritableAtom`.

```ts
// This is a WritableAtom
const myAtom = atom(false)

// This is NOT a WritableAtom
const notMyAtom = atom(null)
```
