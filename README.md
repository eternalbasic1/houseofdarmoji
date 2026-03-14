# House of Darmoji — Portfolio Website

Official portfolio website for **[houseofdarmoji.com](https://houseofdarmoji.com)** — a technology-first venture studio founded by two engineers from Hyderabad, building and validating 25 business models through rapid execution, real market testing, and disciplined learning.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React (brand icons as inline SVGs) |
| Routing | React Router DOM v7 |
| Contact Form | Web3Forms (free, no backend) |
| Email | Zoho Mail — support@houseofdarmoji.com |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed top nav with scroll-aware background
│   └── Footer.tsx          # Footer with links, socials, logo
├── sections/
│   ├── Hero.tsx            # Landing hero with logo, badge, stats, CTAs
│   ├── WhatWeDo.tsx        # Venture studio model + 4-step validation framework
│   ├── Story.tsx           # Founders' origin story + three core pillars
│   ├── Team.tsx            # Founder cards (Vineeth + Aadarsh) + future member placeholder
│   ├── Challenge.tsx       # The 25 Business Models challenge + progress tracker
│   ├── Philosophy.tsx      # Four guiding principles + founder quote
│   └── Contact.tsx         # Contact form wired to Web3Forms → Zoho Mail
├── App.tsx                 # Root layout — section order
├── index.css               # Global styles, Tailwind base, glass utilities
└── main.tsx                # React entry point
public/
├── logo.png                # Primary logo (D with tree) — used in Navbar + Hero
└── logo-full.png           # Full logo variant
```

---

## Page Sections (in order)

1. **Hero** — Venture studio positioning, logo mark, stats (25 models · 2 founders · ∞ opportunities)
2. **What We Do** — 4-step validation framework: Problem Discovery → Rapid Build → Market Validation → Decision Point
3. **Our Story** — Background, the 25-model challenge, execution-first approach
4. **The Team** — Vineeth Reddy (Full Stack Engineer) + Aadarsh Reddy (AI/ML Engineer) + future member placeholder
5. **The 25 Challenge** — Business model categories, structured framework framing, venture progress tracker
6. **Philosophy** — Rapid Experimentation · Technology as Leverage · Impact & Sustainable Growth · Global Thinking Local Roots
7. **Contact** — Form connected to Web3Forms, delivers to support@houseofdarmoji.com

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env` file in the project root (already gitignored):

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

**To get a Web3Forms key (free, takes 2 minutes):**
1. Go to [web3forms.com](https://web3forms.com)
2. Enter `support@houseofdarmoji.com`
3. Click **Create Access Key**
4. Check Zoho Mail inbox and copy the key into `.env`

The contact form POSTs directly to Web3Forms from the browser — no backend required. Free tier: 250 submissions/month.

---

## The Founders

| | Vineeth Reddy Kancharakuntla | Aadarsh Reddy Depa |
|---|---|---|
| **Role** | Co-Founder · Full Stack Engineer | Co-Founder · AI/ML Engineer |
| **Background** | 3+ years industry experience, production systems | Final year CSE (AI & ML), applied AI focus |
| **GitHub** | [eternalbasic1](https://github.com/eternalbasic1) | [aadarshreddydepa](https://github.com/aadarshreddydepa) |
| **LinkedIn** | [kancharakuntlavineethreddy](https://www.linkedin.com/in/kancharakuntlavineethreddy/) | [aadarsh-reddy-depa](https://www.linkedin.com/in/aadarsh-reddy-depa-19b88722b/) |
| **X** | [@KancharakuntlaV](https://x.com/KancharakuntlaV) | — |

---

## Design System

- **Background:** `#080B14` (near-black deep navy)
- **Primary accent:** Violet / Indigo gradient
- **Secondary accents:** Emerald (team), Amber (challenge), Rose (philosophy)
- **Glass effect:** `glass` utility class — `bg-white/4 border border-white/8 backdrop-blur-sm`
- **Gradient text:** `gradient-text` utility — violet → indigo → blue
- **Font:** Inter (Google Fonts, weights 300–900)

---

## Adding a New Team Member

In [src/sections/Team.tsx](src/sections/Team.tsx), add a new object to the `team` array following the existing pattern. The placeholder card will automatically shift to the next slot.

```ts
{
  name: 'First Name',
  surname: 'Last Name',
  role: 'Co-Founder · Role',
  avatar: 'FL',
  gradient: 'from-pink-500 via-rose-500 to-red-600',
  ring: 'ring-pink-500/30',
  glow: 'shadow-pink-900/50',
  bio: '...',
  tags: [...],
  tagColor: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  socials: [...],
}
```

---

## Contact

- **Email:** support@houseofdarmoji.com
- **Website:** houseofdarmoji.com
- **Instagram:** houseofdarmoji

---

© 2025 House of Darmoji. Building and validating technology-driven ventures.
