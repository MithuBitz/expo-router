<div align="center">

# Expo Router Pro

**A hands-on Expo Router playground for file-based routing, dynamic segments, and nested routes.**

[![Expo SDK](https://img.shields.io/badge/Expo_SDK-55-000020?style=flat-square&logo=expo&logoColor=white)](https://docs.expo.dev/versions/v55.0.0/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-55-4630EB?style=flat-square)](https://docs.expo.dev/router/introduction/)
[![React Native](https://img.shields.io/badge/React_Native-0.83-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Getting started](#-getting-started) · [Routes](#-routes) · [Project structure](#-project-structure) · [Learn more](#-learn-more)

</div>

---

## Overview

**Expo Router Pro** is a small React Native app built to explore [Expo Router](https://docs.expo.dev/router/introduction/) patterns in a real project layout. Routes live under `src/app/` using file-based conventions—static screens, dynamic `[param]` segments, nested folders, and a catch-all `[...slug]` route for flexible paths.

Use it as a reference when learning how URLs map to files, how `Link` navigation works, and how `useLocalSearchParams()` reads route parameters.

## Features

- **File-based routing** — Screens are defined by the filesystem under `src/app/`
- **Stack navigation** — Root `Stack` layout from `expo-router`
- **Dynamic routes** — `user/[userId]` and `username/[username]` with typed params
- **Catch-all docs route** — `docs/[...slug]` handles arbitrary path depth (e.g. `/docs/react/introduction`)
- **Typed routes** — Enabled via `experiments.typedRoutes` in `app.json`
- **React Compiler** — Experimental compiler enabled in Expo config
- **Cross-platform** — iOS, Android, and web (`expo start --web`)
- **Path aliases** — `@/*` maps to `src/*` for clean imports

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Expo](https://expo.dev) SDK 55 |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction/) 55 |
| UI | React Native 0.83 + React 19 |
| Language | TypeScript (strict) |
| Navigation | React Navigation 7 (via Expo Router) |

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

## Routes

The home screen links to every route below for quick testing.

| Path | File | Description |
|------|------|-------------|
| `/` | `src/app/index.tsx` | Home — links to all demo routes |
| `/about` | `src/app/about.tsx` | Static screen |
| `/profile` | `src/app/profile/index.tsx` | Nested index route |
| `/profile/details` | `src/app/profile/details.tsx` | Nested static route |
| `/user/:userId` | `src/app/user/[userId].tsx` | Dynamic segment — e.g. `/user/145` |
| `/username/:username` | `src/app/username/[username].tsx` | Dynamic segment — e.g. `/username/mithu` |
| `/docs/*` | `src/app/docs/[...slug].tsx` | Catch-all — e.g. `/docs/react`, `/docs/react/introduction` |

### Route examples

```tsx
// Static
<Link href="/about">About</Link>

// Dynamic param
<Link href="/user/145">User profile</Link>

// Catch-all (slug becomes string | string[])
<Link href="/docs/react/introduction">Docs</Link>
```

Reading params in a dynamic screen:

```tsx
import { useLocalSearchParams } from "expo-router";

const { userId } = useLocalSearchParams();
```

## Project structure

```
expo-router-pro/
├── assets/                 # Icons, splash, favicon
├── src/
│   ├── app/                # Expo Router routes (file-based)
│   │   ├── _layout.tsx     # Root Stack layout
│   │   ├── index.tsx       # /
│   │   ├── about.tsx       # /about
│   │   ├── profile/        # /profile, /profile/details
│   │   ├── user/           # /user/[userId]
│   │   ├── username/       # /username/[username]
│   │   └── docs/           # /docs/[...slug]
│   └── component/
│       └── home.tsx        # Home links & copy
├── app.json                # Expo config (scheme, experiments, web)
├── package.json
└── tsconfig.json           # @/* path alias → src/*
```

**Conventions**

- Files in `src/app/` become routes; folders create URL segments.
- `[param].tsx` — single dynamic segment.
- `[...slug].tsx` — catch-all (rest of path).
- `_layout.tsx` — layout wrapper for child routes.

## Configuration highlights

From `app.json`:

- **Deep linking scheme:** `exporouterpro`
- **Typed routes:** `experiments.typedRoutes: true`
- **React Compiler:** `experiments.reactCompiler: true`
- **Web:** static export enabled

## Learn more

| Resource | Link |
|----------|------|
| Expo Router docs | https://docs.expo.dev/router/introduction/ |
| Expo SDK 55 | https://docs.expo.dev/versions/v55.0.0/ |
| Dynamic routes | https://docs.expo.dev/router/reference/url-parameters/ |
| Typed routes | https://docs.expo.dev/router/reference/typed-routes/ |

## Scripts

| Command | Action |
|---------|--------|
| `bun start` | Start Expo dev server |
| `bun run android` | Run on Android |
| `bun run ios` | Run on iOS |
| `bun run web` | Run in browser |
| `bun run lint` | Lint with Expo ESLint |
| `bun run reset-project` | Reset to a clean starter (see `scripts/`) |

---

<div align="center">

Built with [Expo](https://expo.dev) and [Expo Router](https://docs.expo.dev/router/introduction/)

</div>
