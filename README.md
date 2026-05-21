
# Impact Organization Website - Phase 1

This is the full-stack foundation for the Impact website. Follow these instructions for Phase 1 (UI Construction).

**Tasks**

**Developer 1: The Podcast Lead**
- **File:** `src/pages/Podcasts.jsx`
- **Source:** Use `podcastList` from `src/data/mockData.js`.
- **Task:** Build the podcast grid based on Figma design specifications.

**Developer 2: The Magazine Lead**
- **File:** `src/pages/Magazine.jsx`
- **Source:** Use `magazineList` from `src/data/mockData.js`.
- **Task:** Build the magazine library and "Read Now" button UI.

**Developer 3: The Events Lead**
- **File:** `src/pages/Events.jsx`
- **Source:** Use `eventList` from `src/data/mockData.js`.
- **Task:** Build the events calendar and list. Distinguish between Upcoming and Past events.

**Note:** Home, About Us, and Life at Impact will be assigned in Phase 2.

---

**GitHub Workflow**

1. **Never** code directly on the **main** branch.
2. **Daily Routine:** Run **git pull origin main** before starting any work.
3. **Branching:** Create a branch for your work: **git checkout -b feature/[your-name]-[page]**
4. **Pushing:** Run **git push origin feature/[your-name]-[page]** and open a Pull Request (PR) tagging **Seril** for review.

---

**Setup Instructions**

1. **Environment:** Create a **.env** file in the frontend folder.
2. **Keys:** Request **SUPABASE_URL** and **SUPABASE_KEY** from the Lead.
3. **Dependencies:** Run **npm install**.
4. **Execution:** Run **npm run dev**.

---

**Design System**

- **Figma:** Use the provided Figma link for all UI elements. The current codebase is a sample; the Figma design is the final requirement.
- **Data:** Use **mockData.js** for all development. You may add items to this file for testing.
- **Images:** Image widths and specific poster dimensions will be provided shortly. 
- **Typography:** The **IMPACT** logo must use the official logo font. Other text should use appropriate, clean fonts as per the design.
- **Colors:** Strictly follow the Figma design. Use a color picker to ensure exact hex code matches.
- **Support:** If there are any doubts, contact the Lead Developer immediately.

---
