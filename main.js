import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0]
console.log(galeriaELEM)
/* írd bele az összeálíltott html képsorozatot */
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepIMGELEM = document.querySelector(".nagykep img")
/* A .nagykep div megfogása */
const nagykepDIVELEM = document.querySelector(".nagykep")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kisKEPELEMEK = document.querySelectorAll(".kep")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for(let index = 0; index < kisKEPELEMEK.length; index++) {
    kisKEPELEMEK[index].addEventListener("click", function (event) {
        console.log(event.target.src)
        nagykepIMGELEM.src = event.target.src
    }
    )
}




/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */

let aktIndex = 0;



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
/* fogd meg a jobb gombot */
const jobbGOMBELEM = document.querySelector("jobb")

/* tegyél rá egy eseménykezelőt */
jobbGOMBELEM.addEventListener("click")
/* az eseménykezelőben az aktindex változó értékét növeld */

/* aktindex változónak megfelelő kép elérési útját cseréld le a nagyképelem img src-jében */
function jobbra() {
    aktIndex++
    aktIndex = aktIndex % KEPEK.length;
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagykepIMGELEM.src = KEPEK[aktIndex].kep
}