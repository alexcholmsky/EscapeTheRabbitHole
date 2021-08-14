let doneHighlightButton = document.getElementById("changeColor");

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
    alert(text);
    return text;
  }
}

function hidingInstructions() {
  var inst = document.getElementById("instructions");
  if (inst.style.display === "block") {
    inst.style.display = "none";
  }
}

let button = document.getElementById('testing')

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
  let test = getSelectionText();
  let test2 = "The ring ouzel (Turdus torquatus) is a medium-sized thrush, breeding mainly in Europe. Males are mostly black with a white crescent across the breast, females are browner and duller than males, and young birds may lack chest markings."
  console.log(test);
  alert(test);

  // 2) get keywords for the text
  let res = await sendData(test2);
  console.log(res.keywords[0]);
  alert(res);

  // 3) call function to get articles (googleapi.js)
  const word = res.keywords[0];
  let results = googleapi(word);
  console.log(results);
  alert(results);

  // 4) display articles to UI
  let articles = hndlr(results)
  console.log(articles);
  alert(articles);
}

button.addEventListener('click', () => {
  processSelected();
})