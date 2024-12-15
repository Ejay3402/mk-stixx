//change hero iamge
const src1 = document.getElementById(`src`);

let src1F = false;

setInterval( () => {

    if (src1F) {
        src1.setAttribute('src', 'assets/images/ml-stixx.png');
    } else {
        src1.setAttribute('src', 'assets/images/mk2.PNG');
    }
    src1F = !src1F;
}, 5000 )

//open and close meun

const open_meun = document.querySelector(`.open-meun`);
const close_meun = document.querySelector(`.close-meun`);
const ul = document.querySelector(`.ul`);


open_meun.addEventListener("click", () => ul.style.right = '0');

close_meun.addEventListener("click", () => ul.style.right = '-400px');

