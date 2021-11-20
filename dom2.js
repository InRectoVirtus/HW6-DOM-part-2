let figur = document.getElementById("figur");
let selectType = document.getElementById("selector");
let btn = document.getElementById("btn");


/* _____________________________________________________________ */
btn.onclick = () => {
    let takeColor = document.getElementById("figurColor").value;
    figur.style.backgroundColor = takeColor;
}


selectType.addEventListener("change", (m) => {
    figur.setAttribute("class", "figur " + m.target.value);
});