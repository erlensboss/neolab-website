

# Homepage Visual Warmth and Depth Enhancement Plan

## Problem Summary

The homepage currently feels cold and empty because:
1. Most sections have plain white/light backgrounds without the warm gradients seen in the Final CTA section
2. The "Jauna pieeja" section has a weak, off-centered rotating circle visual
3. Sides of the page lack subtle atmospheric elements (like dot patterns) that add depth
4. Sections between Hero and CTA lack the "warm lab" feeling

## Solution Overview

Apply the warm peach/cream gradient treatment (like in Section 9) across more sections, add subtle dot pattern backgrounds to sides, and replace the rotating circle with a dashboard diagram similar to the Performance Reklama page.

---

## Phase 1: Global Atmospheric Enhancements

### 1.1 New CSS Classes for Warm Backgrounds (`src/index.css`)

Add new background utility classes:

```css
/* Warm peach gradient like final CTA */
.bg-warm-peach {
  background: linear-gradient(180deg, 
    hsl(30 30% 96%) 0%, 
    hsl(25 35% 93%) 40%, 
    hsl(22 38% 90%) 100%
  );
}

/* Subtle dot pattern for sides - like reference */
.dots-atmosphere {
  position: relative;
}

.dots-atmosphere::before,
.dots-atmosphere::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  pointer-events: none;
  z-index: 0;
}

.dots-atmosphere::before {
  left: 0;
  background-image: radial-gradient(
    circle at 2px 2px, 
    hsla(21, 90%, 48%, 0.06) 1px, 
    transparent 1px
  );
  background-size: 20px 20px;
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 0%, transparent 100%);
}

.dots-atmosphere::after {
  right: 0;
  background-image: radial-gradient(
    circle at 2px 2px, 
    hsla(21, 90%, 48%, 0.06) 1px, 
    transparent 1px
  );
  background-size: 20px 20px;
  mask-image: linear-gradient(to left, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, black 0%, transparent 100%);
}

/* Radial dot fade pattern (like reference image) */
.dots-radial-right {
  position: relative;
}

.dots-radial-right::after {
  content: '';
  position: absolute;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  background-image: radial-gradient(
    circle at 3px 3px, 
    hsla(210, 15%, 70%, 0.15) 1.5px, 
    transparent 1.5px
  );
  background-size: 16px 16px;
  mask-image: radial-gradient(ellipse 70% 60% at 100% 50%, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 100% 50%, black 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```

---

## Phase 2: Section-by-Section Background Updates

### 2.1 Hero Section (Lines 91-258)

**Current:** `bg-gradient-hero-strong` - already warm, keep as is
**Enhancement:** Add `dots-atmosphere` class for side depth

### 2.2 "Jauna pieeja" Section (Lines 260-384)

**Current Background:** `bg-gradient-to-b from-background via-muted/30 to-background`  
**New Background:** `bg-warm-peach dots-radial-right`

**Visual Replacement (MAJOR CHANGE):**

Replace the rotating circle diagram (Lines 283-337) with a dashboard-style visual similar to PerformanceReklama page:

```text
New Visual Structure:
+----------------------------------+
|  Performance Dashboard Header    |
|----------------------------------|
|  +--------+  +--------+         |
|  | KPI 1  |  | KPI 2  |         |
|  | +85%   |  | 24/7   |         |
|  +--------+  +--------+         |
|  +--------+  +--------+         |
|  | KPI 3  |  | KPI 4  |         |
|  | 4.2x   |  | 98%    |         |
|  +--------+  +--------+         |
|----------------------------------|
|  [===========] Mini chart        |
+----------------------------------+
```

Components:
- Glass card container with header
- 4 KPI metric blocks showing improvement stats
- Mini bar chart at bottom
- Status indicators with animations

### 2.3 "Digitalie risinajumi" Section (Lines 386-436)

**Current Background:** `bg-muted/40`  
**New Background:** `bg-gradient-to-b from-muted/30 via-background to-muted/30 dots-atmosphere`

Add subtle warm gradient instead of flat gray.

### 2.4 "Izaicinajumi" Section (Lines 438-491)

**Current Background:** `bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30`  
**Enhancement:** Keep diagnostic feel but add warmer tint:
`bg-gradient-to-b from-[hsl(30_20%_95%)] via-[hsl(28_25%_93%)] to-[hsl(30_20%_95%)]`

### 2.5 "NEOLab risinajums" Section (Lines 493-568)

**Current Background:** `bg-background`  
**New Background:** `bg-warm-peach` with subtle dots-radial-right

### 2.6 "Pakalpojumu virzieni" Section (Lines 570-636)

**Current Background:** `bg-muted/30`  
**New Background:** `bg-gradient-to-b from-background via-muted/40 to-background dots-atmosphere`

### 2.7 "NEO Brand" Section (Lines 638-685)

**Current Background:** `bg-background`  
**New Background:** Keep minimal but add very subtle warm tint: `bg-[hsl(35_20%_98%)]`

### 2.8 "Ka mes stradajam" Section (Lines 687-778)

**Current Background:** `bg-muted/40`  
**New Background:** `bg-warm-peach` - apply the warm gradient treatment

### 2.9 Final CTA Section (Lines 780-837)

**Current:** Already has strong orange warmth - KEEP AS IS
This is the reference that user likes.

---

## Phase 3: "Jauna pieeja" Visual Rebuild

### Current Visual (Lines 271-348)

A rotating circle with orbiting icons - described as "bad, off-centered"

### New Visual Design

Create a dashboard card similar to PerformanceReklama (Lines 104-142):

```jsx
<div className="glass-warm rounded-2xl p-8 md:p-10 shadow-card">
  {/* Header */}
  <div className="flex items-center justify-between mb-8">
    <span className="font-semibold text-lg">System Overview</span>
    <div className="flex items-center gap-2">
      <div className="status-dot" />
      <span className="text-sm text-muted-foreground">Active</span>
    </div>
  </div>
  
  {/* 4 KPI blocks */}
  <div className="grid grid-cols-2 gap-6 mb-8">
    {/* Block 1: Process Efficiency */}
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="text-sm text-muted-foreground mb-2">Procesu efektivitāte</div>
      <div className="text-2xl font-bold text-primary">+85%</div>
    </div>
    {/* Block 2: 24/7 Monitoring */}
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="text-sm text-muted-foreground mb-2">Monitorings</div>
      <div className="text-2xl font-bold text-primary">24/7</div>
    </div>
    {/* Block 3: ROI */}
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="text-sm text-muted-foreground mb-2">Vidējais ROI</div>
      <div className="text-2xl font-bold text-primary">4.2x</div>
    </div>
    {/* Block 4: Client Success */}
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="text-sm text-muted-foreground mb-2">Klientu apmierinātība</div>
      <div className="text-2xl font-bold text-primary">98%</div>
    </div>
  </div>
  
  {/* Mini chart */}
  <div className="h-24 bg-muted rounded-xl flex items-end justify-around p-3">
    {/* Animated bars */}
  </div>
</div>
```

---

## Phase 4: Side Dot Pattern Implementation

### Visual Reference (Second Uploaded Image)

The reference shows subtle gray dots in a radial/wave pattern fading from the right edge. These add depth without distracting from content.

### Implementation

Add the `dots-atmosphere` or `dots-radial-right` class to key sections:
- Hero section
- "Jauna pieeja" section
- "NEOLab risinajums" section
- "Pakalpojumu virzieni" section

The dots will be:
- Very subtle (6-10% opacity)
- Gray-toned to match the reference
- Fade out toward center using CSS mask
- Only visible on sides, not overlapping content

---

## Files Modified

| File | Changes |
|------|---------|
| `src/index.css` | Add new atmospheric CSS classes: `.bg-warm-peach`, `.dots-atmosphere`, `.dots-radial-right` |
| `src/pages/Index.tsx` | Update section backgrounds, replace rotating circle with dashboard visual |

## Files NOT Modified

- All other pages (SeoGeo, AiAutomatizacija, PerformanceReklama, etc.)
- Header, Footer, Layout components
- No structural changes to content or copy

---

## Visual Before/After Summary

| Section | Before | After |
|---------|--------|-------|
| Hero | Warm but no side depth | Add dot patterns on sides |
| Jauna pieeja | Cold gradient, bad circle | Warm peach + dashboard visual + dots |
| Digitalie risinajumi | Flat gray | Warmer gradient + dots |
| Izaicinajumi | Gray gradient | Warmer peach tint |
| NEOLab risinajums | Plain white | Warm peach + dots |
| Pakalpojumu virzieni | Flat muted | Gradient + dots |
| Ka mes stradajam | Flat muted | Warm peach gradient |
| Final CTA | Already warm | Keep as is (reference) |

---

## Technical Notes

1. **Performance:** All effects use pure CSS (gradients, pseudo-elements, masks) - no additional JavaScript
2. **Responsiveness:** Dot patterns will be hidden or reduced on mobile via media queries
3. **Accessibility:** Dots are purely decorative with `pointer-events: none`
4. **Text Readability:** All atmospheric elements are behind content with proper z-index layering

