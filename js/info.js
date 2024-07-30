function sub(e) {
    const numDom = e.nextElementSibling;
    const quan = Number(numDom.getAttribute('number'));
    if (quan <= 1) {
        alert("亲，再少我就不高兴了");
    } else {
        numDom.setAttribute("number", quan - 1);
    }
}

function plus(e) {
    const numDom = e.previousElementSibling;
    const quan = Number(numDom.getAttribute('number'));
    numDom.setAttribute("number", quan + 1);
}