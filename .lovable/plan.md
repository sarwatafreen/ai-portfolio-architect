# Portfolio intelligence and discovery

## What will be added

- Add a compact **Ask Sarwat's portfolio** section where visitors can ask about verified projects, skills, learning areas, availability, and the AI Studio concept.
- Keep one conversation in the visitor's browser, with a clear reset action; no sign-in or shared visitor history.
- Ground answers only in a curated portfolio knowledge source and explicitly say when the portfolio does not contain an answer.
- Add interactive project browsing by **technology**, **category**, and **project type**, including an accessible empty state and clear-filter action.
- Add a searchable **Learning journal** with structured cards for frontend development, AI workflows, and lessons learned.
- Preserve the existing dark charcoal, lime, Manrope, and Space Grotesk visual system across desktop and mobile.

## Content and honesty rules

- Continue presenting Sarwat as a student and junior developer with approximately two months of practical experience.
- Do not invent employers, clients, testimonials, metrics, contact details, social links, GitHub links, project outcomes, or practical Shopify/WooCommerce experience.
- Mark planned work, concepts, and learning notes clearly; the AI Studio storefront remains an evolving concept rather than a completed production product.

## Technical approach

- Build the visible assistant from official AI Elements conversation, message, prompt-input, and loading primitives.
- Add a streaming TanStack server endpoint using Lovable AI Gateway and `openai/gpt-6-astra`, with reasoning enabled and the key kept server-side.
- Send the complete browser-saved message history on each request; keep persistence local to the visitor's browser.
- Put verified portfolio facts in a shared source used by both the page and the assistant grounding prompt.
- Keep project filtering and journal search client-side because the current portfolio content is curated and small.
- Add route-specific metadata updates where needed and retain accessibility, keyboard focus, loading/error states, and reduced-motion behavior.

## Validation

- Verify AI answers are grounded, unsupported questions are declined clearly, errors remain visible, and reset/history behavior works after reload.
- Verify all project-filter combinations, journal search, mobile layout, keyboard controls, focus behavior, and no horizontal overflow.
- Run the project's build and lint checks, then inspect the finished page in desktop and mobile viewports.

## Cloud note

This feature does not need visitor accounts or a database because history stays in the browser. Lovable Cloud can later add built-in database/storage, zero-hassle user logins, and server-side functions for payments, email, or persisted user data.
