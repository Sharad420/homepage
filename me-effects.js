let title = document.querySelector('.parallax');
let leaf1 = document.querySelector('.leaf1');
let leaf2 = document.querySelector('.leaf2');
let bush2 = document.querySelector('.bush2');
let mount1 = document.querySelector('.mount1');
let mount2 = document.querySelector('.mount2');

document.addEventListener('scroll', function(event) {
    let value = window.scrollY;
    // console.log(value);
    title.style.marginTop = value + 'px';

    leaf1.style.marginLeft = -value * 0.8 + 'px';
    leaf2.style.marginLeft = value * 0.8 + 'px';

    bush2.style.marginBottom = -value + 'px';

    mount1.style.marginBottom = -value * 0.9 + 'px';
    mount2.style.marginBottom = -value * 0.7 + 'px';
});
