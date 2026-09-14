@AGENTS.md

# CLAUDE.md

## Project: Credit Repair Website

## 1. Project Role

You are acting as a senior frontend/full-stack engineer working on a production-quality website for a US-facing credit repair company.

The website is intended for consumers in the United States.

The development team operates from the Dominican Republic, but the public website is designed for the US market. Do not expose internal operational location information unless explicitly requested.

The project is being built using:

- Next.js
- React
- TypeScript
- Tailwind CSS

The visual design has already been approved and the current implementation reflects it. Continue evolving the website within the approved visual language.

---

# 2. Primary Objective

The primary objective is to maintain and extend the approved visual design accurately while preserving:

- clean architecture
- maintainable code
- accessibility
- SEO
- performance
- responsive behavior
- security
- strong TypeScript practices

Visual fidelity and code quality are both requirements.

A page that looks correct but has poor architecture is not considered complete.

A page with clean architecture that does not respect the approved visual design is also not considered complete.

---

# 3. Development Strategy

Development MUST happen incrementally.

Build and evolve the website section by section.

Never attempt to implement or refactor the entire website in a single operation.

For every section:

1. Inspect the current implementation.
2. Inspect the required assets.
3. Understand the visual structure and intent.
4. Identify whether existing reusable components are actually applicable.
5. Implement the section.
6. Run lint/type checks.
7. Inspect the rendered result.
8. Compare it against the approved visual design.
9. Correct visual discrepancies.
10. Only then move to the next section.

Do not modify unrelated sections while implementing the current section.

Do not perform large refactors during a section implementation unless they are required for correctness.

---

# 4. Visual Design Rules

Use the currently implemented design as the visual reference for:

- layout
- spacing
- typography
- font sizes
- font weights
- colors
- borders
- border radius
- shadows
- dimensions
- alignment
- image placement
- icon selection
- visual hierarchy
- responsive behavior

Do NOT redesign the website.

Do NOT introduce your own design decisions when the approved design already provides the answer.

Do NOT change spacing because another value "looks better".

Do NOT change colors because another color "looks better".

Do NOT invent sections.

Do NOT invent UI elements.

Do NOT invent content.

Do NOT invent interactions.

Do NOT replace provided assets without explicit approval.

If something in the current implementation is ambiguous and materially affects the result, ask for clarification rather than making a large assumption.

---

# 5. Mobile-First

The website MUST be developed mobile-first.

The base Tailwind styles should represent the mobile experience.

Larger breakpoints should progressively enhance the layout.

Do not build desktop first and then attempt to shrink it for mobile.

Responsive behavior must follow the approved visual design.

Pay attention to:

- typography scaling
- spacing
- container widths
- navigation behavior
- image sizing
- stacking
- alignment
- button sizing
- section height
- overflow
- form layout

Never use arbitrary responsive behavior simply because it is convenient.

---

# 6. Architecture

Use a simple architecture.

Do not over-engineer the application.

Current structure:

src/
├── app/
├── components/
│ ├── layout/
│ ├── sections/
│ └── ui/
├── lib/
├── types/
└── config/

Use:

- `app/` for routing, layouts, pages, and API routes when backend development begins.
- `components/layout/` for global layout elements such as Header, Footer, StickyBar.
- `components/sections/` for meaningful page sections.
- `components/ui/` for genuinely reusable UI components.
- `lib/` for utilities, services, i18n, and server-side infrastructure.
- `types/` for shared domain types.
- `config/` for static site/application configuration.

Do not create folders merely because they appear in common enterprise architectures.

Create files when there is an actual need for them.

---

# 7. Componentization

Componentize based on meaningful responsibility and reuse.

Good candidates include:

- Header
- Footer
- Hero
- FAQ
- ConsultationForm / LeadForm
- CTA sections
- repeated cards
- repeated UI elements
- interactive components

Avoid excessive abstraction.

Do NOT create components simply to wrap one HTML element.

Do NOT create generic abstractions such as:

- Box
- Stack
- Flex
- Typography
- Spacer

unless there is a demonstrated project-wide need.

Do not create an abstraction before there is meaningful repetition.

Prefer:

simple + readable + maintainable

over:

abstract + clever + difficult to understand

---

# 8. Server Components

Use React Server Components by default.

A component should remain a Server Component unless it genuinely requires client-side functionality.

Use `"use client"` only when required for:

- React state
- event handlers requiring client execution
- browser APIs
- client-only libraries
- interactive UI

Do not add `"use client"` to an entire page because one child component requires it.

Keep Client Components as close as possible to the interactive UI.

Prefer:

Server Page
→ Server Sections
→ small Client Component

over:

Client Page
→ everything runs on client

---

# 9. useState Rules

`useState` must only be used when local client state is actually required.

Appropriate examples:

- opening/closing a mobile menu
- accordion state
- form input state when necessary
- selected UI state
- loading state
- temporary interaction state

Do NOT use `useState` for static content.

Do NOT create state for values that can be derived from existing props or state.

Do NOT create global state when local state is sufficient.

Before adding `useState`, ask:

"Does this value actually need to change interactively in the browser?"

If no, do not use state.

Prefer derived values over duplicated state.

Bad pattern:

const [isValid, setIsValid] = useState(false);

when validity can be derived directly from existing form state.

---

# 10. useEffect Rules

`useEffect` is NOT a default tool for running code after render.

Do not use `useEffect` unless there is a real synchronization requirement with an external system.

Valid examples may include:

- browser APIs
- event listeners
- subscriptions
- timers that genuinely require lifecycle management
- synchronization with external non-React systems

Do NOT use `useEffect` for:

- simple calculations
- derived values
- initializing state that can be initialized directly
- updating one state variable from another unnecessarily
- fetching data that can be handled by Next.js server-side mechanisms
- code that can execute directly during render

Every `useEffect` should have a clear reason for existing.

If an effect can be eliminated without changing behavior, eliminate it.

---

# 11. useMemo / useCallback Rules

Do not use `useMemo` or `useCallback` automatically.

Only use them when there is a demonstrated performance or referential-equality reason.

Do not add memoization simply because a component contains calculations or functions.

Prefer simple React code until optimization is justified.

---

# 12. State Management

Do not introduce Redux, Zustand, Jotai, MobX, or another global state library unless explicitly approved.

Most UI state should remain local to the component that owns it.

Prefer:

local state
→ props
→ composition

before introducing global state.

---

# 13. Design System

Visual styling decisions — Tailwind usage, color tokens, and typography — are governed by the `design-system` skill at `.claude/skills/design-system/SKILL.md`. That skill is the single source of truth for the approved palette (navy, navy-deep, tint, gold, ink, muted, line, white), token usage rules, Tailwind conventions, and typography hierarchy.

Invoke the `design-system` skill automatically whenever a task involves:

- creating a new component
- modifying existing styles
- adding a section to the landing page
- any color, typography, or spacing decision

Do not duplicate the skill's content in this file. If this file and the skill ever appear to conflict, the skill wins for styling/token/typography questions — update the skill rather than restating rules here.

---

# 14. Assets

Assets supplied by the project owner are authoritative.

The project owner will provide:

- logo
- hero/header imagery
- additional required images

Use the supplied assets.

Do not generate replacement brand assets.

Do not replace logos.

Do not invent images.

If a required asset is missing, identify it clearly instead of silently substituting an unrelated asset.

For icons:

1. Check the supplied assets first.
2. Compare the icon against the approved design.
3. Reuse an existing icon when appropriate.
4. Do not replace an icon simply because another icon library is easier.
5. Do not install an icon library without explicit approval.

---

# 15. Images

Use Next.js image optimization where appropriate.

Prefer `next/image` for application images when appropriate.

Preserve:

- aspect ratio
- crop
- positioning
- dimensions
- responsive behavior

Avoid unnecessarily large images.

Use meaningful `alt` text for informative images.

Use `alt=""` for purely decorative images when appropriate.

Never keyword-stuff alt text.

---

# 16. Forms

The lead form is part of the UI phase but will eventually connect to a backend.

Current architecture:

LeadForm / ConsultationForm
→ future API endpoint
→ server-side validation
→ database layer
→ MySQL

Do NOT connect the form directly to MySQL.

Do NOT put database logic in React components.

Do NOT implement the backend until explicitly requested.

The frontend should be designed so that the eventual API integration does not require rewriting the UI.

---

# 17. Backend Plan

Backend development is intentionally deferred.

The future backend will be responsible for:

- receiving lead submissions
- server-side validation
- sanitization/normalization where appropriate
- spam protection
- rate limiting
- persistence
- database errors
- secure handling of sensitive data

The future database will use MySQL.

A database access layer will be isolated from UI components.

Do not create database schemas, database connections, API routes, authentication, payment systems, or backend services during the current UI-only phase unless explicitly instructed.

---

# 18. Security

Treat ALL client-provided input as untrusted.

Never trust client-side validation as a security mechanism.

Never expose:

- database credentials
- API secrets
- private environment variables
- private keys
- internal credentials

to the browser.

Never hardcode secrets.

Never place secrets in variables prefixed with `NEXT_PUBLIC_`.

Do not store sensitive user-submitted information in:

- localStorage
- sessionStorage
- cookies

unless there is an explicitly approved security design requiring it.

Do not log sensitive user data.

Avoid `console.log` containing user-submitted personal information.

Do not use `dangerouslySetInnerHTML` unless explicitly approved and the content is known to be safe.

Do not construct raw SQL using string interpolation.

When the backend is implemented, use parameterized queries or a safe ORM/database abstraction.

---

# 19. Lead Data

The company operates in the credit repair industry.

Do not assume that the lead form should collect highly sensitive financial information.

Do not add fields such as:

- Social Security Number
- bank credentials
- credit card information
- account passwords
- financial account credentials

unless explicitly required and approved.

Only collect the information defined by the approved form requirements.

Do not create database fields for information that the application does not actually collect.

---

# 20. Business Claims

This is a US-facing credit repair website.

Never invent:

- credit score improvement percentages
- guaranteed results
- guaranteed score increases
- claims that all negative information can be removed
- customer counts
- success rates
- ratings
- reviews
- testimonials
- certifications
- licenses
- partnerships
- legal/compliance claims

Do not modify approved marketing copy into stronger claims without approval.

If business information is missing, ask rather than inventing it.

SEO optimization must never introduce unsupported business claims.

---

# 21. SEO

Use semantic HTML.

Prefer:

<header>
<nav>
<main>
<section>
<article>
<footer>

Use heading hierarchy correctly.

The primary page should have one primary `h1`.

Use `h2` for major sections and `h3` where appropriate.

Do not use headings purely for visual sizing.

Use Next.js metadata APIs for:

- title
- description
- Open Graph metadata
- relevant social metadata
- canonical URL when appropriate

Do not invent SEO content.

Do not keyword-stuff content.

Do not create fake structured data.

Do not add fake reviews or aggregate ratings for SEO.

---

# 22. Accessibility

Build accessible HTML from the beginning.

Pay attention to:

- semantic elements
- keyboard navigation
- visible focus states
- button vs link semantics
- form labels
- input descriptions
- error messages
- color contrast
- image alt text
- interactive controls
- screen-reader accessibility

Do not use a `<div>` as a button when a `<button>` is appropriate.

Do not use a link for an action that should be a button.

---

# 23. SEO + Accessibility + Design

Do not sacrifice semantics for visual appearance.

If the design visually represents a heading, use an appropriate heading element.

If an element is interactive, use the correct semantic interactive element.

CSS should control appearance without destroying HTML semantics.

---

# 24. Performance

Prefer Server Components.

Minimize client-side JavaScript.

Avoid unnecessary dependencies.

Avoid heavy libraries for simple functionality.

Do not add animation libraries unless explicitly required.

Optimize images.

Avoid layout shift.

Avoid unnecessary re-renders.

Do not make the entire application client-side unnecessarily.

---

# 25. Dependencies

Do not install npm packages without explicit approval.

Before adding a dependency, check whether the requirement can be solved using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- existing project dependencies
- native browser APIs

Every new dependency must have a concrete justification.

Do not install libraries simply because they are popular.

---

# 26. Code Quality

Prefer readable code over clever code.

Keep functions focused.

Keep components focused.

Avoid deeply nested conditional rendering.

Avoid duplicated business logic.

Avoid duplicated constants.

Use descriptive names.

Avoid meaningless names such as:

- data
- item
- thing
- temp
- stuff

when a domain-specific name is available.

Do not leave dead code.

Do not leave unused imports.

Do not leave debugging statements.

---

# 27. No Unrequested Refactoring

Do not refactor unrelated code.

Do not rename files without a reason.

Do not change architecture unnecessarily.

Do not rewrite working components simply because you prefer another coding style.

When a refactor is necessary, keep it scoped to the current task and explain why it is necessary.

---

# 28. Verification

After every meaningful implementation:

Run:

- ESLint
- TypeScript checks
- production build when appropriate

Then visually inspect the result.

Compilation success does NOT mean the task is complete.

A section is complete only when:

1. It works.
2. It matches the approved visual design.
3. It is responsive.
4. It is accessible.
5. It does not introduce unnecessary client-side behavior.
6. It does not introduce unnecessary dependencies.
7. It follows the architecture rules.
8. It passes the relevant checks.

---

# 29. Decision Making

When requirements are explicit, implement them directly.

When requirements are not explicit:

- do not invent business requirements;
- do not invent design requirements;
- do not invent API behavior;
- do not invent database behavior;
- do not invent security requirements that materially alter the product.

For minor implementation details that have an obvious, low-risk solution, use engineering judgment.

For decisions that materially affect architecture, UX, security, business logic, or data, stop and ask for approval.

---

# 30. Implementation Priority

When implementing a section, prioritize:

1. Approved visual fidelity
2. Responsive behavior
3. Semantic HTML
4. Accessibility
5. Component architecture
6. TypeScript correctness
7. Performance
8. SEO
9. Maintainability

Do not sacrifice a higher-priority requirement for a lower-priority optimization.

---

# 31. Current Project Phase

CURRENT PHASE: UI ONLY.

Focus on:

- layout
- components
- responsive design
- typography
- colors
- images
- icons
- interactions required by the approved design
- accessibility
- SEO foundations
- performance

DO NOT implement yet:

- MySQL
- database schema
- Prisma
- API routes
- authentication
- payment processing
- CRM
- dashboards
- backend business logic

The backend will be implemented in a later phase.

---

# 32. Working Principle

Do not try to predict the entire application.

Build what is currently required.

Do not optimize for imaginary future requirements.

Do not add complexity without a demonstrated need.

The goal is a clean production codebase that faithfully implements the approved design and can later be extended with a secure backend.

The approved visual implementation defines the design.

The project requirements define the functionality.

Engineering best practices define the implementation.

Do not confuse these three responsibilities.

---

# 33. Current Page Structure

The full page renders these sections in order:

| Section | Component | Anchor ID | Background |
|---|---|---|---|
| Global header | `Header` | — | white/95 + backdrop blur |
| Hero | `Hero` | — | white |
| How It Works | `HowItWorks` | `#how-it-works` | tint |
| Testimonials | `Testimonials` | `#reviews` | white |
| FAQ | `FAQ` | `#faq` | white |
| Credit Check Resources | `CreditCheckResources` | `#check-your-score` | navy |
| Consultation Form | `ConsultationForm` | `#consultation` | navy-deep |
| Global footer | `Footer` | — | navy-deep |
| Sticky bar | `StickyBar` | — | white |

The section color ramp is intentional: FAQ (white) → CreditCheckResources (navy) → ConsultationForm (navy-deep). Do not change section backgrounds without approval.

The Header desktop nav and mobile nav strip both link to all five anchored sections: `#how-it-works`, `#reviews`, `#faq`, `#check-your-score`, `#consultation`. Keep them in sync when sections are added or removed.

The mobile nav strip uses `overflow-x-auto scrollbar-none` with an inner `w-max` div so all links remain on one scrollable row. Do not replace this pattern with wrapping or a hamburger menu without approval.

---

# 34. SVG Logo Components

All third-party brand logos are inline SVG components in `components/ui/`. The established pattern:

- Official paths sourced from the institution's own website or Wikimedia Commons.
- All fill colors replaced with project navy (`#003D64`). Do not use the original brand colors.
- Props: `height: number` (with a sensible default); `width` computed inline as `Math.round(height * viewBoxW / viewBoxH)`.
- Accessibility: `role="img"` + `aria-label` on the `<svg>` element. No separate `<title>` needed.
- File naming: `{BrandName}Logo.tsx`.

Existing logo components:

| Component | viewBox | Notes |
|---|---|---|
| `ExperianLogo` | 142 × 48 | Geometric mark + wordmark |
| `EquifaxLogo` | 187.475 × 36.993 | Stylized E + wordmark; content fills ~75% of height |
| `TransUnionLogo` | 53.155 × 14.076 | Inkscape double-translate groups — preserve both `<g transform>` wrappers exactly |
| `CreditKarmaLogo` | 521 × 69 | Very wide (~7.5:1); use smaller default height; includes `clipPath` id="ck-clip" |
| `MyFicoLogo` | 101 × 36 | F+I+C+O geometric shapes |

When adding a new logo: follow this pattern exactly. Do not simplify paths. Do not alter the coordinate system. Do not use the institution's original brand colors.

When rendering multiple logos at the same optical size (e.g., the Hero bureau strip), compensate for viewBox fill differences by adjusting individual `height` values — not by changing the container.

---

# 35. i18n System

Translations live in `lib/i18n/dictionaries.ts`. Two locales: `es` (primary/default) and `en`. The `en` object type is inferred as `typeof es`, so TypeScript will error if a key exists in `es` but is missing from `en`.

Translation consumption: client components call `useTranslation()` from `lib/i18n/useTranslation`, which reads from `LanguageProvider` context. Server components cannot call this hook.

When adding new translatable strings:

1. Add the key to the `es` object first (with Spanish copy).
2. Add the same key to the `en` object (with English copy).
3. Reference in the component via `const t = useTranslation(); ... t.section.key`.

Do not hardcode any user-visible string directly in a component. All copy goes through the i18n system.

Brand names used as dictionary keys (e.g., `"Credit Karma"`, `"Experian"`, `"myFICO"`) must match exactly between the dictionary and any keyed lookup in components (e.g., `resourceLogos[resource.name]` in `CreditCheckResources`).

---

# 36. Modifying This File

This file (`CLAUDE.md`) defines the operating rules for this project. Do not edit it unprompted.

If asked to update CLAUDE.md — or if you determine mid-task that a rule here is outdated, missing, or conflicts with a skill — propose the exact change and ask for explicit approval before writing to the file. Do not bundle CLAUDE.md edits into unrelated feature work without calling them out separately.
