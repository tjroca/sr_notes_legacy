window.onload = function() {
    var head = document.getElementsByTagName("HEAD")[0];
    var link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "darkmode.css";

    head.appendChild(link);
}