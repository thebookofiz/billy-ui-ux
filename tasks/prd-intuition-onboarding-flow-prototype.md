# PRD: Intuition Onboarding Flow Prototype

## Overview
Create a non-functional but interactive prototype of the Intuition app onboarding flow. Intuition is a "human signal marketplace" where users rank things, earn from their opinions, and discover experts. This prototype will demonstrate the complete onboarding experience with a unified light theme design system, allowing stakeholders to click through the entire flow for demo purposes.

## Goals
- Create a fully navigable React prototype of the onboarding flow
- Implement a consistent light theme design system across all screens
- Enable interactive elements (sliders, buttons, selections) without backend persistence
- Support React Router navigation with distinct URLs for each screen
- Match the general aesthetic of the provided screenshots while maintaining uniformity

## Quality Gates

These commands must pass for every user story:
- `npm run build` - Production build succeeds
- `npm run lint` - Linting passes

## User Stories

### US-001: Initialize React Project with Vite and Tailwind
As a developer, I want a properly configured React project so that I can build the prototype efficiently.

**Acceptance Criteria:**
- [ ] Vite + React project initialized with TypeScript
- [ ] Tailwind CSS configured and working
- [ ] React Router DOM installed and basic routing structure in place
- [ ] Project runs with `npm run dev`
- [ ] ESLint configured for code quality

### US-002: Create Design System Foundation
As a designer, I want a unified design system so that all screens have a consistent look and feel.

**Acceptance Criteria:**
- [ ] Color palette defined in Tailwind config (cream/off-white backgrounds, accent colors)
- [ ] Typography scale defined (headings, body text, captions)
- [ ] Spacing and border radius tokens established
- [ ] Reusable Button component created (primary, secondary, ghost variants)
- [ ] Reusable Card component created
- [ ] Design matches the light theme aesthetic from screenshots

### US-003: Create Welcome Screen
As a new user, I want to see a welcome screen so that I understand what Intuition offers.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/welcome`
- [ ] Displays Intuition branding/logo placeholder
- [ ] Shows welcome message and value proposition
- [ ] "Get Started" button navigates to next screen
- [ ] Uses design system components

### US-004: Create Value Proposition Screens
As a new user, I want to learn about Intuition's key features so that I understand the app's benefits.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/value-props`
- [ ] Displays the four key value propositions (Rank Anything, Earn from Opinions, Discover Experts, Build Credibility)
- [ ] Each value prop has an icon placeholder and description
- [ ] Navigation buttons to proceed or go back
- [ ] Uses design system components

### US-005: Create User Intent Selection Screen
As a new user, I want to select my intents so that the app understands how I want to use it.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/intent`
- [ ] Displays four intent options: Ranker, Explorer, Scout, Monetizer
- [ ] Each option has icon placeholder, title, and description
- [ ] Multi-select functionality (can choose multiple intents)
- [ ] Visual feedback when options are selected/deselected
- [ ] Continue button enabled when at least one intent selected
- [ ] Uses design system components

### US-006: Create Stack Selection Screen
As a new user, I want to select topic stacks so that I can personalize my experience.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/stacks`
- [ ] Displays 6-8 predefined stacks (Gaming, Movies, Sports, Music, Food, Travel, etc.)
- [ ] Each stack has placeholder icon and name
- [ ] Multi-select functionality for choosing stacks
- [ ] Visual feedback when stacks are selected/deselected
- [ ] Continue button proceeds to next screen
- [ ] Uses design system components

### US-007: Create Feed Initialization Screen
As a new user, I want to see my feed being set up so that I understand the app is personalizing for me.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/feed-setup`
- [ ] Shows a visual representation of feed initialization
- [ ] Displays selected stacks/intents being processed
- [ ] Auto-advances or has button to continue after brief moment
- [ ] Uses design system components

### US-008: Create Stack Creation Demo Screen
As a new user, I want to see how to create a stack so that I understand this core feature.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/create-stack`
- [ ] Shows UI for creating a new stack
- [ ] Input field for stack name (interactive but not persisted)
- [ ] Option to add items to stack
- [ ] Continue/Skip button to proceed
- [ ] Uses design system components

### US-009: Create Ranking Activity Screen
As a new user, I want to try ranking items so that I understand the core interaction.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/ranking`
- [ ] Displays two items to compare
- [ ] Interactive slider that moves between the two options
- [ ] Slider position updates visual feedback in real-time
- [ ] Submit/Continue button to proceed
- [ ] Mock data for items being ranked
- [ ] Uses design system components

### US-010: Create Achievements/Progress Screen
As a new user, I want to see my achievements so that I feel rewarded for completing onboarding.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/achievements`
- [ ] Displays mock achievement badges or progress indicators
- [ ] Shows credibility score concept
- [ ] Celebratory/positive messaging
- [ ] Continue button to proceed
- [ ] Uses design system components

### US-011: Create Credibility Import Screen (X/Twitter)
As a new user, I want to import my credibility from X/Twitter so that I can bootstrap my reputation.

**Acceptance Criteria:**
- [ ] Route exists at `/onboarding/import`
- [ ] Shows option to connect X/Twitter account
- [ ] "Connect" button opens fake OAuth modal/popup
- [ ] Modal shows mock authorization screen
- [ ] On "authorize", shows success state with mock imported profile data
- [ ] Skip option available
- [ ] Uses design system components

### US-012: Create Placeholder Home/Feed Screen
As a user completing onboarding, I want to land on a home screen so that I know I've finished the flow.

**Acceptance Criteria:**
- [ ] Route exists at `/home` or `/feed`
- [ ] Displays placeholder content indicating main app area
- [ ] Shows "Welcome to Intuition" or similar message
- [ ] Basic layout structure suggesting where feed content would appear
- [ ] Uses design system components

### US-013: Implement Complete Navigation Flow
As a user, I want seamless navigation between all onboarding screens so that I can demo the complete flow.

**Acceptance Criteria:**
- [ ] All screens connected in correct order via React Router
- [ ] Back buttons work correctly on applicable screens
- [ ] Progress indicator shows current position in onboarding (optional but recommended)
- [ ] No dead ends - every screen has a path forward
- [ ] Flow: Welcome → Value Props → Intent → Stacks → Feed Setup → Create Stack → Ranking → Achievements → Import → Home

## Functional Requirements
- FR-1: The app must use React Router with distinct URLs for each onboarding step
- FR-2: All interactive elements (buttons, sliders, checkboxes) must respond to user input
- FR-3: The ranking slider must update visual position and associated values in real-time
- FR-4: Multi-select components must toggle selection state on click
- FR-5: The fake OAuth modal must appear and dismiss on user action
- FR-6: All screens must use the same design system components for consistency
- FR-7: The app must be responsive enough to demo on common screen sizes

## Non-Goals
- Backend API integration or data persistence
- User authentication or session management
- Actual X/Twitter OAuth integration
- Database or state management beyond component state
- Mobile-native features or PWA capabilities
- Accessibility compliance beyond basic semantics
- Automated testing (unit/integration tests)
- Production deployment configuration

## Technical Considerations
- Use React Router v6 for routing
- Tailwind CSS for styling with custom theme configuration
- Component state (useState) sufficient for interactive elements
- Consider using React Context if state needs to flow between screens (e.g., selected intents/stacks)
- Structure components in a logical folder hierarchy (components/, screens/, etc.)

## Success Metrics
- All onboarding screens render without errors
- Complete flow is navigable from start to finish
- Interactive elements respond to user input
- Visual consistency maintained across all screens
- Prototype runs successfully with `npm run dev`

## Open Questions
- Should selected intents/stacks visually appear on later screens (e.g., feed setup showing chosen stacks)?
- Exact copy/messaging for each screen - should it match screenshots exactly or use placeholder text?
- Specific placeholder icons to use (emoji, generic SVG icons, etc.)?