# 🚀 Oxie AI Assistant — FE-08 Checkpoint 1

Welcome to **Oxie AI Assistant**, a state-of-the-art AI chat application built with **Next.js 16 (App Router)**, **AI SDK v7**, **Tailwind CSS**, and **OpenRouter API streaming**.

---

## 🌟 Live Preview & Testing URL

- **Live Local URL:** [http://localhost:3000/chat](http://localhost:3000/chat)

---

## ⚡ How to Test Failure States in the Web UI

We have built an interactive **FE-08 Test Failures Toolbar** directly into the Web UI header at `http://localhost:3000/chat`. This allows reviewers, mentors, and developers to test all edge cases with **1 click**:

### 1. ⚡ Normal (200) — Happy Path
- **Action:** Select `Normal (200)`, type a question (e.g. *"What is Quantum Computing?"*), and click Send.
- **Result:** Response streams token-by-token in a dark `#161a22` card with Copy, Like, Dislike, and local timestamp actions.

### 2. ⚡ 429 Rate Limit
- **Action:** Click `429 Rate Limit` in the top test toolbar, then click Send.
- **Result:** Displays a styled error banner: *"You've hit the rate limit. Please wait a moment and try again."* with a working **Retry** button.

### 3. ⚡ Mid-Stream Error
- **Action:** Click `Mid-Stream Error` in the top test toolbar, then click Send.
- **Result:** Streams initial tokens before interrupting cleanly with an inline error banner: *"The response was interrupted mid-stream. Retry to continue."* Partial stream text is safely preserved.

### 4. ⚡ 500 Server Error
- **Action:** Click `500 Server Error` in the top test toolbar, then click Send.
- **Result:** Displays an error banner: *"The server encountered an error. Please try again."* with a working **Retry** button.

### 5. ⚡ Slow Latency
- **Action:** Click `Slow Latency` in the top test toolbar, then click Send.
- **Result:** 3-second artificial delay while demonstrating the animated Lottie thinking skeleton indicator without layout shift (CLS = 0).

---

## 🎨 Theme & Typography Design System

- **Dark Theme Engine:** `next-themes` with `defaultTheme="dark"`.
- **Text Palette Standard:**
  - **Primary Headings & Content:** Pure `text-white` (`#ffffff`).
  - **Subtext & Muted Labels:** `text-white/60` (60% white opacity).
  - **Zero Gray Text:** strictly no `text-slate-400`, `text-slate-500`, or gray variants.

---

## 📦 Tech Stack
- **Framework:** Next.js 16.2.12 (Turbopack)
- **AI Engine:** Vercel AI SDK v7 (`useChat`, `DefaultChatTransport`, `streamText`)
- **LLM Provider:** OpenRouter (`google/gemma-4-26b-a4b-it:free`)
- **Icons:** React Icons (`bi`, `fi`, `md`, `pi`, `tb`, `vsc`, `gr`, `lia`, `ri`, `lu`, `fa`)
