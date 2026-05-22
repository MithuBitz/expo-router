<div align="center">

# Expo Router Pro

**A hands-on Expo Router playground for route groups, protected stacks, drawer navigation, and custom tab bars.**

[![Expo SDK](https://img.shields.io/badge/Expo_SDK-55-000020?style=flat-square&logo=expo&logoColor=white)](https://docs.expo.dev/versions/v55.0.0/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-55-4630EB?style=flat-square)](https://docs.expo.dev/router/introduction/)
[![React Native](https://img.shields.io/badge/React_Native-0.83-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Getting started](#-getting-started) · [Navigation](#-navigation) · [Routes](#-routes) · [Project structure](#-project-structure) · [Learn more](#-learn-more)

</div>

---

## Overview

**Expo Router Pro** is a small React Native app for exploring [Expo Router](https://docs.expo.dev/router/introduction/) in a realistic app shell. Routes live under `src/app/` using file-based conventions, organized into **route groups** `(auth)`, `(drawer)`, and `(tabs)` that do not appear in the URL.

The root layout uses **`Stack.Protected`** to switch between an auth flow and the main app. The active main navigator is a **drawer** with a custom sidebar (brand header, themed items, footer sign-in link). A **tabs** layout with a custom floating tab bar (including optional **liquid glass** via `expo-glass-effect`) is included as an alternate pattern you can enable from the root layout.

Use this repo to see how nested layouts compose, how auth gating works at the stack level, and how to customize React Navigation drawer and tab UI inside Expo Router.

## Features

- **Route groups** — `(auth)`, `(drawer)`, and `(tabs)` organize files without changing URLs
- **Protected routes** — `Stack.Protected` in the root layout toggles auth vs. main app (`isLoggedIn` flag)
- **Drawer navigation** — Custom `drawerContent`, light/dark palette, Ionicons, safe-area footer
- **Custom tab bar** — Optional `(tabs)` group with `tabBar` render prop and `GlassView` when available
- **Auth stack** — Login and register screens under `(auth)`
- **Typed routes** — `experiments.typedRoutes` in `app.json`
- **React Compiler** — Experimental compiler enabled in Expo config
- **Cross-platform** — iOS, Android, and web (`expo start --web`)
- **Path aliases** — `@/*` → `src/*`, `@/assets/*` → `assets/*`

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Expo](https://expo.dev) SDK 55 |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction/) 55 |
| UI | React Native 0.83 + React 19 |
| Language | TypeScript (strict) |
| Navigation | React Navigation 7 — Stack, Drawer, Bottom Tabs (via Expo Router) |
| Extras | `expo-glass-effect`, `react-native-reanimated`, `react-native-gesture-handler` |

> **Note:** This project targets [Expo SDK 55](https://docs.expo.dev/versions/v55.0.0/). Check the versioned docs before changing dependencies or APIs.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bun](https://bun.sh/) or npm / yarn / pnpm
- [Expo Go](https://expo.dev/go) on a device, or Android Studio / Xcode for simulators

### Install

```bash
git clone <your-repo-url>
cd expo-router-pro
bun install   # or: npm install
```

### Run

```bash
bun start          # Expo dev server (choose platform in terminal)
bun run android    # Open on Android
bun run ios        # Open on iOS
bun run web        # Open in browser
bun run lint       # Run ESLint
```

Scan the QR code with Expo Go, or press `a` / `i` / `w` in the dev server for Android, iOS, or web.

## Navigation

### Root stack and auth gating

`src/app/_layout.tsx` defines a root `Stack` with two protected branches:

| `isLoggedIn` | Visible group | Purpose |
|--------------|---------------|---------|
| `false` | `(auth)` | Login / register |
| `true` | `(drawer)` | Main app (default) |

Change `isLoggedIn` in the root layout to preview the auth flow vs. the drawer app.

```tsx
// src/app/_layout.tsx
const isLoggedIn = true; // set false to show (auth) screens
```

### Drawer (active main navigator)

`(drawer)/_layout.tsx` uses `expo-router/drawer` with a **custom drawer**: branded header, `DrawerItemList`, themed active/inactive states, and a footer link to `/login`. Screens: **Home**, **Explore**, **Settings**.

### Tabs (alternate, commented out)

To use bottom tabs instead of the drawer, in `src/app/_layout.tsx`:

1. Comment out the `(drawer)` `Stack.Screen`
2. Uncomment the `(tabs)` `Stack.Screen`

`(tabs)/_layout.tsx` implements a **custom tab bar** (`tabBar` prop) with a pill-style bar and optional **liquid glass** when `isLiquidGlassAvailable()` is true. Add matching screen files under `(tabs)/` for any routes referenced in that layout (currently `about.tsx` is present; extend with `index`, `explore`, `settings` as needed).

### Route groups and URLs

Folders wrapped in parentheses—e.g. `(drawer)`—are **route groups**. They organize layouts and files but **do not** add a URL segment. `(drawer)/index.tsx` maps to `/`, not `/drawer`.

## Routes

With `isLoggedIn = true` (default), the drawer group is mounted:

| Path | File | Description |
|------|------|-------------|
| `/` | `src/app/(drawer)/index.tsx` | Home |
| `/explore` | `src/app/(drawer)/explore.tsx` | Explore |
| `/settings` | `src/app/(drawer)/settings.tsx` | Settings |

Auth screens (visible when `isLoggedIn = false`):

| Path | File | Description |
|------|------|-------------|
| `/login` | `src/app/(auth)/login.tsx` | Login |
| `/register` | `src/app/(auth)/register.tsx` | Register |

Tabs group (enable `(tabs)` in root layout to use):

| Path | File | Description |
|------|------|-------------|
| `/about` | `src/app/(tabs)/about.tsx` | About (sample tab screen) |

### Link examples

```tsx
import { Link } from "expo-router";

// Drawer screens (main app)
<Link href="/">Home</Link>
<Link href="/explore">Explore</Link>
<Link href="/settings">Settings</Link>

// Auth
<Link href="/login">Login</Link>
<Link href="/register">Register</Link>
```

## Project structure

```
expo-router-pro/
├── assets/
│   ├── expo.icon/              # iOS app icon asset
│   └── images/                 # App icon, splash, favicon, Android adaptive icons
├── src/
│   ├── app/                    # Expo Router routes (file-based)
│   │   ├── _layout.tsx         # Root Stack + Stack.Protected auth gating
│   │   ├── (auth)/             # Auth route group (not in URL)
│   │   │   ├── _layout.tsx     # Auth Stack
│   │   │   ├── login.tsx       # /login
│   │   │   └── register.tsx    # /register
│   │   ├── (drawer)/           # Main app — drawer (active by default)
│   │   │   ├── _layout.tsx     # Drawer + custom drawerContent
│   │   │   ├── index.tsx       # /
│   │   │   ├── explore.tsx     # /explore
│   │   │   └── settings.tsx    # /settings
│   │   └── (tabs)/             # Alternate — bottom tabs (optional)
│   │       ├── _layout.tsx     # Tabs + custom tabBar (glass effect)
│   │       └── about.tsx       # /about
│   └── component/
│       └── home.tsx            # Legacy starter component (unused by routes)
├── .vscode/                    # Editor settings & recommended extensions
├── app.json                    # Expo config (scheme, experiments, web, splash)
├── package.json
├── tsconfig.json               # Path aliases: @/*, @/assets/*
├── AGENTS.md                   # Agent note: use Expo SDK 55 docs
└── bun.lock
```

### Conventions

| Pattern | Meaning |
|---------|---------|
| `(group)/` | Route group — layout wrapper, omitted from URL |
| `_layout.tsx` | Layout for child routes (Stack, Drawer, Tabs) |
| `index.tsx` | Index route for that segment (`/`) |
| `[param].tsx` | Dynamic segment (not used in current routes) |
| `[...slug].tsx` | Catch-all segment (not used in current routes) |

## Configuration highlights

From `app.json`:

| Setting | Value |
|---------|--------|
| Deep linking scheme | `exporouterpro` |
| Typed routes | `experiments.typedRoutes: true` |
| React Compiler | `experiments.reactCompiler: true` |
| Web output | `static` |
| UI style | `automatic` (follows system light/dark) |

## Scripts

| Command | Action |
|---------|--------|
| `bun start` | Start Expo dev server |
| `bun run android` | Run on Android |
| `bun run ios` | Run on iOS |
| `bun run web` | Run in browser |
| `bun run lint` | Lint with Expo ESLint |
| `bun run reset-project` | Reset helper (see `package.json`; requires `scripts/reset-project.js`) |

## Learn more

| Resource | Link |
|----------|------|
| Expo Router | https://docs.expo.dev/router/introduction/ |
| Expo SDK 55 | https://docs.expo.dev/versions/v55.0.0/ |
| Route groups | https://docs.expo.dev/router/reference/route-groups/ |
| Protected routes | https://docs.expo.dev/router/reference/protected-routes/ |
| Drawer navigator | https://docs.expo.dev/router/advanced/drawer/ |
| Tabs navigator | https://docs.expo.dev/router/advanced/tabs/ |
| Typed routes | https://docs.expo.dev/router/reference/typed-routes/ |

---

<div align="center">

Built with [Expo](https://expo.dev) and [Expo Router](https://docs.expo.dev/router/introduction/)

</div>
