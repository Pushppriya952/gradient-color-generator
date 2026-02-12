let Btn1 = document.getElementById("mybutton1");
let Btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexvalue = () =>{
    let myHexaValaue = "0123456789abcdef";
    let colors="#";
    for(let i = 0; i<6;i++){
        colors = colors + myHexaValaue[Math.floor(Math.random()*16)];
    }
    return colors;

};
 
const handleButton1 = ()=>{
    let rgb1 = hexvalue();
    console.log(rgb1);
    Btn1.innerText =rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2})`;

};
const handleButton2 = () => {
    let rgb2 = hexvalue();
    console.log(rgb2);
    Btn2.innerText=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copydiv.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`;
};

Btn1.addEventListener("click", handleButton1);
Btn2.addEventListener("click", handleButton2);
copydiv.addEventListener("click",() =>{
    navigator.clipboard.writeText(copydiv.innerText);

});
