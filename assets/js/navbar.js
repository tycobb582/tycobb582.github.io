var lastScrollTop = 0;
navbar = document.getElementById("navbar");
drop = document.getElementById("drop");
droplist = document.getElementById("droplist");

drop.addEventListener("mouseover", (event) => {
    droplist.style.pointerEvents = "auto";
})

window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop)
    {
        navbar.style.top = "-80px";
        droplist.style.pointerEvents = "none";
    }
    else
    {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})