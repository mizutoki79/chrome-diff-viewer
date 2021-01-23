chrome.browserAction.onClicked.addListener(() => {
    const url = chrome.extension.getURL('index.html');
    const createProps: chrome.tabs.CreateProperties = {
        url,
    };
    chrome.tabs.create(createProps, tab => {
        tab.active = true;
    });
});
