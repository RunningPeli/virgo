<p align="center">
  <img src="./docs/public/logo.svg" style="width:100px;" />
</p>
<h1 align="center">
  <a href="https://virgoui.dev/" target="_blank" align="center">
    Virgo
  </a>
</h1>
<p align="center"><b>Offering a collection of reusable components and a unique control for enhanced customization.</b></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@runningpeli/virgo">
    <img src="https://img.shields.io/npm/v/@runningpeli/virgo.svg" alt="npm version">
  </a>
  <a href="https://github.com/RunningPeli/virgo/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/RunningPeli/virgo.svg" alt="License">
  </a>
  <a href="https://github.com/RunningPeli/virgo">
    <img src="https://img.shields.io/github/stars/RunningPeli/virgo.svg" alt="GitHub stars">
  </a>
</p>

## Features ✨

- **🎨 Unstyled**: Fully customizable, Virgo's components come unstyled, freeing you to apply your unique style. It's designed to be independent of any CSS framework.
- **♿ Accessible**: Developed with accessibility as a priority, ensuring your applications are accessible to all users.
- **⚙️ Global Configuration**: Beyond aesthetics, Virgo enables effortless customization through global settings, giving you control over the entire look and feel.
- **🌳 Tree Shaking**: With tree shaking support, Virgo ensures that your bundle includes only the components you use.
- **⚡ Vue 3 & Nuxt 3**: Built specifically for Vue 3 and Nuxt 3 applications.
- **📱 TypeScript**: Full TypeScript support with comprehensive type definitions.

## Installation 🛠️

```bash
# With npm
npm install @runningpeli/virgo

# With yarn
yarn add @runningpeli/virgo

# With pnpm
pnpm add @runningpeli/virgo
```

For detailed installation and configuration instructions, please refer to the [documentation](https://virgoui.dev/guide/getting-started/installation.html).

## Quick Start 🚀

### Vue 3

```vue
<template>
  <VirgoButton @click="handleClick">
    Click me!
  </VirgoButton>
</template>

<script setup>
import { VirgoButton } from '@runningpeli/virgo'

function handleClick() {
  console.log('Button clicked!')
}
</script>
```

### Nuxt 3

Add Virgo to your Nuxt modules:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@runningpeli/virgo/nuxt'
  ]
})
```

Then use components directly in your templates:

```vue
<template>
  <VirgoButton @click="handleClick">
    Click me!
  </VirgoButton>
</template>
```

## Documentation 📚

Visit our comprehensive documentation at [virgoui.dev](https://virgoui.dev) for:

- Component API references
- Configuration guides
- Examples and demos
- Migration guides
- Best practices

## Contributing 🤝

We welcome contributions! Please read our contributing guide to get started.

### Development Setup

This project uses a monorepo structure with pnpm workspaces. Here's how to get started:

#### Prerequisites

- Node.js 18+ 
- pnpm 8+

#### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/RunningPeli/virgo.git
cd virgo

# Install dependencies and build packages
pnpm run install-deps
```

#### Available Scripts

The project includes several npm scripts to help with development:

| Script | Description |
|--------|-------------|
| `pnpm run install-deps` | Install all dependencies and build packages |
| `pnpm run install-deps:frozen` | Install with frozen lockfile (CI/production) |
| `pnpm run clean` | Clean build artifacts and node_modules |
| `pnpm run dev` | Start development mode for all packages |
| `pnpm run watch` | Watch mode for package compilation |
| `pnpm run dev:docs` | Start the documentation development server |
| `pnpm run build` | Build all packages |
| `pnpm run build:docs` | Build the documentation site |
| `pnpm run test` | Run all tests |
| `pnpm run typecheck` | Run TypeScript type checking |
| `pnpm run lint` | Run ESLint |
| `pnpm run lint:fix` | Run ESLint with auto-fix |
| `pnpm run release` | Run the full release pipeline |

#### Project Structure

```
virgo/
├── packages/
│   └── core/              # Main Virgo component library
├── docs/                  # Documentation site (Nuxt)
├── playground/
│   ├── nuxt/             # Nuxt development playground
│   └── vue/              # Vue development playground
└── scripts/              # Build and setup scripts
```

#### Development Workflow

1. **Start Development**: After cloning and installing dependencies, you can start development:

```bash
# Start the documentation site with hot reload
pnpm run dev:docs

# Or start the component development
pnpm run dev

# For testing specific scenarios, use playgrounds:
cd playground/nuxt && pnpm run dev
# or
cd playground/vue && pnpm run dev
```

2. **Making Changes**: 
   - Components are located in `packages/core/src/`
   - Documentation examples are in `docs/content/`
   - Test your changes in the playgrounds

3. **Testing**: 
```bash
# Run all tests
pnpm run test

# Run type checking
pnpm run typecheck

# Run linting
pnpm run lint
```

4. **Building**:
```bash
# Build all packages
pnpm run build

# Build documentation
pnpm run build:docs
```

#### Custom Scripts Explanation

- **install-deps**: Uses a custom TypeScript script (`scripts/install.ts`) to install dependencies with `--ignore-scripts` flag and then builds packages to ensure everything is properly set up
- **clean**: Uses `scripts/clean.ts` to recursively remove `node_modules`, `dist`, `.output`, `.nuxt` directories from all packages
- **release**: Runs the complete CI pipeline (lint, typecheck, test) before publishing

### Playground Examples

To get started quickly, you can run one of the playground projects:

#### Nuxt Playground
```bash
cd playground/nuxt
pnpm run dev
```
This starts a Nuxt 3 application with Virgo components at `http://localhost:3000`

#### Vue Playground  
```bash
cd playground/vue
pnpm run dev
```
This starts a Vue 3 + Vite application with Virgo components at `http://localhost:5173`

### Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `pnpm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [VueUse](https://github.com/vueuse/vueuse) - Essential Vue composition utilities
- [Floating UI](https://github.com/floating-ui/floating-ui) - Positioning and floating elements
- [Vuetify](https://github.com/vuetifyjs/vuetify) - Inspiration for component design patterns

## Support 💬

- 📖 [Documentation](https://virgoui.dev)
- 🐛 [Issues](https://github.com/RunningPeli/virgo/issues)
- 💬 [Discussions](https://github.com/RunningPeli/virgo/discussions)
