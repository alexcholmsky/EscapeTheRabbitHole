let doneHighlightButton = document.getElementById("changeColor");

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
    alert(text);
    return text;
  }

  doneHighlightButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getSelectionText,
    });
  })
}

const sendData = async (text) => {
  try {
    let res = await fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text
      }),
    });

    res = await res.json();

    console.log(`Received response from server: ${JSON.stringify(res, null, 2)}`);
    return {
      hasError: false,
      rawText: res.text,
      keywords: res.keywords
    }
  } catch (err) {
    console.error(`Error sending data to server: ${JSON.stringify(err, null, 2)}`);
    return {
      hasError: true,
      err
    }
  }
}

const processSelected = async () => {
  // 1) get selected text
  let text = getSelectionText();
  
  // 2) get keywords for the text
  let res = await sendData(text);

  // 3) call function to get articles (googleapi.js)
  let articles = "someFunction(res)";

  // 4) display articles to UI
  // displayArticles(articles);
}


// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// function alertTest() {
//   postsdata = document.getElementsByClassName('kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q');
//   for (let i = 0; i < postsdata.length; i++) {
//     const button = document.createElement("button");
//     postsdata[i].appendChild(button);
//   }
// }

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

