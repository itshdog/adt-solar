function openQuote() {
    var obj = document.getElementById("quote-wrapper");
    obj.className = "";
    obj.style.opacity = "1";
};

function closeQuote() {
    var obj = document.getElementById("quote-wrapper");
    obj.className = "hidden";
    obj.style.opacity = "0";
};