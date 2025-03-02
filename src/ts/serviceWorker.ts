chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const currentIndex = tabs.length > 0 ? tabs[0].index : 0;
        const createProps: chrome.tabs.CreateProperties = {
            url: chrome.runtime.getURL('index.html'),
            index: currentIndex + 1,
        };
        chrome.tabs.create(createProps, tab => {
            tab.active = true;
        });
    });
});
