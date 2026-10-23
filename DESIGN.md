---
name: My Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fc'
  surface-container: '#ebedf7'
  surface-container-high: '#e6e8f1'
  surface-container-highest: '#e0e2eb'
  on-surface: '#181c22'
  on-surface-variant: '#414753'
  inverse-surface: '#2d3037'
  inverse-on-surface: '#eef0fa'
  outline: '#717785'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db8'
  primary: '#005cb8'
  on-primary: '#ffffff'
  primary-container: '#1275e2'
  on-primary-container: '#000512'
  inverse-primary: '#aac7ff'
  secondary: '#465f88'
  on-secondary: '#ffffff'
  secondary-container: '#b6d0ff'
  on-secondary-container: '#3f5881'
  tertiary: '#574abe'
  on-tertiary: '#ffffff'
  tertiary-container: '#7064d8'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458d'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aec7f7'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#2d476f'
  tertiary-fixed: '#e4dfff'
  tertiary-fixed-dim: '#c6bfff'
  on-tertiary-fixed: '#160066'
  on-tertiary-fixed-variant: '#4232a7'
  background: '#f9f9ff'
  on-background: '#181c22'
  surface-variant: '#e0e2eb'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

# Design System

## Brand & Style
The design system adopts a **Corporate / Modern** style, characterized by a reliable, balanced, and professional aesthetic inspired by modern human-interface guidelines. The visual tone is clean, purposeful, and clear, fostering trust and operational efficiency for users across all applications.

## Colors
The color system is built on a precise semantic foundation operating in **light mode**. 
- **Primary (`#1275e2`)**: A vibrant, dependable blue driving key interactive states and primary call-to-actions.
- **Secondary (`#5f78a3`)**: A slate-leaning blue-gray providing supportive contrast for secondary elements and structural surfaces.
- **Tertiary (`#23038b`)**: A deep indigo accent hue used selectively for high-priority callouts and state differentiation.
- **Neutral (`#74777f`)**: A balanced neutral tone ensuring high-legibility text and structural dividers.

## Typography
The typography system uses **Inter** exclusively across all text roles (headline, body, and label), providing an immaculate, high-legibility typographic scale built for modern digital interfaces. Font weights are used deliberately to establish clear visual hierarchy.

## Layout & Spacing
The layout relies on a robust **fluid grid** system featuring consistent gutters and structured outer margins. Spacing follows a standard proportional scale to establish reliable rhythm, breathing room, and alignment across all screen sizes.

## Elevation & Depth
Elevation is achieved primarily through **tonal layers** and subtle **ambient shadows**. Depth cues remain restrained to preserve a clean, uncluttered interface while clearly differentiating interactive cards, floating action components, and contextual overlays from the background canvas.

## Shapes
The design system employs a **Rounded** shape language with a base corner radius of `0.5rem` (level 2), scaling up to `1rem` and `1.5rem` for larger containers (`rounded-lg` and `rounded-xl`). This provides a friendly, approachable geometric feel without sacrificing structural integrity.

## Components
- **Buttons**: Feature solid primary fills using `#1275e2`, moderate rounded corners (`0.5rem`), and clear typographic labels in Inter.
- **Chips & Tags**: Compact, pill-adjacent indicators utilizing neutral or secondary tonal backgrounds.
- **Input Fields**: Clean borders with neutral outlines that transition cleanly to the primary color upon focus.
- **Cards**: Surface containers utilizing subtle tonal separation and rounded corners to house structured content cleanly.