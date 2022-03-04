// a simple check to *try* and ensure valid URIs are used:
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

// div 복사하면서 이 함수 안 씀
class Product {
    constructor(name, product_url, price, image_url) {
        // image, date, dealing_method(택배/직거래-장소표기???), platform(중고나라/당근마켓)...
        this.title = name;
        this.link = product_url;
        this.price = price;
        this.image = image_url;
        
    }
    showTitle() {
        var TitleP0 = this.title;
        TitleP0.style.fontFamily = 'sans-serif';
    }
    showURL() {
        var clicklink = ">>상품 상세보기<<";
        var URL = clicklink.link(this.link);
        document.getElementById("link0").innerHTML = URL;
    }
    showPrice() {
        document.getElementById("price0").innerHTML = this.price+"원";
    }
    showImage() {
        const article = document.querySelector(".product-image");
        const product_image = new Image(320, 320);
        //image객체가 생성되어 속성들을 추가할 수 있음
        product_image.src = this.image;
        
        var shortcut = protocolCheck(this.link);
        product_image.onclick = function() {
            var openNewWindow = window.open("about:blank");
            openNewWindow.location.href = shortcut;
        };
        //Javascript image link to the product page
        article.appendChild(product_image);
    }
}
