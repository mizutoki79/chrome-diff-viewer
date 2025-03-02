chrome.action.onClicked.addListener(() => {
    const createProps: chrome.tabs.CreateProperties = {
        url: chrome.runtime.getURL('index.html'),
    };
    chrome.tabs.create(createProps, tab => {
        tab.active = true;
    });
});
