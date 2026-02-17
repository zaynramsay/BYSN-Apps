# BYSN Apps

Marketing website for BYSN Apps - Crafting Premium iOS Experiences.

🌐 **Live Site**: [www.bysnapps.com](https://www.bysnapps.com)

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Language**: TypeScript - Type-safe development
- **Deployment**: GitHub Pages - Automated via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zaynramsay/bysn-apps.git
cd bysn-apps

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
├── public/              # Static assets (images, CNAME, robots.txt)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # UI components (Button, Card, etc.)
│   ├── layouts/         # Page layouts
│   ├── lib/             # TypeScript utilities and constants
│   ├── pages/           # Astro pages (file-based routing)
│   └── styles/          # Global CSS and Tailwind config
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Apps

### Cake - Birthday Reminders
Never miss a birthday again. Beautiful widgets, smart reminders, and meaningful insights.

- [App Store](https://apps.apple.com/us/app/cake-birthday-reminders/id6743376594)
- [Privacy Policy](/privacy/cake)

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# The built site will be in ./dist/
```

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary-blue` | `#007AFF` | Primary brand color |
| `cake-red` | `#FC3D4F` | Cake app accent |
| `secondary-purple` | `#5856D6` | Secondary accent |
| `bg-primary` | `#0a0a0a` | Dark background |

### Components

- **Glass Container**: Frosted glass effect with backdrop blur
- **Floating Orbs**: Animated background elements
- **Feature Cards**: Hover-interactive content cards
- **App Store Button**: Styled download badges

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2025 BYSN Apps. All rights reserved.
