# Memory Card Game

A simple and fun memory-matching game built with React.  
Your goal: **flip cards, remember their positions, and match all pairs.**

---

## How to Play
- The game displays a grid of 16 cards (8 pairs).
- Click any card to flip it.
- Flip another card:
  - If both cards match → they stay revealed.
  - If they don't match → they flip back over.
- Keep going until all pairs are matched.
- Your **Score** and **Moves** update as you play.

---

## Tech Stack
- **React** (with Vite)
- **CSS** for layout & animations
- **useState / useEffect** for game logic

---

## Run the Game Locally
```bash
npm install
npm run dev
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
