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
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6.3rem)"
    fontWeight: 950
    lineHeight: 0.9
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.55
rounded:
  none: "0"
spacing:
  compact: "14px"
  standard: "22px"
  section: "105px"
components:
  button-primary:
    backgroundColor: "{colors.bug-red}"
    textColor: "#ffffff"
    padding: "14px 21px"
  button-alt:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    padding: "14px 21px"
---

# Design System: The Bug Dude Pest Control

## Overview

**Creative North Star: "The Fresno Field Dispatch Board"**

The site turns the company’s vivid vehicle logo into a practical visual system: electric blue is the operating surface, red is the urgent action, and yellow is the signal that helps a visitor decide where to look. It should feel local, direct, and capable—an operations partner rather than a faceless contractor.

- Direct, strong type with large commercial headlines.
- Asymmetric hero composition with an operational request panel.
- Flat, saturated surfaces and purposeful structural shadow.

## Colors

Electric blue owns the brand field; red and yellow function as energetic, readable action signals.

### Primary
- **Splash Blue** (#14a8e9): Hero ground and logo-derived brand color.
- **Bug Red** (#da2a25): Primary conversion action and urgent call strip.
- **Signal Yellow** (#ffd83d): Alternate CTA and high-attention detail.

### Neutral
- **Dispatch Ink** (#08243a): Dark structural surface and primary text.
- **Paper** (#f7f9f7): Quiet page canvas.
- **Service Line** (#bdd6e2): Functional boundaries for forms and lists.

## Typography

**Display Font:** Avenir Next, Avenir, Segoe UI, sans-serif
**Body Font:** Avenir Next, Avenir, Segoe UI, sans-serif

Display typography is compact, weighty, and tightly tracked. Body copy remains candid and easy to scan.

## Layout

The main container is 1180px with 22px mobile gutters. The home hero is a two-column proposition: copy and conversion on the left, dispatch artifact on the right. On screens below 800px, layouts become single-column and property types become a two-up grid.

## Elevation & Depth

The world stays materially flat except for one structural shadow: the commercial dispatch and form carry hard directional offsets to feel like field paperwork pinned above the operating surface.

## Shapes

Controls and fields are square-cornered. Organic paint splashes appear only as logo-derived brand punctuation in the hero; they never become decorative filler.

## Components

### Buttons
- Primary actions are red with a white border; the alternate action is yellow on blue.
- Buttons rise 3px with a soft shadow on hover and use a high-contrast yellow focus outline.

### Inputs / Fields
- Inputs are white with a #78a5bd hairline and 12px inner padding.
- Labels are uppercase, 0.8rem, and heavily weighted to resemble useful route labels.

### Navigation
- White operational bar with a 4px blue lower rule. Desktop links are compact and bold; the mobile layout prioritizes the logo and phone action.

### Dispatch Panel
- A white, slightly rotated service-request artifact with an ink header and yellow local marker. It expresses commercial relevance before the visitor scrolls.

## Do's and Don'ts

### Do:
- **Do** use the supplied logo and its blue/red/yellow relationship as the brand authority.
- **Do** make the estimate, booking, and call paths explicit.
- **Do** keep commercial claims specific but conservative until real proof is supplied.

### Don't:
- **Don't** use generic pest icons as the page’s visual driver.
- **Don't** add invented reviews, guarantees, business clients, licenses, or statistics.
- **Don't** round every surface into a generic SaaS-card system.
