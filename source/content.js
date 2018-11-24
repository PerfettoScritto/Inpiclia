$(document).ready(function() {


    var imageBlocks = document.getElementsByClassName("v1Nh3 kIKUG  _bz0w");


    // Set links for images.
    // This block is needed for the first downloading of web page.


    for (i = 0; i < imageBlocks.length; i++) {


        var imageBlockUrl = imageBlocks[i].firstChild.getAttribute("href");


        imageBlockUrl = "https://www.instagram.com" + imageBlockUrl;

        // var position = imageBlockUrl.indexOf("/?");

        // var bigImageUrl = imageBlockUrl.substring(0, position + 1) + "media?size=l";

        bigImageUrl= imageBlockUrl + "media?size=l";

        createImgLink(imageBlocks[i], bigImageUrl);

        //additional functionality for later update

        // createOpenBlockLink (imageBlocks[i], imageBlockUrl);

    }


    setInterval(updateLinks, 1000);


    //Update links for images downloading

    function updateLinks() {


        var imageBlocks = [];

        var links = [];


        imageBlocks = document.getElementsByClassName("v1Nh3 kIKUG  _bz0w");

        for (i = 0; i < imageBlocks.length; i++) {

            var imageBlockUrl = imageBlocks[i].firstChild.getAttribute("href");

            imageBlockUrl = "https://www.instagram.com" + imageBlockUrl;

            // var position = imageBlockUrl.indexOf("/?");

            // var bigImageUrl = imageBlockUrl.substring(0, position + 1) + "media?size=l";

            bigImageUrl= imageBlockUrl + "media?size=l";

            var links = imageBlocks[i].getElementsByTagName("a");

            for (y = 0; y < links.length; y++) {

                var link = links[y];

                var classLink = link.className;

                if (classLink === "linkview" || classLink === "linkblock") {

                    // console.log(imageBlocks[i]);

                    imageBlocks[i].removeChild(link);

                }

                //console.log(classLink);

            }

            createImgLink(imageBlocks[i], bigImageUrl);

            // additional functionality for later update
            // createOpenBlockLink (imageBlocks[i], imageBlockUrl );

        }


    }








    //Function adds download link for image

    function createImgLink(needBlock, imageLink) {

        var nodeA = document.createElement("a");

        var textNodeA = document.createTextNode("download");

        nodeA.setAttribute('href', imageLink);

        nodeA.setAttribute('class', "linkview");

        nodeA.setAttribute('target', "_blank");

        nodeA.appendChild(textNodeA);

        needBlock.appendChild(nodeA);

    }


    // additional functionality for later update
    // Open image block in new tab


    function createOpenBlockLink(needBlock, blockLink) {

        var nodeA = document.createElement("a");

        var textNodeA = document.createTextNode("open in tab");

        nodeA.setAttribute('href', blockLink);

        nodeA.setAttribute('class', "linkblock");

        nodeA.appendChild(textNodeA);

        needBlock.appendChild(nodeA);

    }


    // console.log(bigImageUrl);

    // console.log(imageBlockUrl);
    //+ "media?size=l"

});