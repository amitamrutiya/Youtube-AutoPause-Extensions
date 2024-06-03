chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, tab => {
    if (tab.url && tab.url.includes('youtube.com/watch')) {
      chrome.tabs.executeScript(activeInfo.tabId, { file: 'dist/content.js' });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com/watch')) {
    chrome.tabs.executeScript(tabId, { file: 'dist/content.js' });
  }
});
