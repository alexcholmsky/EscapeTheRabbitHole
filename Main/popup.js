// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

function alertTest() {
  postsdata = document.getElementsByClassName('kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q');
  for (let i=0; i < postsdata.length; i++) {
    const button = document.createElement("button");
    postsdata[i].appendChild(button);
  }
}
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
      text = window.getSelection().toString();
      alert(text);
  } 

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getSelectionText,
  });
})}
