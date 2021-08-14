function getPastedText() {
  let inputbox = document.getElementById('input').value
  return inputbox
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
  let test = getPastedText(); 

  // 2) get keywords for the text
  let res = await sendData(test);
  console.log(res.keywords[0]);

  // 3) call function to get articles (googleapi.js)
  const word = res.keywords[0];
  let results = googleapi(word);
  console.log(results);

  // 4) display articles to UI
  let articles = hndlr(results)
  console.log(articles);
}
