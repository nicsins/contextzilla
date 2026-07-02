chrome.action.onClicked.addListener(async () => {
  await chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT });
  console.log('%c[ContextZilla] Side panel opened 🦖', 'color:#22c55e');
});

// Future: chrome.runtime.onMessage for live suggestions from content script
console.log('%c[ContextZilla] Background service worker ready 🦖', 'color:#22c55e');