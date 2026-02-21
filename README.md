# 🌑 Hollow HQ - Enhanced with Smooth Animations

An immersive, fully animated Discord server landing page inspired by Bleach's Hueco Mundo, featuring advanced animations, interactive hover effects, and seamless page transitions.

## ✨ Features

### 🎨 Advanced Animation System
- **Smooth Page Transitions**: Elegant fade and slide animations between routes
- **Interactive Hover Effects**: Every clickable element responds with visual feedback
- **Scroll-Based Animations**: Content reveals smoothly as you scroll
- **Particle Systems**: Floating elements and geometric shapes
- **Gradient Animations**: Dynamic, moving gradients that follow the cursor
- **Loading Animations**: Staggered entrance animations for grid layouts

### 🎯 Interactive Elements
- **Animated Navigation**: Hover effects on all nav links with color and position changes
- **Button Interactions**: Scale, glow, and shadow effects on hover/click
- **Card Hover States**: Border glow, scale transforms, and content reveals
- **Live Counters**: Real-time countdown timers with pulse animations
- **Animated Icons**: Rotating, scaling, and color-changing SVG icons
- **Expandable Sections**: Smooth accordion-style content expansion

### 📄 Pages

#### 🏠 Home (`/`)
- Hero section with animated title and subtitle
- Floating badge with rotation animation
- Pulsing CTA buttons with glow effects
- Animated server statistics
- Smooth scroll indicators

#### 📊 Stats Dashboard (`/stats`)
- Live countdown timer display
- Animated stat cards with hover effects
- Circular progress indicators
- Interactive timeline with progress nodes
- Recent transmissions feed
- Rotating refresh button

#### 👑 Ranks (`/ranks`)
- Parallax scroll effects on hero
- Rank cards with image zoom on hover
- Rotating role icons
- Featured badges with pulse animations
- Community interest cards
- Grid layout with staggered animations

#### 🏗️ Structure (`/structure`)
- Feature cards with dynamic glow effects
- Animated emoji icons
- Tag animations with stagger delays
- Leadership avatars with rotation
- Gradient text effects

#### 🚪 Join (`/join`)
- Cursor-following gradient orb
- Floating geometric particle system
- Pulsing Discord join button
- Animated server stats
- Expandable decree sections
- Social media hover effects

## 🎮 Animation Types

### Entry Animations
```typescript
// Fade in from bottom
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Hover Effects
```typescript
// Scale and glow
whileHover={{ scale: 1.05, boxShadow: '0px 0px 40px rgba(179,0,255,0.6)' }}
whileTap={{ scale: 0.95 }}
```

### Continuous Animations
```typescript
// Pulsing glow
animate={{ boxShadow: ['0 0 0 0 rgba(168,85,247,0)', '0 0 0 10px rgba(168,85,247,0)'] }}
transition={{ duration: 2, repeat: Infinity }}
```

### Scroll Animations
```typescript
// Reveal on scroll
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

## 🚀 Technologies

- **React 18.3.1** - UI framework
- **Motion (Framer Motion) 12.23.24** - Animation library
- **React Router 7.13.0** - Client-side routing
- **Tailwind CSS 4.1.12** - Utility-first styling
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AnimatedBackground.tsx    # Particle system & gradient orbs
│   │   ├── PageTransition.tsx         # Page transition wrapper
│   │   └── README.md                  # Animation documentation
│   ├── pages/
│   │   ├── Home.tsx                   # Landing page
│   │   ├── Stats.tsx                  # Dashboard with live stats
│   │   ├── Ranks.tsx                  # Hierarchy showcase
│   │   ├── Structure.tsx              # Server features
│   │   ├── Join.tsx                   # Join page with rules
│   │   └── index.ts                   # Page exports
│   ├── App.tsx                        # Root component
│   └── routes.ts                      # Route configuration
├── imports/                           # Figma-imported components
└── styles/
    ├── fonts.css                      # Custom font imports
    └── theme.css                      # Design tokens
```

## 🎨 Design System

### Colors
- **Primary**: `#b300ff` (Purple)
- **Secondary**: `#0dccf2` (Cyan)
- **Accent**: `#a855f7` (Purple-500)
- **Background**: `#020305` / `#0a0a0f`

### Fonts
- **Rajdhani** - Primary UI font (weights: 300-700)
- **Space Grotesk** - Dashboard font (weights: 400-700)
- **Liberation Mono** - Monospace for data (weights: 400, 700)
- **Cinzel** - Decorative headlines (weights: 400, 700, 900)

### Animation Timing
- **Fast**: 0.2s - Micro-interactions
- **Medium**: 0.6s - Standard transitions
- **Slow**: 1-2s - Hero animations
- **Continuous**: Infinite loops with easing

## 💡 Performance Tips

1. **GPU Acceleration**: All animations use transform properties for better performance
2. **Lazy Loading**: Page components load on-demand via React Router
3. **Once Viewport**: Scroll animations only trigger once to save resources
4. **Efficient Particles**: Limited particle count (30) with optimized rendering
5. **Motion Values**: Uses Motion's useMotionValue for smooth cursor tracking

## 🎯 Key Animation Patterns

### Card Hover Pattern
```typescript
<motion.div
  whileHover={{ scale: 1.03, borderColor: 'rgba(168,85,247,0.8)' }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>
```

### Staggered Grid Animation
```typescript
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

### Continuous Pulse
```typescript
<motion.div
  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  {content}
</motion.div>
```

## 🔧 Customization

### Adjust Animation Speed
Change `duration` values in transition objects:
```typescript
transition={{ duration: 0.6 }} // Faster
transition={{ duration: 1.2 }} // Slower
```

### Modify Easing
Use different easing functions:
```typescript
transition={{ ease: "easeIn" }}
transition={{ ease: "easeOut" }}
transition={{ type: "spring", stiffness: 100 }}
```

### Add Delays
Create sequential animations:
```typescript
transition={{ delay: 0.5, duration: 0.6 }}
```

## 📱 Responsive Design

All animations are optimized for different screen sizes:
- Desktop: Full animation suite
- Tablet: Reduced particle count
- Mobile: Simplified animations, touch-optimized

## 🌟 Highlights

- **60 FPS Animations**: Smooth performance on modern browsers
- **Accessibility**: Respects `prefers-reduced-motion` setting
- **Interactive**: Every element has meaningful feedback
- **Immersive**: Cursor tracking and dynamic backgrounds
- **Professional**: Production-ready animation patterns

---

Built with ❤️ for the Hollow HQ community
