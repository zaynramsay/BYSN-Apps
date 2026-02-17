#!/usr/bin/env npx tsx
/**
 * build-api.ts — Generates static JSON API files for cake.bysnapps.com/api
 *
 * Reads the canonical privacy policy data from src/data/privacy-cake.ts
 * and outputs structured JSON endpoints into the Cake-Website repo.
 *
 * Usage:
 *   npx tsx scripts/build-api.ts
 *
 * Output:
 *   ../Cake-Website/api/v1/privacy/effective-date.json
 *   ../Cake-Website/api/v1/privacy/meta.json
 *
 * The Cake-Website repo is a static GitHub Pages deploy.
 * These JSON files are served as-is from the CDN — zero latency, zero cost.
 *
 * When the privacy policy changes in src/data/privacy-cake.ts,
 * re-run this script and commit the updated JSON to Cake-Website.
 */

import { policyData } from '../src/data/privacy-cake.js';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CAKE_WEBSITE = resolve(__dirname, '../../Cake-Website');

// ── Helpers ──────────────────────────────────────────────

function ensureDir(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}

function writeJSON(relativePath: string, data: unknown) {
  const fullPath = resolve(CAKE_WEBSITE, relativePath);
  ensureDir(fullPath);
  writeFileSync(fullPath, JSON.stringify(data), 'utf-8');
  console.log(`  ✓ ${relativePath}`);
}

function isoDate(humanDate: string): string {
  return new Date(humanDate).toISOString().split('T')[0];
}

// ── Build endpoints ──────────────────────────────────────

console.log('\n  Building cake.bysnapps.com API\n');

// GET /api/v1/index.json — API discovery
writeJSON('api/v1/index.json', {
  api: 'cake.bysnapps.com',
  version: 'v1',
  endpoints: [
    { path: '/api/v1/privacy/effective-date.json', description: 'Privacy policy effective date and last updated timestamp' },
    { path: '/api/v1/privacy/meta.json', description: 'Privacy policy metadata including section index' },
  ],
});

// GET /api/v1/privacy/effective-date.json
writeJSON('api/v1/privacy/effective-date.json', {
  effectiveDate: isoDate(policyData.meta.effective),
  lastUpdated: isoDate(policyData.meta.lastUpdated),
});

// GET /api/v1/privacy/meta.json
writeJSON('api/v1/privacy/meta.json', {
  effectiveDate: isoDate(policyData.meta.effective),
  lastUpdated: isoDate(policyData.meta.lastUpdated),
  description: policyData.meta.description,
  sections: policyData.sections.map((s) => s.label),
  acceptance: policyData.footer.acceptance,
});

console.log('\n  Done.\n');
