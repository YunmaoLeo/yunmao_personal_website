# Public Assets

This folder contains static assets that will be served directly without processing by Vite.

## What to put here:

- `favicon.ico` - Your website favicon (16x16 or 32x32 px)
- `robots.txt` - SEO crawler instructions
- `sitemap.xml` - Site structure for search engines
- Images that don't need optimization
- Other static files

## Recommended:

1. **Add a favicon**: Create or download a favicon and place it here as `favicon.ico`
2. **Add social media preview image**: Add an `og-image.png` (1200x630 px) for better social media sharing

## Note:

Files in this folder can be referenced in your HTML using absolute paths:

```html
<link rel="icon" href="/favicon.ico" />
<meta property="og:image" content="/og-image.png" />
```

