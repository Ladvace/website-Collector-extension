/*global chrome*/
// chrome.tabs.captureVisibleTab(null, {}, function (dataUri) {
//   console.log(dataUri);
// });

console.log("Ciao");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
  console.log("but");
}
