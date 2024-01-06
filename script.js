window.onscroll = function() { controlNavbar() };

function controlNavbar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    if (scrolled > 50) {
        document.getElementById("navbar").style.opacity = "0";
    } else {
        document.getElementById("navbar").style.opacity = "1";
    }
}
