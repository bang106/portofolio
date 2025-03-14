
function showSidebar(){
    const logo = document.getElementById("logo-portofolio")
    const close = document.getElementById("close")
    const doc = document.getElementById("menu")
    const menu = document.getElementById("click")
    logo.classList.remove("logo");  // Remove mystyle class
    logo.classList.add("remove-logo");
    doc.classList.remove("nav");  // Remove mystyle class
    doc.classList.add("nav-1");
    doc.style.animation="muncul 1s ease"
    menu.style.display="none";
    close.style.display="inline";
}
function closeSidebar(){
    const logo = document.getElementById("logo-portofolio")
    const close = document.getElementById("close")
    const doc = document.getElementById("menu")
    const menu = document.getElementById("click")
    logo.classList.remove("remove-logo");  // Remove mystyle class
    logo.classList.add("logo");
    doc.classList.remove("nav-1");  // Remove mystyle class
    doc.classList.add("nav");
    menu.style.display="inline";
    close.style.display="none";
}
function sendWA(){
    let number = "+6285774218694";

    let name = document.getElementById("nama").value;
    let subject = document.getElementById("subject").value;
    let pesan = document.getElementById("pesan").value;

    var url = "https://wa.me/"+number+"?text="
    +"Nama saya "+name+"%0a"
    +"saya disini ingin "+subject+"%0a"
    +pesan+"%0a%0a";
    window.open(url,"_blank_").focus();
}