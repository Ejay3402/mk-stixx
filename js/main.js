//change hero iamge
const src1 = document.getElementById(`src`);

let src1F = false;

setInterval( () => {

    if (src1F) {
        src1.setAttribute('src', 'assets/images/ml-stixx.JPG');
    } else {
        src1.setAttribute('src', 'assets/images/mk2.PNG');
    }
    src1F = !src1F;
}, 5000 )
