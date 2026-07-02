// ContextZilla Content Script v1.0
// Listens for text input on any page for future live suggestions / toasts
// Currently lightweight — main power lives in the side panel applet

document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.tagName === 'TEXTAREA' || el.isContentEditable || (el.tagName === 'INPUT' && el.type === 'text')) {
    // Future enhancement: debounce and send message to sidepanel or show subtle indicator
    // For v1: just log for debugging / extension readiness
    // console.log('[ContextZilla] Text input detected on page', el);
  }
}, true);

console.log('%c[ContextZilla] Content script injected 🦖', 'color:#22c55e');