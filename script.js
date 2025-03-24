// Block new tabs
window.open = function() { alert("New tabs are blocked!"); return null; };

// Prevent popups
document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.target === "_blank") {
        event.preventDefault();
        alert("Popups are blocked!");
    }
});

// Load sites into iframes
function loadSite(iframeId, url) {
    document.getElementById(iframeId).src = url;
}
