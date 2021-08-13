function hndlr(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += item.title + "<br>"
        document.getElementById("content").innerHTML += item.link + "<br><br>";
    }
}

var test = "trump news"
var fullSrc = "https://www.googleapis.com/customsearch/v1?siteSearch=www.cnn.com&siteSearchFilter=i&key=AIzaSyDb54oEYNtY2zKGeyC7cqJGBP7t1VBCrk4&cx=6adbb15b85973bdf7&q="+test+"&callback=hndlr&num=1"
$('#javaone').attr("src",fullSrc);

var test2 = "trump news"
var fullSrc = "https://www.googleapis.com/customsearch/v1?siteSearch=www.foxnews.com&siteSearchFilter=i&key=AIzaSyA-V7Mm3NUtf5zOutpiSaYZk7sZPHm6VSQ&cx=6adbb15b85973bdf7&q="+test2+"&callback=hndlr&num=1"
$('#javatwo').attr("src",fullSrc);

var test2 = "trump news"
var fullSrc = "https://www.googleapis.com/customsearch/v1?siteSearch=www.nbc.com&siteSearchFilter=i&key=AIzaSyA-V7Mm3NUtf5zOutpiSaYZk7sZPHm6VSQ&cx=6adbb15b85973bdf7&q="+test2+"&callback=hndlr&num=1"
$('#javathree').attr("src",fullSrc);