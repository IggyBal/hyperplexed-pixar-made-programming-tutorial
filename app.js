const bodyDiv = document.querySelector('body');
const colors = ['rgb(0, 187, 249', 'rgb(0, 245, 212)', 'rgb(252, 254, 255)'];
const fallAnim = ['fall-1', 'fall-2', 'fall-3'];

const selectRandom = (arr) => {
    return arr[Math.floor(Math.random()*3)]
}

bodyDiv.onmousemove = e => {
    let dot = document.createElement('div');
    // dot.className = "dot";
    dot.className = "dot fa-solid fa-star"
    // alert("Move! " + e.clientX + " " + e.clientY);
    dot.style.color = selectRandom(colors);
    dot.style.animation += selectRandom(fallAnim);
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);
    const starInterval = setInterval(() => {
        document.body.removeChild(dot);
        clearInterval(starInterval);
    }, 1500);
}
