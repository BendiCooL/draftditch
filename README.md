# Invent a Word We Need — Draftditch

One invented English word and its one-line definition, for the [Invent a Word We Need](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) competition on make.fun.

[![Invent a Word We Need](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/BendiCooL/draftditch/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/BendiCooL/draftditch/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

## The word

> Draftditch (v.): typing a long reply, then deleting it and sending "ok" instead.

80 Unicode code points — inside the 1–140 limit.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the word and definition to `/output/entry.txt`. It also guards the gate itself: the text must be 1 to 140 Unicode code points, a single line, not only whitespace, and shaped like a dictionary entry (`Word (pos.): definition`), or the program fails loudly instead of shipping an invalid entry.
