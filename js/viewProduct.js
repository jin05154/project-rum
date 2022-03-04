/*// a simple check to *try* and ensure valid URIs are used:
function protocolCheck(link) {
    var proto = ['http:', 'https:'];

    for (var i = 0, len = proto.length; i < len; i++) {
        // if the link begins with a valid protocol, return the link
        if (link.indexOf(proto[i]) === 0) {
            return link;
        }
    }
    // otherwise assume it doesn't, prepend a valid protocol, and return that:
    return document.location.protocol + '//' + link;
}

var viewitemButton = document.getElementById("viewitemButton");
viewitemButton.onclick = function() {
    var productURL = document.getElementById("link0")
    var checkproductURL = protocolCheck(productURL);
    var openNewWindow = window.open("about:blank");
    openNewWindow.location.href = checkproductURL;
}*/

var viewDetails = ">>상품 상세보기<<";
var productURL = document.getElementById("link0").innerHTML;
var clickThis = viewDetails.link(productURL);
document.getElementById("viewitemButton").innerHTML = clickThis;