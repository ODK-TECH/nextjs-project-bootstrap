Below is the detailed plan for building the Nigerian COVID‑19 Business Recovery App. This plan covers every dependent file and explains step‑by‑step changes, error handling, and best practices.

---

## Overview

The app addresses challenges across Nigeria’s top five income sources (small‑scale farming, petty trading, personal services, transportation, and retail) by providing:  
- Challenge‑specific tools for loss of customers, movement restrictions, supply chain disruptions, lack of capital, and market closures  
- Digital financial solutions (microloans, mobile money, digital payments)  
- Market access features (online marketplace, delivery coordination, customer connection)  
- Training and resilience resources (business recovery tips, crisis management guides, training videos)  
- Offline/low‑data mode via service worker support  
- A simple multilingual interface for users with low digital literacy and a dashboard for government/NGO monitoring

---

## File Structure & Changes

### 1. Global App Layout  
**File:** `src/app/layout.tsx` (new)  
- **Purpose:** Provide a unified layout (header, navigation, footer) for both web and mobile views.  
- **Changes:**  
  - Create header with clear site title and text‑only navigation links (Home, Dashboard, Marketplace, Financial, Training, Admin).  
  - Insert a language selector component (see Section 3).  
  - Add a `<main>` container for page content.  
  - Register the offline service worker using a client‑side useEffect hook with error handling (try‑catch around registration).  
- **Error Handling:** Log and display a fallback message if service worker registration fails.

---

### 2. Landing Page  
**File:** `src/app/page.tsx` (new)  
- **Purpose:** Serve as the entry point and overview for the app.  
- **Changes:**  
  - Create a hero section with a clear tagline (“Empowering Nigerian Businesses Overcoming COVID‑19 Challenges”) rendered in large, legible typography.  
  - Optionally include a modern hero image using an HTML `<img>` tag with:  
    ```html
    <img src="https://placehold.co/1920x1080?text=Modern+minimalist+landing+page+showing+business+recovery+message" alt="Modern minimalist landing page with bold layout and clear recovery message" onerror="this.style.display='none'" />
    ```  
  - Provide a brief description of digital financial solutions, market access, and training resources.  
- **Best Practices:** Use Tailwind CSS utility classes for spacing and responsive text sizes.

---

### 3. Language Selector Component  
**File:** `src/components/LanguageSelector.tsx` (new)  
- **Purpose:** Allow users to choose their local language (e.g., English, Yoruba, Hausa, Igbo, Pidgin).  
- **Changes:**  
  - Create a simple dropdown with textual options only.  
  - Use a React Context to store the selected language so it can be applied across pages.  
  - Include error boundaries for unexpected values.  
- **UI/UX:** Ensure high contrast and readable fonts.

---

### 4. Business Dashboard for Users  
**File:** `src/app/dashboard/page.tsx` (new)  
- **Purpose:** Provide a dashboard for business users to access challenge‑specific tools.  
- **Changes:**  
  - Split the page into clear sections for each income source.  
  - For every section, embed individual Income Source Cards (see Section 6) that list the five specific challenges along with actionable buttons.  
  - Use simple buttons with descriptive text (e.g., “Mitigate Customer Loss”, “Address Movement Restrictions”).  
- **Error Handling:** Use error boundaries to catch failures in API calls (if a future API integration is added) and display fallback UI.

---

### 5. Admin Dashboard for Government/NGOs  
**File:** `src/app/admin/page.tsx` (new)  
- **Purpose:** Enable monitoring of challenges and deployment of targeted aid.  
- **Changes:**  
  - Create a table or card‑based layout to display summary data (e.g., current challenges, number of affected businesses, geographic regions).  
  - Include filtering and date selection inputs using basic form components (reuse components from `src/components/ui`).  
- **Error Handling:** Validate data and display error messages if data fetch fails.

---

### 6. Marketplace Page  
**File:** `src/app/marketplace/page.tsx` (new)  
- **Purpose:** Provide market access features like online marketplaces and delivery coordination.  
- **Changes:**  
  - Render listings of products/services (text‑only cards using a simple grid layout).  
  - Each listing card has a title, description, and a “Connect” button.  
- **UI Considerations:** Use ample spacing and large fonts for readability; use Tailwind’s responsive utilities.

---

### 7. Digital Financial Solutions Page  
**File:** `src/app/financial/page.tsx` (new)  
- **Purpose:** Showcase microloans, mobile money integration, and digital payment options.  
- **Changes:**  
  - Display information cards (using a new component, see Section 8) describing each solution.  
  - Include call-to-action buttons (“Apply Now”, “Learn More”).  
- **Error Handling:** Check API responses for any dynamic microloan provider integration and use alerts for failure.

---

### 8. Training & Resilience Page  
**File:** `src/app/training/page.tsx` (new)  
- **Purpose:** Provide business recovery tips, crisis management guides, and sector‑specific training videos.  
- **Changes:**  
  - Create sections with text‑based guides and embed HTML5 video players for training videos.  
  - Videos should include a fallback message if playback fails.  
  - Use a clean layout with headings, subheadings, and ample whitespace.
- **Accessibility:** Ensure video controls are accessible and use descriptive alt text for any visual placeholders.

---

### 9. Income Source Card Component  
**File:** `src/components/IncomeSourceCard.tsx` (new)  
- **Purpose:** Reusable card that displays an income source (e.g., Small‑Scale Farming) with its associated challenges.  
- **Changes:**  
  - Accept props for title, description, and an array of challenges.  
  - Render a minimalistic card with text and action buttons linking to detailed challenge tools.  
- **Error Handling:** Validate props using TypeScript interfaces.

---

### 10. Challenge Tool Component  
**File:** `src/components/ChallengeTool.tsx` (new)  
- **Purpose:** Render challenge‑specific tools (e.g., strategies for “Loss of Customers”) with clear instructions and actionable steps.  
- **Changes:**  
  - Accept props for challenge title, description, and action callback.  
  - Render a UI with a descriptive headline, instructions, and a primary button (with try‑catch wrapped onClick handler).  
- **UI/UX:** Use clear typography and spacing to facilitate understanding for users with low digital literacy.

---

### 11. Financial Solution Card Component  
**File:** `src/components/FinancialSolutionCard.tsx` (new)  
- **Purpose:** Provide a reusable component for digital financial solutions.  
- **Changes:**  
  - Accept props for solution title, description, and action links/buttons.  
  - Render a simple card designed using clear borders and ample whitespace with text‑only display.  
- **Error Handling:** Validate asynchronously fetched data (if any) and display alerts upon errors.

---

### 12. Service Worker for Offline/Low-data Mode  
**File:** `public/sw.js` (new)  
- **Purpose:** Cache essential assets and pages to support offline access.  
- **Changes:**  
  - Define caching strategies for the HTML, CSS, JS, and images.  
  - Use `self.addEventListener('install', …)` and `self.addEventListener('fetch', …)` to intercept requests.  
  - Include error fallback strategies (return cached response if network fails).  
- **Best Practices:** Use “cache-first” for static assets and “network-first” for dynamic content.

---

### 13. Locales File for Language Strings  
**File:** `src/lib/locales.ts` (new)  
- **Purpose:** Store language strings for English and major local languages.  
- **Changes:**  
  - Define an object mapping language codes to string objects.  
  - Export a function to fetch strings based on current language context.  
- **Error Handling:** Use default strings (English) if language keys are missing.

---

## Integration & Best Practices  
- Use TypeScript for strict type checking and define interfaces for component props.  
- Use Tailwind CSS classes to create a modern, clean UI that is responsive and accessible.  
- Integrate error boundaries and try‑catch blocks in asynchronous operations (e.g., service worker registration and API calls).  
- Ensure that navigation is clear, with a header, footer, and in‑context calls to action.  
- Validate all external API integrations (in digital financial solutions) with appropriate error messages.  
- For any multimedia content, provide descriptive alt text, placeholder images only when necessary, and graceful onerror fallbacks.

---

## Summary

- Create a unified layout in `src/app/layout.tsx` with a header, navigation, language selector, and service worker registration.  
- Develop multiple pages for landing (page.tsx), dashboard, admin, marketplace, financial, and training, ensuring clear, user‑friendly interfaces.  
- Build reusable UI components (IncomeSourceCard, ChallengeTool, FinancialSolutionCard, LanguageSelector) with strong TypeScript type checking and error handling.  
- Implement an offline mode with `public/sw.js` using proper caching strategies.  
- Introduce a locales file (`src/lib/locales.ts`) for multilingual support.  
- Maintain modern design using Tailwind CSS and clear typography to aid users with low digital literacy.  
- Validate dynamic functionalities and API integrations with error boundaries and fallback displays.
