// Site Configuration
export const SITE = {
  name: 'BYSN Apps',
  tagline: 'Crafting Premium iOS Experiences',
  description:
    'We believe in software that people genuinely enjoy using, not just tolerate. Every app is designed with intention, built with care, and refined until it feels effortless.',
  url: 'https://www.bysnapps.com',
  github: 'https://github.com/zaynramsay',
  email: 'support@bysnapps.com',
} as const;

// Apps Data
export const APPS = {
  cake: {
    name: 'Cake',
    tagline: 'Birthday Reminders',
    description:
      'Never miss a birthday again. Celebrate better — without the last-minute panic. Beautiful widgets, smart reminders, and meaningful insights, all while keeping your data completely private.',
    appStoreUrl: 'https://apps.apple.com/us/app/cake-birthday-reminders/id6743376594',
    features: ['Widgets', 'Privacy-First', 'Smart Reminders', 'Contact Sync'],
    color: {
      primary: '#FC3D4F',
      light: '#FF6B7D',
    },
  },
  listenOn: {
    name: 'ListenOn',
    tagline: 'Song Link Converter',
    description:
      'Universal song link converter. Drop in any streaming service link and instantly get links for Spotify, Apple Music, YouTube Music, and more. Share music with anyone, regardless of their platform.',
    appStoreUrl: '', // Coming soon
    features: ['Universal Links', 'All Platforms', 'Instant Convert', 'Easy Share'],
    color: {
      primary: '#1DB954',
      light: '#1ED760',
    },
    comingSoon: true,
  },
} as const;

// External URLs
export const URLS = {
  appStore: {
    badge: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg',
  },
} as const;

// Navigation Links
export const NAV_LINKS = {
  home: [
    { label: 'Apps', href: '#apps' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  cake: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Download', href: '#download' },
  ],
  privacy: [
    { label: 'Back to Cake', href: '/apps/cake' },
  ],
} as const;

// Footer Links
export const FOOTER_LINKS = {
  home: [
    { label: 'Privacy', href: '/privacy/cake' },
    { label: 'Support', href: `mailto:${SITE.email}` },
    { label: 'GitHub', href: SITE.github },
  ],
  cake: [
    { label: 'Privacy Policy', href: '/privacy/cake' },
    { label: 'Support', href: `mailto:${SITE.email}` },
    { label: 'App Store', href: APPS.cake.appStoreUrl },
  ],
} as const;
