let hrs=document.querySelector('.hrs');
let min=document.querySelector('.min');
let sec=document.querySelector('.sec');
let ticking=function()
{
    let currentdate=new Date();
    let hour=currentdate.getHours();
    let mins=currentdate.getMinutes();
    let secs=currentdate.getSeconds();

    hrs.textContent=hour;
    min.textContent=mins;
    sec.textContent=secs;
}
setInterval(ticking,1000);