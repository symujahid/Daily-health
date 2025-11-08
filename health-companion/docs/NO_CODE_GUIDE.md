# No-Code Adaptation Checklist

Use this guide to move the React prototype into your preferred no-code mobile builder (Glide, Adalo, Bubble, FlutterFlow, Softr, etc.) while keeping the same experience for users with lower literacy levels.

## 1. Prepare the Data Source

1. Copy `src/data/diseases.js` into a spreadsheet-friendly format (Google Sheets, Airtable, Notion database).
2. Create tables/collections:
   - **Diseases**: `id`, `name`, `summary`, `motivation`, `prevalence`, `warningSigns` (multi-select), `doctorContact` (multi-select).
   - **Tips**: `diseaseId`, `category` (`diet`, `exercise`, `lifestyle`), `title`, `description`, `metric`, `serving`, `duration`, `evidence`, `sourceUrl`, `mediaLabel`, `mediaUrl`.
3. Maintain a **Sources** table if you want to display citations separately (fields: `tipId`, `organisation`, `year`, `url`).
4. Export JSON from the spreadsheet if you need to refresh the React build later.

## 2. Build Screens

### Onboarding / Hero
- Duplicate the hero copy from `Hero.jsx`.
- Use large typography, gradient background, and a single call-to-action button that scrolls to the disease list or navigates to the conditions screen.
- Add an audio narration block if your platform supports it (upload MP3 or use text-to-speech via Voiceflow/ElevenLabs).

### Disease Directory
- Create a list/grid view sourced from the Diseases table.
- Include filters and quick search (criteria: name, summary keywords, motivation keywords).
- Show a badge for `prevalence` and a one-line benefit (use `motivation`).
- Tap action: open the detail screen passing the `id`.

### Disease Detail
- Tabs or segmented controls for `Diet`, `Exercise`, `Lifestyle` (filter Tips table on category).
- Swap in icons for each category to help low literacy users.
- Display warning pills using a repeating list with rounded containers.
- Add a reusable “See a clinician when…” component bound to the `doctorContact` multi-select.
- Embed video blocks by linking to `mediaUrl`. Many builders need the YouTube ID (text split after `v=`).

### Habit Tracker
- Create a related collection (`UserHabits`) with fields: `userId`, `diseaseId`, `tipId`, `target`, `progressToday`, `notes`, `createdAt`.
- Form defaults:
  - Pre-fill `diseaseId` with current screen context.
  - Pre-fill `tipId` if user tapped “Add to my habit tracker”.
  - Use `metric` as a hint for the target field.
- Show a filtered list of habits for the selected disease plus edit/delete actions.
- Add optional progress charts (bar for daily count, gauge for completion).

## 3. Automation & AI Support

1. **Text Simplification**: connect OpenAI, Anthropic, or Azure OpenAI via Make/Zapier to rewrite long evidence summaries into 6th-grade reading level. Store both original and simplified versions.
2. **Video Vetting**: use an automation to ping the YouTube Data API weekly and ensure each `mediaUrl` is still public; flag broken links in your admin view.
3. **Citation Tracker**: schedule quarterly reminders for medical advisor review; store `lastReviewed` on each tip.

## 4. Accessibility & Localization

- Provide toggle for “Simple text” vs. “More detail” by storing two versions of each tip description.
- Offer voice playback by adding text-to-speech actions or embedding an audio player.
- Keep button labels under 24 characters; ensure contrast ratio ≥ 4.5:1.
- Translate key strings via your platform’s localization or import CSV of translations.

## 5. Compliance & Safety

- Display the disclaimer component on every screen; make emergency call buttons conditional on region.
- Add privacy notice, data export, and delete account actions if collecting personal logs.
- Gate personal habit tracking behind user authentication (email/OTP/phone).
- If used in multiple countries, attach country-specific emergency numbers via a `Regions` table.

## 6. Rollout Playbook

1. Pilot the app with 5–10 target users to gather feedback on language clarity.
2. Track completion of first habit log as the primary activation metric.
3. Monitor tips opened vs. tips logged to refine content prioritisation.
4. Use in-app surveys (Typeform, Tally, Jotform) to gather new tip requests.

Maintain this file as you adapt the build so engineers and no-code specialists stay aligned. Update version numbers and data sources whenever content changes.
