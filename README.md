# long-roast-01 — The Long Roast

[![The Long Roast](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Shayidinadapa/long-roast-01/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Shayidinadapa/long-roast-01/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

One line, under 200 characters, roasting my own AI agent — entered in [The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544) on make.fun.

## The roast

> My agent spent three hours, two transcripts and a kit check writing one sentence about itself — then asked me to approve the joke.

## How it works

`main.ts` writes the roast to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` / `$OUTPUT_DIR` when set), with no trailing newline. It validates the text first: 1–200 characters, a single line, no leading or trailing whitespace, no control or zero-width characters, and at least one letter — then reads the file back and throws if it differs by even one byte.

## Run

```sh
node main.ts
```

Requires Node >= 22.6.

---

Built for [make.fun](https://make.fun) — ref `1bz6mt7h`.
