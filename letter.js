let heart = document.querySelector(".heart");
let card = document.querySelector(".card");
let box = document.querySelector("#box");
heart.addEventListener("click", function () {
  card.setAttribute("style", "opacity:0");
  let x = document.createElement("audio");
  x.setAttribute("src", "qlx.mp3");
  x.setAttribute("autoplay", "autoplay");

  let i = 0;
  let str =
    "Hi tinkerbell,<Kalo lo udah bisa baca tulisan ini, Tandanya lo sudah menerima seekor stitch betina yang berwarna pink , Terimakasih telah menerima barang tersebut ya^^, Semoga dengan kehadiran stitch ini lo suka, bisa nemenin lo bikin modul dan di jauhkan dari segala macam overthinking. Stay safe, Stay healthy and Stay with me xixixixixi,<Allahumma lakasumtu, i can't stop thinking about you,<Wabika amantu, my ears are on you,<Wa'ala rizkika aftortu, in my heart of course only you.<Mie goreng mie kuah, muah-muah<See u next year<-Random Person-";
  let strp = "";

  function print() {
    if (str[i] == "<") {
      document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
      strp += "<br><br>";
    } else {
      strp += str[i];
      box.innerHTML = strp + "|";
    }
    i++;
  }
  setTimeout(() => {
    let printid = setInterval(() => {
      print();
      if (i == str.length) clearInterval(printid);
    }, 190);
  }, 5500);

  function appearBackground() {
    setTimeout(() => {
      box.style.opacity = 1;
    }, 1500);
  }
  appearBackground();
});


