
# NEOLab Homepage Visual Redesign Plan

## Overview
This plan addresses the key visual and structural issues: cramped layout, underpowered hero, weak visual contrast, inconsistent spacing, and "pasted-on" feel. The redesign will create a premium, dashboard-like aesthetic with warm lab energy.

---

## Phase 1: Header Enhancement

### Current Issues
- Logo is too small (h-6/h-7)
- Header height is minimal (h-16/h-20)
- Blends into background without authority
- Navigation feels cramped

### Changes to `src/components/layout/Header.tsx`

1. **Increase Header Height**
   - Change from `h-16 md:h-20` to `h-20 md:h-24`

2. **Enlarge Logo**
   - Change from `h-6 md:h-7` to `h-8 md:h-10`

3. **Add Permanent Background Surface**
   - Replace transparent default with subtle warm glass surface
   - Use `bg-background/70 backdrop-blur-xl border-b border-border/50` always
   - On scroll: increase to `bg-background/90` with stronger shadow

4. **Improve Navigation Spacing**
   - Increase gap between nav items from `gap-1` to `gap-2`
   - Increase button padding from `px-3` to `px-4`

5. **Enhance CTA Button**
   - Add subtle glow effect
   - Slightly larger size

---

## Phase 2: Hero Section Complete Rebuild

### Current Issues
- Hero feels empty and lacks impact
- Background visual (SVG) is too subtle (opacity-20)
- Composition is not commanding
- No dashboard/system feel

### Changes to `src/pages/Index.tsx` - Hero Section (Lines 91-168)

1. **Darker, Richer Background**
   - Create a new gradient: warm cream transitioning to light peach
   - Add subtle noise texture overlay
   - Increase grid opacity from 0.03 to 0.05

2. **Large System Visualization**
   Replace current subtle SVG with a dominant dashboard-style visual:
   - Positioned right/behind the content
   - Multiple layered elements:
     - Central control hub with pulsing glow
     - Connected module blocks (AI, SEO, Ads, Automation)
     - Flowing data lines between modules
     - Status indicators and metrics displays
   - Scale: at least 50% of viewport width
   - Opacity: 0.4-0.6 (clearly visible, not hidden)

3. **Hero Text Composition**
   - Keep centered layout
   - H1 stays: "Jauna ēra optimizācijai"
   - Subheadline: "Jauna pieeja digitālajai izaugsmei."
   - Add visual weight with larger font size (text-5xl md:text-7xl lg:text-8xl)

4. **Enhanced Benefit Chips**
   - Larger chips with icons
   - Subtle glass morphism background
   - Gentle hover glow effect

5. **CTA Button Enhancement**
   - Larger size with stronger shadow
   - Subtle pulse animation on idle

---

## Phase 3: Section-by-Section Redesign

### Section 2: "Jauna pieeja digitālajai izaugsmei"

**Current Issues:** Plain text block, weak visual panel

**Changes:**
1. **Left Visual Panel Upgrade**
   - Replace rotating circle with a "Control Panel" style diagram
   - Add glass surface with subtle grid lines
   - Include animated data flow indicators
   - Orange accent glows at key points

2. **Right Text Formatting**
   - Keep exact copy
   - Add visual hierarchy with highlighted key sentence
   - Use subtle background tint for the highlight block
   - Better spacing between paragraphs

3. **Background Enhancement**
   - Add subtle warm gradient tint
   - Extend grid pattern subtly

---

### Section 3: "Digitalie un maksliga intelekta risinajumi"

**Current Issues:** Looks like floating cards, not structural

**Changes:**
1. **Dashboard Block Style**
   - Transform from cards to dashboard modules
   - Add subtle glass borders
   - Include small status indicators (dots)
   - Hover reveals additional depth

2. **Grid Layout Enhancement**
   - Keep 2-column grid
   - Add connecting visual elements between blocks
   - Subtle background panel behind all 4 blocks

3. **Individual Block Design**
   - Larger icons with orange container
   - Title + subtle description line
   - Hover: lift + orange bottom glow + slight expansion

---

### Section 4: "Ar kadiem izaicinajumiem..." (Challenges)

**Current Issues:** Standard list, not diagnostic-feeling

**Changes:**
1. **Diagnostic Panel Aesthetic**
   - Wrap in strong framed container with darker tint
   - Add "warning" style visual indicators
   - Each challenge gets an orange bullet + subtle left border

2. **Conclusion Bar**
   - Strong visual emphasis
   - Orange gradient background
   - Larger text weight
   - Feels like a system alert/summary

3. **Background**
   - Subtle grid pattern
   - Warm gray tint differentiating from adjacent sections

---

### Section 5: "Kads ir NEOLab risinajums?" (Solution Steps)

**Current Issues:** Has arrows which should be removed, needs more glow/depth

**Changes:**
1. **Remove ChevronRight Arrows**
   - Replace with glowing state indicators

2. **Enhanced Step Cards**
   - Add subtle glow on hover (not just movement)
   - Pulsing connection line between steps
   - Each step shows "active" state on hover

3. **Visual Connector**
   - Animated vertical line with flowing particles
   - Orange gradient intensity increases toward active step

---

### Section 6: "Pakalpojumu virzieni" (Services)

**Current Issues:** Cards are too small, need more presence

**Changes:**
1. **Larger Block Size**
   - Increase padding from p-6/p-8 to p-8/p-10
   - Larger icons (w-16 h-16 containers)

2. **Enhanced Hover States**
   - Lift + glow + gradient shift
   - Reveal subtle secondary visual element (decorative pattern)
   - Orange accent line at bottom expands more dramatically

3. **Block Structure**
   - Add subtle internal divider between icon/title and description
   - Improved typography hierarchy

---

### Section 7: NEO Brand Block

**Current Issues:** Needs dictionary/etymology feel, not just branding

**Changes:**
1. **Typography Layout**
   - "Neo" - bold, large
   - Below: "new, young" - smaller, italic
   - Etymology block:
     ```
     Etymology:
     From Ancient Greek νέος (neos, "new, young")
     Prefix: neo-
     ```

2. **Visual Treatment**
   - Academic/dictionary entry style
   - Subtle serif-like formatting for etymology
   - Minimal surrounding decoration
   - Light border or rule lines

3. **Animated Element**
   - Keep gradient underline animation
   - Make it subtler, more sophisticated

---

### Section 8: "Ka mes stradajam" (How We Work)

**Current Issues:** Vertical list, could be more roadmap-like

**Changes:**
1. **Roadmap Style**
   - Consider horizontal layout on desktop
   - Connected steps with visible progression
   - Color gradient from left to right (light orange to deep orange)

2. **Step Design**
   - Numbered circles with gradient fills
   - Step cards with hover highlight
   - Connecting lines between steps

3. **Updated Step Labels** (per requirements)
   - Sakotnējais audits
   - Analize
   - Prioritates un plans
   - Ieviesana
   - Optimizacija

---

### Section 9: Final CTA

**Current Issues:** Needs stronger orange presence

**Changes:**
1. **Background Enhancement**
   - Stronger orange gradient (from-primary/15 instead of /10)
   - Add subtle radial glow at center
   - Gentle animated gradient movement

2. **Typography**
   - Larger headline
   - Better contrast for readability

3. **CTA Button**
   - Maximum prominence
   - Strong shadow
   - Subtle hover animation

---

## Phase 4: Global Style Adjustments

### Changes to `src/index.css`

1. **New Background Tokens**
   - Add `--gradient-hero-strong` with more contrast
   - Add `--surface-dashboard` for module-like elements

2. **Enhanced Card Styles**
   - Add `.card-dashboard` class for structural blocks
   - Add `.card-diagnostic` for challenge/warning style

3. **Motion Utilities**
   - Add `.glow-pulse` for subtle pulsing glow
   - Add `.data-flow` for animated connection lines

---

## Technical Considerations

### Files Modified
- `src/components/layout/Header.tsx` - Header enhancement
- `src/pages/Index.tsx` - Complete homepage rebuild
- `src/index.css` - New utility classes and tokens

### Files NOT Modified
- All other pages (SeoGeo, AiAutomatizacija, AiLab, etc.)
- Footer (already working well)
- LanguageContext (no changes needed)

### Responsive Behavior
- Desktop: Full visual impact, horizontal roadmap, large system visual
- Tablet: Slightly reduced visual scale, maintain dashboard feel
- Mobile: Stacked layouts, preserved visual hierarchy, readable spacing

### Performance Notes
- SVG-based system visual (no heavy images)
- CSS animations only (no heavy JS)
- Lazy loading for below-fold sections via ScrollReveal

---

## Summary of Visual Direction

| Element | Current | After |
|---------|---------|-------|
| Header | Blends in, small | Authority, glass surface |
| Hero | Empty, subtle | Dominant system visual |
| Sections | Floating cards | Dashboard modules |
| Spacing | Inconsistent | Compact, intentional |
| Contrast | Too white | Warm cream, tinted panels |
| Interactions | Basic hover | Glow, lift, depth |
| Overall | Generic SaaS | Premium AI Lab |

