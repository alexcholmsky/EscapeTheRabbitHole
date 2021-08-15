function googleapi(word){

    var search = word;
    var count = 0;
    const sources = ['www.bloomberg.com', 'www.nbcnews.com', 'www.cnn.com', 'www.theguardian.com', 'www.nytimes.com', 'www.theamericanconservative.com', 'www.washingtontimes.com', 'www.foxnews.com', 'www.breitbart.com', 'www.nationalreview.com'];
    const link = ['#bloomberg', '#nbc', '#cnn', '#theguardian', '#nytimes', '#theamericanconservative', '#washingtontimes', '#foxnews', '#breitbart', '#nationalreview'];

    while (count < 11) {
        var fullSrc = "https://www.googleapis.com/customsearch/v1?siteSearch=" +sources[count]+ "&siteSearchFilter=i&key=AIzaSyDb54oEYNtY2zKGeyC7cqJGBP7t1VBCrk4&cx=6adbb15b85973bdf7&q=" +search+ "&callback=hndlr&num=1"
        $(link[count]).attr("src", fullSrc);
        count += 1;
    }
}

function hndlr(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        console.log(item.title + "<br>");
        console.log(item.link + "<br><br>");
        if (nyt.test(item.link)) {
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/newyorktimes.png';
            img.style.width = '100px';
            img.style.height = '100px';
            document.getElementById('logos').appendChild(img);
            
            } 
        
        else if (bmb.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/bloomberg.png';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            document.getElementById('logos').appendChild(img);
            
            
        }
        else if (cnn.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/cnn.png';
            img.style.width = '100px';
            img.style.height = '100px';
            document.getElementById('logos').appendChild(img);
        }
        else if (gdn.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/theguardian.png';
            img.style.width = '100px';
            img.style.height = '100px';
            document.getElementById('logos').appendChild(img);
        }
        else if (tac.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/theamericanconservative.png';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            document.getElementById('logos').appendChild(img);
        }
        else if (nbc.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/nbcnews.png';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            var br = document.createElement("br");
            document.getElementById('logos').appendChild(br);
            document.getElementById('logos').appendChild(img);
        }
        else if (wsh.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/washingtonpost.jpg';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            var br = document.createElement("br");
            document.getElementById('logos').appendChild(br);
            document.getElementById('logos').appendChild(img);
        }
        else if (fox.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/foxnews.png';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            var br = document.createElement("br");
            document.getElementById('logos').appendChild(br);
            document.getElementById('logos').appendChild(img);
        }
        else if (brb.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/breitbart.png';
            img.style.width = '100px';
            img.style.height = '100px';
            var br = document.createElement("br");
            document.getElementById('logos').appendChild(br);
            document.getElementById('logos').appendChild(img);

        }
        else if (nar.test(item.link)){
            document.getElementById("content").innerHTML += "<b>" + item.title + "</b>" + "<br>";
            document.getElementById("content").innerHTML += item.snippet + "<br>";
            document.getElementById("content").innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
            var img = document.createElement('img');
            img.src = 'images/nationalreview.jpg';
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';
            var br = document.createElement("br");
            document.getElementById('logos').appendChild(br);
            document.getElementById('logos').appendChild(img);

        }
        else {
        
        } 
    }
}


let nyt = new RegExp('https://www.nytimes.com*');
let nbc = new RegExp('https://www.nbcnews.com*');
let bmb = new RegExp('https://www.bloomberg.com*');
let cnn = new RegExp('https://www.cnn.com*');
let gdn = new RegExp('https://www.theguardian.com*');
let tac = new RegExp('https://www.theamericanconservative.com*');
let wsh = new RegExp('https://www.washingtontimes.com*');
let fox = new RegExp('https://www.foxnews.com*');
let brb = new RegExp('https://www.breitbart.com*');
let nar = new RegExp('https://www.nationalreview.com*');

// function hndlr(response) {
//     let id = ''
//     for (var i = 0; i < response.items.length; i++) {
//         var item = response.items[i];
//         console.log(item.title + "<br>");
//         console.log(item.link + "<br><br>");
//         id = 'results' + i;
//             document.getElementById(id).innerHTML += item.title + "<br>";
//             document.getElementById(id).innerHTML += "<a href=" + item.link + "> " + item.link + " </a>" + "<br><br>";
//     }
// }