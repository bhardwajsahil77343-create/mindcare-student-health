# MindCare Student Health

## Current State
- React + Motoko app for college student mental health
- Pages: Home, Counselors, Dashboard, Chat (counselor chat), Admin, Login, Register
- Navbar has links: Home, Counselors, Dashboard, Chat, Admin
- Red (#C04444) and white color scheme
- Chat page: 1-on-1 counselor chat with AI auto-replies

## Requested Changes (Diff)

### Add
- New page: `AIChatbotPage` — dedicated AI chatbot with ChatGPT-style interface
  - Left sidebar: conversation history (multiple sessions), "New Chat" button
  - Right panel: chat messages with user/bot bubbles, typing indicator, input bar
  - Bot persona: "MindCare AI" — a mental health support assistant
  - Rule-based AI engine (no external API) covering: anxiety, stress, depression, sleep, relationships, academic pressure, crisis support, loneliness, motivation, self-care, general wellness
  - Multiple conversation sessions stored in localStorage
  - Responses should be varied, empathetic, and feel natural
  - Suggested starter prompts shown when chat is empty
- New route "ai-chat" added to App.tsx Page type
- Navbar: add "AI Chat" link accessible to all users (no login required)

### Modify
- `App.tsx`: add `"ai-chat"` to Page type, import and render AIChatbotPage
- `Navbar.tsx`: add "AI Chat" nav link

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/pages/AIChatbotPage.tsx` with full ChatGPT-style layout and rule-based AI engine
2. Update `App.tsx` to include `ai-chat` page
3. Update `Navbar.tsx` to show "AI Chat" link
