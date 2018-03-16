$(document).ready(function() {

var imageBlocks = document.getElementsByClassName("_mck9w _gvoze _tn0ps");

var imageBlockUrl = imageBlocks[1].firstChild.getAttribute("href");

imageBlockUrl = "https://www.instagram.com" + imageBlockUrl;

var position = imageBlockUrl.indexOf("/?");

var bigImageUrl = imageBlockUrl.substring(0, position +1) + "media?size=l";

console.log(bigImageUrl);

// document.location.replace(url);

console.log(imageBlockUrl);
//+ "media?size=l"
console.log('hello');
});


