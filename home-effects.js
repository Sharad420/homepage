// //const values = function handleOnMouseMove(e) {
// const handleOnMouseMove = (e) => {
//     // const target = e.currentTarget;
//     const {currentTarget: target} = e;

//     const rect = target.getBoundingClientRect(),
//           x = e.clientX - rect.left,
//           y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
// }


// for(const card of document.querySelectorAll('.card')) {
//     card.addEventListener('mousemove', handleOnMouseMove);
// }

// To implicitly return value, we use arrow functions instead of assigning it.
// We also use const {currentTarget: target} = e, instead of the method call above.
// Basically find the mouse position with regard to the card, and the change the gradient circle


document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}
