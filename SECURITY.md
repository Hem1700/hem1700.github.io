# Security Policy

## Scope

This repository is a **static portfolio site** with no backend infrastructure, databases, or user accounts. The attack surface is minimal by design.

### In scope

- Client-side JavaScript vulnerabilities in the built output
- Content Security Policy gaps
- Sensitive data inadvertently committed to the repository (keys, tokens, PII)

### Out of scope

- GitHub Pages infrastructure itself
- The Anthropic API (report those to Anthropic directly)
- Attack Range scenarios — they are **intentionally vulnerable simulations** running entirely in JavaScript; there are no real servers to exploit

## Reporting a vulnerability

If you find a real security issue in this repo, please email **learning1599@gmail.com** with:

1. A description of the issue and its potential impact
2. Steps to reproduce
3. Any suggested remediation

Please do **not** open a public GitHub issue for security reports. I aim to respond within 72 hours.

## API key handling

Exploit Lab and Attack Range ask visitors for their own Anthropic API key to power AI features. The key is:

- Stored **only** in `sessionStorage` — cleared when the tab closes
- Sent **only** to `api.anthropic.com` over HTTPS
- Never logged, persisted to `localStorage`, or transmitted to any other endpoint

## Simulated credentials

Scenario data in Attack Range may contain strings that resemble credentials (AWS keys, tokens, passwords). These are clearly labeled as lab fixtures (e.g., `[REDACTED-LAB-KEY]`) and are **not real credentials**.
