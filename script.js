const no = document.getElementById("no");

function moveButton(){

    let x = Math.random() * (window.innerWidth - 150);

    let y = Math.random() * (window.innerHeight - 80);

    no.style.left = x + "px";

    no.style.top = y + "px";

}

no.addEventListener("mouseover",moveButton);

document.getElementById("yes").onclick = ()=>{

    document.getElementById("home").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");

    typeWriter();

}

const message = `💖 Happy Girlfriend Day 💖

Hai BAWELLL❤️

Selamat Hari Girlfriend BAWELL!


Mungkin kita belum memiliki hubungan yang spesial,
tapi aku tetap ingin mengucapkan selamat Hari Girlfriend.

Semoga kamu selalu bahagia, selalu sehat,
dan semoga senyummu tidak pernah hilang.

Terima kasih sudah hadir dan membuat hariku
menjadi sedikit lebih berwarna.

Semoga hari ini menjadi hari yang indah untukmu. 💖

Happy Girlfriend Day! 🌸

I'm really happy that we met.
I hope today brings you lots of smiles.
Take care, and keep being the amazing person you are. ❤️❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

setInterval(()=>{

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (Math.random()*3+2) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

},250);