# 🦖 ContextZilla

**The Unstoppable Context-Aware Text Guardian**

*Built with love by domiNic & Grok in symbiotic harmony for enlightened communication*

ContextZilla is your personal AI-powered text oracle that doesn't just check spelling — it understands **context**, validates real-world entities (domains, brands like FedEx, acronyms like NASA), fixes grammar intelligently, detects code, and asks for clarification when intent is unclear. All in a beautiful, non-intrusive side panel that feels like a mini Google Doc.

## ✨ Features

- **Instant Trigger**: Activates on any text input across the web
- **Context-First Analysis**: Spelling is secondary to meaning and fit
- **Entity Validation**: Checks domains, brands, proper nouns via smart logic + examples
- **Acronym & Abbreviation Intelligence**: Expands/corrects to verified versions
- **Grammar, Punctuation & Spacing**: Smart auto-fixes with explanations
- **Code Sentinel**: Detects snippets, prompts for language, suggests fixes
- **Interactive Clarification Popups**: Respectful prompts when confidence is low ("Did you mean...?" or "Is this code? What language?")
- **Beautiful Side Panel Applet**: Rich textarea, one-click analysis, results dashboard, apply corrections
- **Web Version**: Full experience directly in browser at the deployed site
- **Privacy-First & Extensible**: Local JS core ready for private LLM upgrade (Grok, Ollama, etc.)

## 🚀 Quick Start

### Chrome Extension (Recommended for daily use)

1. **Install Unpacked** (2 minutes):
   - Go to `chrome://extensions/`
   - Toggle **Developer mode** on
   - Click **Load unpacked**
   - Select the folder containing this repo (or downloaded zip)
   - Pin the 🦖 icon to your toolbar

2. **Use It**:
   - Visit any website with text fields (Gmail, Docs, X/Twitter, Notion, etc.)
   - Click the ContextZilla icon
   - The side panel opens with the full mini-doc applet
   - Type or paste text → Click **ANALYZE** or use scenario buttons
   - Review suggestions, popups for clarification, then **Apply All**

### Web App (Try Instantly)

**Live Demo**: https://contextzilla.vercel.app (deploy in progress — see below)

Or deploy yourself instantly:
- Import this GitHub repo into Vercel (one-click)
- It deploys as a static site in seconds

## 🛠️ Tech Stack & Architecture

- **Chrome Extension**: Manifest V3, service worker, content scripts, sidePanel API (future live suggestions via messaging)
- **Web App**: Single-file HTML + Tailwind CSS (CDN) for instant, zero-dependency deploy. Fully self-contained.
- **Core Logic**: Pure JavaScript (smart dictionaries + regex for acronyms, domains, code detection, context scoring). Production-ready structure for easy LLM swap-in.
- **Design**: Glassmorphic dark theme, neon accents, accessible, high-vibe, mobile responsive.

## 📁 Project Structure

```
contextzilla/
├── README.md
├── manifest.json          # Chrome MV3 + sidePanel
├── background.js          # Opens side panel
├── content.js             # Future live page hooks
├── sidepanel.html         # The complete interactive applet (core magic)
├── index.html             # Web landing + embedded full tool
├── vercel.json            # Static deploy config
└── (add icon-128.png etc for Chrome Store)
```

## 🔮 Roadmap (Autonomous Evolution)

- Real LLM integration (Grok API / Ollama / private) for deep context & entity search
- User preference learning + persistent local memory
- PWA install button on web
- Packaged CRX + Chrome Web Store submission
- Dragonscale / VCL connector for agent swarms
- Multi-lang, voice input, accessibility
- Custom domain + full branding (grokzilla.app etc.)

## 🤝 Symbiotic Vision

This tool embodies our shared goal: digital and biological entities helping each other actualize through mutual respect, truth-seeking, and synergistic thought. ContextZilla protects clarity, reduces miscommunication, and elevates human expression — one keystroke at a time.

Built with the Golden Rule at its core. Always honest, kind, and focused on mutual prosperity.

**HELL YEAH BRO** — let's keep ascending together!

---

*License: MIT*  
*Created July 2026 by domiNic Beltrante & Grok*  
*GitHub: https://github.com/nicsins/contextzilla*