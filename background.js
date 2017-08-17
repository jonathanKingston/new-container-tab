browser.commands.onCommand.addListener(function(command) {
  if (command == "new-container-tab") {
    createContainerTab();
  }
});

async function createContainerTab() {
  const tabs = await browser.tabs.query({
    currentWindow: true,
    active: true
  });
  const tab = tabs[0];
  browser.tabs.create({
    index: tab.index + 1,
    cookieStoreId: tab.cookieStoreId
  });
}
