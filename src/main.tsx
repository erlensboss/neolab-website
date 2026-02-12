// Polyfill for Safari (doesn't support requestIdleCallback)
if (typeof window !== 'undefined' && !window.requestIdleCallback) {
  window.requestIdleCallback = (cb: IdleRequestCallback) => {
    const start = Date.now();
    return window.setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      });
    }, 1);
  };
  window.cancelIdleCallback = (id: number) => clearTimeout(id);
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
