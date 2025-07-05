# Static Assets Directory

This directory contains all static assets for the LeaseWizard landing page.

## Directory Structure

```
public/static/
├── images/          # General images (backgrounds, photos, etc.)
├── icons/           # Icon files (SVG, PNG icons)
├── logos/           # Brand logos and partner logos
└── README.md        # This file
```

## Usage

To reference these assets in your code, use the path relative to the `public` directory:

### Examples:

**Images:**
```jsx
<img src="/static/images/hero-background.jpg" alt="Hero Background" />
```

**Icons:**
```jsx
<img src="/static/icons/check-mark.svg" alt="Check" />
```

**Logos:**
```jsx
<img src="/static/logos/company-logo.png" alt="Company Logo" />
```

## File Naming Convention

- Use lowercase with hyphens: `hero-background.jpg`
- Be descriptive: `user-dashboard-screenshot.png`
- Include size if multiple versions: `logo-small.png`, `logo-large.png`

## Supported Formats

- **Images**: JPG, PNG, WebP, SVG
- **Icons**: SVG (preferred), PNG
- **Logos**: SVG (preferred), PNG

## Optimization

- Compress images before adding them
- Use WebP format when possible for better performance
- Use SVG for icons and simple graphics