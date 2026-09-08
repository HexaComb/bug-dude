---
name: The Bug Dude Pest Control
description: A vivid, local field-service dispatch experience for Fresno pest-control leads.
colors:
  ink: "#08243a"
  splash-blue: "#14a8e9"
  service-blue: "#006db6"
  bug-red: "#da2a25"
  signal-yellow: "#ffd83d"
  paper: "#f7f9f7"
  line: "#bdd6e2"
  ice: "#e8f7ff"
  mist: "#bfe8ff"
  slate: "#3f6077"
  field-slate: "#31526a"
  white: "#ffffff"
  input-stroke: "#78a5bd"
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6.3rem)"
    fontWeight: 950
    lineHeight: 0.9
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.6rem)"
    fontWeight: 950
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 950
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 600
    lineHeight: 1.65
  label:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 900
    letterSpacing: "0.04em"
rounded:
  none: "0"
  mark: "4px"
  status: "50%"
spacing:
  compact: "12px"
  standard: "22px"
  section: "105px"
  section-mobile: "72px"
components:
  button-primary:
    backgroundColor: "{colors.bug-red}"
    textColor: "{colors.white}"
    padding: "14px 21px"
    height: "52px"
  button-alt:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    padding: "14px 21px"
    height: "52px"
  button-plain:
    backgroundColor: "{colors.white}"
    textColor: "{colors.service-blue}"
    padding: "14px 21px"
    height: "52px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "12px"
    rounded: "{rounded.none}"
---

# Design System: The Bug Dude Pest Control

## Overview

**Creative North Star: "The Fresno Field Dispatch Board"**

The site turns the company’s vivid vehicle logo into a practical visual system: electric blue is the operating surface, red is the urgent action, and yellow is the signal that helps a visitor decide where to look. It should feel local, direct, and capable—an operations partner rather than a faceless contractor.

Saturated brand fields carry the persuasion work. Paper sections hold proof, process, and forms. Ink bands (commercial roster, process, footer) read like night-shift dispatch surfaces. Real truck and field photography, Lucide stroke icons, and hard offset “pinned paperwork” shadows do the material storytelling. Decorative pest artwork never leads.

**Key Characteristics:**
- Direct, weighty display type with tight tracking and balanced headlines
- Asymmetric hero: conversion copy left, commercial request ticket right
- Flat color planes plus purposeful hard-offset shadows on dispatch artifacts
- Logo-derived splash punctuation only in the hero; square controls everywhere else
- Motion that reveals sections with clip and offset, never decorative blur

## Colors

Electric blue owns the brand field; red and yellow are energetic, readable action signals. Cool slate and ice blues keep body copy and quiet bands readable on paper and ink.

### Primary
- **Splash Blue** (`splash-blue`): Hero ground and logo-derived brand field.
- **Bug Red** (`bug-red`): Primary conversion, call strip, form shadow accent, urgent marks.
- **Signal Yellow** (`signal-yellow`): Alternate CTA, focus ring, dispatch header type, property icons, process step titles.

### Secondary
- **Service Blue** (`service-blue`): Deeper logo blue for links, plain buttons, and BBB rating emphasis.

### Neutral
- **Dispatch Ink** (`ink`): Primary text and dark structural bands.
- **Paper** (`paper`): Default page canvas.
- **White** (`white`): Nav, tickets, cards, form surface.
- **Service Line** (`line`): Hairline boundaries for lists, cards, and fields.
- **Field Slate** (`field-slate`): Section intro on paper.
- **Slate** (`slate`): Body copy and captions on paper.
- **Mist** (`mist`): Intro and support copy on ink or blue fields.
- **Ice** (`ice`): Soft availability and reviews band fill.
- **Input Stroke** (`input-stroke`): Form control borders.

### Named Rules
**The Logo Triad Rule.** Splash blue, bug red, and signal yellow come from `public/bug-dude-logo.png`. Do not invent a fourth brand accent.

**The Quiet Secondary Rule.** Slate, mist, and ice exist for readable hierarchy on paper and ink. They never replace the triad for primary actions.

## Typography

**Display Font:** Avenir Next, Avenir, Segoe UI, sans-serif  
**Body Font:** Avenir Next, Avenir, Segoe UI, sans-serif

**Character:** One family at extreme weight for dispatch headlines; medium-heavy body for frank neighborly copy. No serif contrast pair.

### Hierarchy
- **Display** (950, `clamp(3.2rem, 7vw, 6.3rem)`, line-height 0.9, tracking -0.055em): Hero H1 only.
- **Headline** (950, `clamp(2.4rem, 5vw, 4.6rem)`, line-height 0.96): Section H2.
- **Title** (950, `clamp(1.6rem, 3vw, 2.2rem)`): Content subheads and dispatch titles.
- **Body** (600, ~1.02–1.16rem, line-height 1.55–1.65, max ~65–75ch): Intros and supporting copy.
- **Label** (900, 0.76–0.8rem, uppercase, tracked): Form labels, dispatch header, service-area banner, eyebrows.

### Named Rules
**The Weight Carries Emphasis Rule.** Emphasis comes from weight, size, and yellow highlight on display words—not gradient fills on type.

## Layout

Max content width is 1180px with 22px side gutters. Section rhythm is 105px vertical padding (72px below 800px).

The home hero is a two-column grid (copy ~1.06fr, dispatch ~0.94fr, 64px gap). Commercial property types are a four-column roster on desktop and a two-up grid below 800px. Services and quote sections use a ~0.9 / 1.1 split. Field photography uses a 1 / 1 split with 3:4 media frames. Below 800px, major grids collapse to a single column; action rows stack at 560px.

### Named Rules
**The One Job Per Band Rule.** Each major band owns one headline, one short supporting thought, and one primary action path.

## Elevation & Depth

Surfaces stay flat by default. Depth is a hard directional offset that reads like paperwork pinned to a board, not a soft SaaS drop shadow. Soft ambient shadows appear only on small interactive chips (BBB mark, button hover lift).

### Shadow Vocabulary
- **Dispatch pin** (`box-shadow: 16px 16px 0 rgba(0, 71, 114, .28)`): Hero commercial request ticket.
- **Form pin** (`box-shadow: 12px 12px 0 #da2a25`): Estimate form on the yellow quote band.
- **Field pin** (`box-shadow: 12px 12px 0 rgba(0, 71, 114, .18)`; `8px` on mobile): Field photo frames.
- **Review pin** (`box-shadow: 8px 8px 0 rgba(0, 109, 182, .12)`): Review cards.
- **Button lift** (`0 12px 20px rgba(5, 48, 72, .22)` with `translateY(-3px)`): Hover on primary actions.

### Named Rules
**The Pinned Paper Rule.** Hard zero-blur offsets are reserved for dispatch artifacts (ticket, form, field frame, review card). Do not apply them to every container.

## Shapes

Controls, fields, cards, and bands are square-cornered (`0`). The only intentional radii are the small BBB mark (`4px`) and the circular status / pest-icon crops (`50%`). Hero paint-splash SVGs are logo-derived punctuation, not a general shape language.

### Named Rules
**The Square Dispatch Rule.** Do not round the system into pill buttons or soft SaaS cards.

## Components

### Buttons
Square, 52px min height, 14×21 padding, weight 900, 2px border. Primary is bug red with white border; alt is signal yellow on ink text; plain is white with service-blue stroke. Hover lifts 3px with soft shadow. Focus-visible is a 3px signal-yellow outline with 3px offset on all interactive elements.

### Inputs / Fields
White fields, square corners, `#78a5bd` stroke, 12px padding. Labels are uppercase route marks (0.8rem / 900). Two-column form grid collapses to one column on mobile.

### Navigation
White bar with a 4px splash-blue lower rule. Desktop links at 0.88rem / 800; phone link is bug red and stays visible. Below 800px, text links hide and the logo + phone carry the bar.

### Dispatch Panel
White commercial request ticket with ink header (“COMMERCIAL SERVICE REQUEST” in yellow tracked caps), yellow service-area banner, request rows, and an ice availability strip with a pulsing red status dot. Structural dispatch pin shadow.

### Commercial Property Roster
Four equal ink-band cells with hairline dividers. Each cell carries a decorative property photo under a diagonal dispatch-ink wash (stronger bottom-left, open to the photo on the right). Yellow Lucide building icons sit with white labels on the readable ink side. Photos are archetypal stand-ins, not claimed client jobs. Icons support recognition; they do not replace photography or the logo as brand authority.

### Field Media
White frames with hard field-pin shadows, 3:4 media, ink letterbox, and short slate captions. Prefer real truck and job photography from `public/field/`.

### Review Cards
White paper cards with service-line borders and light review-pin shadows. Used for verified neighbor quotes only—never fabricated social proof.

### Call Strip
Full-bleed bug-red urgency band with yellow click-to-call treatment.

## Do's and Don'ts

### Do:
- **Do** treat `public/bug-dude-logo.png` and its blue / red / yellow relationship as the brand authority.
- **Do** keep call, estimate, and booking paths explicit in every major band.
- **Do** use hard-offset pins for dispatch artifacts and soft lift only for hover.
- **Do** prefer real field photography and Lucide stroke icons over decorative pest illustration as the visual driver.
- **Do** honor `prefers-reduced-motion` by disabling nonessential transforms and entrance animations.

### Don't:
- **Don't** invent testimonials, commercial clients, licenses, guarantees, or statistics.
- **Don't** lead pages with generic pest iconography or emoji.
- **Don't** round every surface into a SaaS card system or pill cluster.
- **Don't** use gradient fills on text, decorative glass blur, or multi-layer ambient glow as the depth system.
- **Don't** add a fourth brand accent outside the logo triad.
