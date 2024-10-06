document.addEventListener('DOMContentLoaded', () => {
    const carnaNebula = document.getElementById("carnaNebula");
    const TimeLine = document.getElementById("TimeLine");
    const popups = document.querySelectorAll('.popups');
});
let calledBefore=0, x=0;


function listenClicked1(){
    let mySound = new Audio('GetLoad.mp3');
    mySound.play()
}
function listenClicked2(){
    let mySound = new Audio("Sources/Audio/ExplodingStar.wav")
    mySound.play()
}
function listenClicked3(){
    let mySound = new Audio('Sources/Audio/BrownDwarf.wav')
    mySound.play()
}
function listenClicked4(){
    let mySound = new Audio("Sources/Audio/Heart of the Milkiay.wav")
    mySound.play()
}

function carnaNebulaClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("carnaNebula").style.pointerEvents="auto";
        document.getElementById("carnaNebula").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function explodedStarClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("explodedStar").style.pointerEvents="auto";
        document.getElementById("explodedStar").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function FreeFloatingBrownDwarfClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Free-FloatingBrownDwarf").style.pointerEvents="auto";
        document.getElementById("Free-FloatingBrownDwarf").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function GalacticCollisionsClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("GalacticCollisions").style.pointerEvents="auto";
        document.getElementById("GalacticCollisions").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}




function HeartofMilkyWayClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("HeartofMilkyWay").style.pointerEvents="auto";
        document.getElementById("HeartofMilkyWay").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function HH797Clicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("HH797").style.pointerEvents="auto";
        document.getElementById("HH797").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function PerseusClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Perseus").style.pointerEvents="auto";
        document.getElementById("Perseus").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function RingedPlanetUranusClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("RingedPlanetUranus").style.pointerEvents="auto";
        document.getElementById("RingedPlanetUranus").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function SuperenovaEncoreClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("SuperenovaEncore").style.pointerEvents="auto";
        document.getElementById("SuperenovaEncore").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}
function Westerlund1Clicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Westerlund1").style.pointerEvents="auto";
        document.getElementById("Westerlund1").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}




function close1(){
    console.log("The function started")
    calledBefore=0;
    document.getElementById("TimeLine").style.pointerEvents="auto";


    document.getElementById("carnaNebula").style.opacity=0;
    document.getElementById("carnaNebula").style.pointerEvents="none";


    document.getElementById("explodedStar").style.opacity=0;
    document.getElementById("explodedStar").style.pointerEvents="none";


    document.getElementById("HeartofMilkyWay").style.opacity=0;
    document.getElementById("HeartofMilkyWay").style.pointerEvents="none";


    document.getElementById("Free-FloatingBrownDwarf").style.opacity=0;
    document.getElementById("Free-FloatingBrownDwarf").style.pointerEvents="none";


    document.getElementById("GalacticCollisions").style.pointerEvents="none";
    document.getElementById("GalacticCollisions").style.opacity=0;


    document.getElementById("Perseus").style.pointerEvents="none";
    document.getElementById("Perseus").style.opacity=0;


    document.getElementById("RingedPlanetUranus").style.pointerEvents="none";
    document.getElementById("RingedPlanetUranus").style.opacity=0;


    document.getElementById("SuperenovaEncore").style.pointerEvents="none";
    document.getElementById("SuperenovaEncore").style.opacity=0;


    document.getElementById("HH797").style.pointerEvents="none";
    document.getElementById("HH797").style.opacity=0;


    document.getElementById("Westerlund1").style.pointerEvents="none";
    document.getElementById("Westerlund1").style.opacity=0;


    console.log("The function ende"+calledBefore)
}


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


document.addEventListener('DOMContentLoaded', () => {
    const carnaNebula = document.getElementById("carnaNebula");
    const TimeLine = document.getElementById("TimeLine");
    const popups = document.querySelectorAll('.popups');
});



function carnaNebulaClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("carnaNebula").style.pointerEvents="auto";
        document.getElementById("carnaNebula").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function explodedStarClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("explodedStar").style.pointerEvents="auto";
        document.getElementById("explodedStar").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function FreeFloatingBrownDwarfClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Free-FloatingBrownDwarf").style.pointerEvents="auto";
        document.getElementById("Free-FloatingBrownDwarf").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function GalacticCollisionsClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("GalacticCollisions").style.pointerEvents="auto";
        document.getElementById("GalacticCollisions").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}




function HeartofMilkyWayClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("HeartofMilkyWay").style.pointerEvents="auto";
        document.getElementById("HeartofMilkyWay").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function HH797Clicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("HH797").style.pointerEvents="auto";
        document.getElementById("HH797").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function PerseusClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Perseus").style.pointerEvents="auto";
        document.getElementById("Perseus").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function RingedPlanetUranusClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("RingedPlanetUranus").style.pointerEvents="auto";
        document.getElementById("RingedPlanetUranus").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}


function SuperenovaEncoreClicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("SuperenovaEncore").style.pointerEvents="auto";
        document.getElementById("SuperenovaEncore").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}
function Westerlund1Clicked()
{
    calledBefore++;
    if (calledBefore==1){
        document.getElementById("Westerlund1").style.pointerEvents="auto";
        document.getElementById("Westerlund1").style.opacity=1;
    }
    else{
        console.log("Its already open")
    }
}




function close1(){
    console.log("The function started")
    calledBefore=0;
    document.getElementById("TimeLine").style.pointerEvents="auto";


    document.getElementById("carnaNebula").style.opacity=0;
    document.getElementById("carnaNebula").style.pointerEvents="none";


    document.getElementById("explodedStar").style.opacity=0;
    document.getElementById("explodedStar").style.pointerEvents="none";


    document.getElementById("HeartofMilkyWay").style.opacity=0;
    document.getElementById("HeartofMilkyWay").style.pointerEvents="none";


    document.getElementById("Free-FloatingBrownDwarf").style.opacity=0;
    document.getElementById("Free-FloatingBrownDwarf").style.pointerEvents="none";


    document.getElementById("GalacticCollisions").style.pointerEvents="none";
    document.getElementById("GalacticCollisions").style.opacity=0;


    document.getElementById("Perseus").style.pointerEvents="none";
    document.getElementById("Perseus").style.opacity=0;


    document.getElementById("RingedPlanetUranus").style.pointerEvents="none";
    document.getElementById("RingedPlanetUranus").style.opacity=0;


    document.getElementById("SuperenovaEncore").style.pointerEvents="none";
    document.getElementById("SuperenovaEncore").style.opacity=0;


    document.getElementById("HH797").style.pointerEvents="none";
    document.getElementById("HH797").style.opacity=0;


    document.getElementById("Westerlund1").style.pointerEvents="none";
    document.getElementById("Westerlund1").style.opacity=0;


    console.log("The function ende"+calledBefore)
}
