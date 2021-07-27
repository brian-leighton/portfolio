document.querySelector("h3").addEventListener('click', () => {
test();
});

//find the current section of the DOM
function isVisible(ele){
    let rect = ele.getBoundingClientRect();
    var isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);
    return isVisible;
}

function updateNav(){
    const about = document.querySelector("#about-anchor"),
          aLink = document.querySelector("#about-link"),
          projects = document.querySelector("#projects-anchor"),
          pLink = document.querySelector("#projects-link"),
          contact = document.querySelector("#contact-anchor"),
          cLink = document.querySelector("#contact-link");

    if(isVisible(about)){
        removeClass("activeSection");
        aLink.classList.add("activeSection");
    } else if(isVisible(projects)){
        removeClass("activeSection");
        pLink.classList.add("activeSection");
    } else if(isVisible(contact)){
        removeClass("activeSection");
        cLink.classList.add("activeSection");
    } else {
        return;
    }
}

function removeClass(c){
    if( typeof c !== "string" || c.length <= 0) return;
    let cStr = c.replace(".", "");
    let eles = document.querySelectorAll(`.${cStr}`);
    eles.forEach((el) => {
        el.classList.remove(`${cStr}`);
    });
    return;
}

window.addEventListener('scroll', updateNav);
