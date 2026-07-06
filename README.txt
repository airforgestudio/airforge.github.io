AIRFORGE LAUNCH WEBSITE — MOBILE PACKAGE

Open index.html to preview the launch homepage. AF | Lite is in af-lite/index.html.
Upload the entire folder without changing paths and serve it over HTTPS for microphone recording and PWA support.

LOCAL MP3 ENCODER
Place lamejs.iife.js in af-lite/vendor/. AF | Lite loads that local path first. External CDNs remain only as emergency fallbacks.
The encoder file is not included because the current build environment could not fetch the third-party package.

Mobile improvements include a bottom thumb-friendly transport, scrollable workstation canvas, larger controls, full-screen metadata sheet, sticky session controls, PWA manifest, and offline shell caching.


AF | LITE ENTITLEMENT GATE v2
- Firebase account identity
- One-time Studio serial linkage through activateLiteAccount
- Returning sign-in checks checkLiteEntitlement by Firebase UID
- No browser machine ID and no desktop activation seat usage
- Serial is never stored in browser localStorage
