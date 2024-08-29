let scroll = document.getElementById("scroll")
scroll.style.visibility = "visible";
scroll.style.visibility = "visible";
window.addEventListener("scroll", event => {
    let percent = window.scrollY/(document.body.clientHeight - window.innerHeight);
    scroll.style.left = percent * 100 + "%"
})