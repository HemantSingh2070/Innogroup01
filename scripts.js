// ! This code is for bgChnager
let goptions = document.querySelectorAll('option');
let soptions = document.querySelector('select');

let bg = () => {
    if(soptions.value == "") {document.querySelector('body').style.backgroundColor = `${c[0].value}`; document.querySelector('body').style.backgroundImage = ""} 
    else {
    let count = 0;
    c.forEach((item)=>{if(item.value != "#ffffff")count++;})
    
    if(count==2)   document.querySelector('body').style.backgroundImage = `linear-gradient(${soptions.value},${c[0].value},${c[1].value})`;
    if(count==3)   document.querySelector('body').style.backgroundImage = `linear-gradient(${soptions.value},${c[0].value},${c[1].value},${c[2].value})`;
    if(count==4)   document.querySelector('body').style.backgroundImage = `linear-gradient(${soptions.value},${c[0].value},${c[1].value},${c[2].value},${c[3].value})`;     
    if(count==5)   document.querySelector('body').style.backgroundImage = `linear-gradient(${soptions.value},${c[0].value},${c[1].value},${c[2].value},${c[3].value},${c[4].value})`;

}}
soptions.addEventListener('change', bg);
document.querySelector('body');
let c = document.querySelectorAll('input[type="color"]');
c.forEach((item) => {
    item.addEventListener('change', bg);
})
// ! This code is for ball bouncing
let bottom = 0;
let check = false;
let baller = document.getElementById("baller");
let ball = document.getElementById("ball");

let intervalid;
baller.addEventListener('click', () => {
    check =!check;
    console.log(check);
    if (check){
        intervalid = setInterval(() => {
            bottom = (bottom === 0) ? 70 : 0;
            ball.style.bottom = `${bottom}%`;
        }
    , 1000);
    }
    else clearInterval(intervalid)
});

