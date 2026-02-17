// Privacy Policy Content — Cake: Birthday Reminders
// Edit THIS file to update the privacy policy. The Astro template renders it automatically.

// --- Content Block Types ---

type TextBlock = { type: 'text'; content: string; bold?: boolean };
type ListBlock = { type: 'list'; ordered?: boolean; items: string[] };
type NamedListBlock = { type: 'named-list'; items: { name: string; detail: string }[] };
type TableBlock = {
  type: 'table';
  className?: string;
  headers: string[];
  rows: (string | { text: string; bold?: boolean })[][];
};
type CalloutBlock = { type: 'callout'; title: string; items: string[] };
type DividerBlock = { type: 'divider' };

export type ContentBlock =
  | TextBlock
  | ListBlock
  | NamedListBlock
  | TableBlock
  | CalloutBlock
  | DividerBlock;

export type PolicySubsection = {
  title: string;
  content: ContentBlock[];
};

export type PolicySection = {
  id: string;
  label: string;
  title: string;
  subsections?: PolicySubsection[];
  content?: ContentBlock[];
};

export type PolicyData = {
  meta: { effective: string; lastUpdated: string; description: string };
  sections: PolicySection[];
  footer: { effective: string; lastUpdated: string; acceptance: string; closing: string };
  navGroups: { title: string; sectionIndices: [number, number] }[];
};

// --- Policy Content ---

export const policyData: PolicyData = {
  meta: {
    effective: 'February 14, 2025',
    lastUpdated: 'February 14, 2026',
    description:
      'Privacy policy for Cake - Birthday Reminders. Local-only storage, no tracking, no servers.',
  },

  navGroups: [
    { title: 'Privacy', sectionIndices: [0, 7] },
    { title: 'Legal', sectionIndices: [7, 10] },
  ],

  sections: [
    // ─── OVERVIEW ───
    {
      id: 'overview',
      label: 'Overview',
      title: 'Overview',
      content: [
        {
          type: 'text',
          content:
            '<strong>Cake: Birthday Reminders</strong> ("the App") is developed by <strong>BYSN Apps</strong>, a sole proprietorship in Massachusetts, United States. This policy applies only to the App.',
        },
        {
          type: 'text',
          content:
            'We do not operate any server or backend that collects, stores, or processes your data. All birthday data, contact information, and preferences stay on your device. The only exceptions are: (1) a single share counter integer stored in your iCloud (never transmitted to BYSN Apps), (2) purchase transactions handled entirely by Apple, and (3) birthday data you choose to send directly to another device via Nearby Share.',
        },
        {
          type: 'callout',
          title: 'Core Commitments',
          items: [
            '<strong>No servers:</strong> We operate no backend infrastructure',
            '<strong>No tracking:</strong> No analytics, telemetry, ads, or crash reporting',
            '<strong>No accounts:</strong> No user IDs, login, or device fingerprinting',
            '<strong>Your control:</strong> All permissions are optional and revocable in iOS Settings',
          ],
        },
      ],
    },

    // ─── 1. DATA STORAGE ───
    {
      id: 'data-storage',
      label: '1. Data Storage',
      title: '1. What the App Stores and Where',
      subsections: [
        {
          title: '1.1 On Your Device (Local Only)',
          content: [
            {
              type: 'named-list',
              items: [
                { name: 'SwiftData (SQLite)', detail: 'Birthday entries, contact data, blocklist, duplicate decisions — in the app\'s sandboxed directory, protected by iOS Data Protection encryption' },
                { name: 'UserDefaults', detail: 'App preferences and display settings' },
                { name: 'iOS Keychain', detail: 'Purchase unlock status and Nearby Share identity keys — configured for device-only storage (not synced to iCloud)' },
                { name: 'App Group container', detail: 'Birthday data shared with the home screen widget via WidgetKit (local only)' },
              ],
            },
          ],
        },
        {
          title: '1.2 iCloud (Share Counter)',
          content: [
            {
              type: 'text',
              content:
                'The App stores <strong>one data point</strong> in your iCloud: a counter tracking how many times you\'ve shared the App (used for feature unlocks). This is a single integer stored via Apple\'s <code>NSUbiquitousKeyValueStore</code> in your personal iCloud account. This data is <strong>never transmitted to BYSN Apps</strong> — it exists solely in your iCloud to persist across your devices. No birthday data, contact information, or personal details are synced.',
            },
          ],
        },
      ],
      content: [{ type: 'divider' }],
    },

    // ─── 2. PERMISSIONS ───
    {
      id: 'permissions',
      label: '2. Permissions',
      title: '2. iOS Permissions',
      content: [
        {
          type: 'table',
          className: 'permissions-table',
          headers: ['Permission', 'Purpose', 'Required?'],
          rows: [
            [{ text: 'Contacts', bold: true }, 'Read contacts to import birthdays; optionally write back birthday dates, photos, and tag labels to contact records', 'No'],
            [{ text: 'Notifications', bold: true }, 'Local birthday reminders (no push notifications, no remote servers)', 'No'],
            [{ text: 'Photos', bold: true }, 'Save birthday cards to your library; select photos for contact profiles', 'No'],
            [{ text: 'Local Network', bold: true }, 'Discover nearby devices for encrypted birthday sharing', 'No'],
            [{ text: 'Siri', bold: true }, 'Voice-activated birthday queries via AppIntents', 'No'],
          ],
        },
        {
          type: 'text',
          content:
            'The App does not request access to location, camera, microphone, health data, calendar, or email. No data from any permission is sent to us.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 3. PURCHASES ───
    {
      id: 'purchases',
      label: '3. Purchases',
      title: '3. In-App Purchases',
      content: [
        {
          type: 'text',
          content:
            'The App offers optional cosmetic unlocks (themes, icons, card designer) via <strong>Apple\'s StoreKit 2</strong>. Apple handles all payment processing. We do not see, store, or process any payment information, Apple ID, or transaction details. The App stores only which features you\'ve unlocked in the device Keychain.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 4. NEARBY SHARE ───
    {
      id: 'nearby-share',
      label: '4. Nearby Share',
      title: '4. Nearby Share (Device-to-Device)',
      content: [
        {
          type: 'text',
          content:
            'The App includes an optional feature to share birthdays directly with another nearby device over the local network (Wi-Fi/Bluetooth) using Apple\'s MultipeerConnectivity framework. <strong>No data passes through any server.</strong>',
        },
        {
          type: 'list',
          items: [
            'You choose exactly which birthdays to share',
            'All data is end-to-end encrypted using Apple\'s CryptoKit before transmission',
            'The recipient must explicitly accept the shared birthdays',
          ],
        },
        { type: 'divider' },
      ],
    },

    // ─── 5. THIRD-PARTY LIBRARIES ───
    {
      id: 'dependencies',
      label: '5. Dependencies',
      title: '5. Third-Party Libraries',
      content: [
        {
          type: 'text',
          content:
            'The App uses open-source UI/animation libraries (Pow, Lottie, ConfettiSwiftUI, SwiftUI-Shimmer, DeckKit) for visual effects only. None of these libraries perform network operations or collect data.',
        },
        {
          type: 'text',
          content:
            'The Company\'s website (bysnapps.com) may use its own analytics. The website\'s data practices are not covered by this policy.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 6. DELETING YOUR DATA ───
    {
      id: 'data-deletion',
      label: '6. Data Deletion',
      title: '6. Deleting Your Data',
      content: [
        {
          type: 'text',
          content: 'The App provides three levels of deletion:',
        },
        {
          type: 'list',
          items: [
            '<strong>Individual entries:</strong> Swipe left on any birthday and tap Delete',
            '<strong>Clear All Data</strong> (Settings): Deletes the birthday database, blocklist, and preferences. Does <strong>not</strong> clear Keychain items (purchases, crypto keys) or the iCloud share counter',
            '<strong>Reset Entire App</strong> (Settings): Deletes <strong>everything</strong> — database, preferences, Keychain entries, iCloud share counter, all caches and filesystem data',
          ],
        },
        {
          type: 'text',
          content: '<strong>Note:</strong> Birthday dates, photos, or tag labels previously written back to iOS Contacts (see Section 2) persist independently and must be removed manually in the Contacts app. If you uninstall without running "Reset Entire App" first, Keychain items and the iCloud share counter may persist.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 7. CHILDREN'S PRIVACY ───
    {
      id: 'childrens-privacy',
      label: "7. Children's Privacy",
      title: "7. Children's Privacy",
      content: [
        {
          type: 'text',
          content: 'The App is not directed to children under 13. We do not knowingly collect personal information from children. Since we operate no servers, there is no mechanism for such collection to occur. Parents can control access via iOS Screen Time.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 8. LEGAL ───
    {
      id: 'legal',
      label: '8. Legal',
      title: '8. Disclaimers & Liability',
      subsections: [
        {
          title: '8.1 Warranty Disclaimer',
          content: [
            {
              type: 'text',
              content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION, OR THAT DATA LOSS WILL NOT OCCUR.',
            },
          ],
        },
        {
          title: '8.2 Limitation of Liability',
          content: [
            {
              type: 'text',
              content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, BYSN APPS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING DATA LOSS DUE TO DEVICE DAMAGE, iOS UPDATES, OR DELETION VIA APP SETTINGS.',
            },
          ],
        },
        {
          title: '8.3 Apple Platform Services',
          content: [
            {
              type: 'text',
              content: 'The App integrates with Apple services (iCloud, StoreKit, Contacts, Notifications). These are governed by <a href="https://www.apple.com/legal/privacy/">Apple\'s Privacy Policy</a>, not this one. We are not responsible for Apple\'s data handling or service availability.',
            },
          ],
        },
      ],
      content: [{ type: 'divider' }],
    },

    // ─── 9. POLICY UPDATES ───
    {
      id: 'policy-updates',
      label: '9. Updates',
      title: '9. Policy Updates',
      content: [
        {
          type: 'text',
          content: 'This policy may be modified from time to time. The current version is always available at this page with the "Last Updated" date above. Continued use of the App constitutes acceptance of the current policy.',
        },
        { type: 'divider' },
      ],
    },

    // ─── 10. CONTACT ───
    {
      id: 'contact',
      label: '10. Contact',
      title: '10. Contact',
      content: [
        {
          type: 'text',
          content: 'Questions about this policy or your data:<br /><strong>Email:</strong> <a href="mailto:support@bysnapps.com" style="color: #fc3d4f;">support@bysnapps.com</a><br /><strong>Website:</strong> <a href="https://www.bysnapps.com" style="color: #fc3d4f;">bysnapps.com</a>',
        },
        {
          type: 'text',
          content: 'Since we do not hold your data on our systems, most requests can be resolved by using the in-app controls described in Section 6.',
        },
        {
          type: 'text',
          content: 'This policy is governed by the laws of the Commonwealth of Massachusetts, United States.',
        },
      ],
    },
  ],

  footer: {
    effective: 'February 14, 2025',
    lastUpdated: 'February 14, 2026',
    acceptance: 'By using the App you acknowledge and accept this Privacy Policy.',
    closing: 'We believe your birthday data is your business — not ours.',
  },
};
