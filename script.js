"use strict"

let maindiv=document.createElement("div")
maindiv.setAttribute("class","container")
document.body.append(maindiv)


let img=document.createElement("img")
img.setAttribute("src"," ")
img.className="img-files"
img.src='sunflower.jpeg'


let subDiv=document.createElement("div")
subDiv.setAttribute("class","innerContainer")

let subDiv2=document.createElement("div")
subDiv2.setAttribute("class","innerContainer2")

let button1=document.createElement("button");
button1.setAttribute("id","btn1");
button1.innerText="previous"


let button2=document.createElement("button");
button2.setAttribute("id","btn2");
button2.innerText="Next"


maindiv.append(subDiv)
subDiv.append(img)
subDiv.append(subDiv2)
subDiv2.append(button1,button2)


let images=['sunflower.jpg','lavendar.jpg', 'lily.jpg','lotus.jpg',
            'marigold.jpg', 'rose.jpg','kosendram.jpg','allium.jpeg',
            'aster.jpg', 'blue-rose.jpg', 'crocus.jpg', 'daylily.jpg',
            'deria.jpg', 'gardenia.jpeg', 'hibiscus.jpg', 'iceplant.jpg']


let b=1;
button2.addEventListener("click",nextBtn) 
function nextBtn()
{
    if(b==15)
    {
        b=1
        // alert("this is the last image")
    }
    else
    {
        subDiv.style.backgroundImage=images[b]
        b = b > images.length ? 1 : b + 1;
        img.src=images[b]
    }
 
}


button1.addEventListener("click",previousBtn)
function previousBtn()
{
    if(b==1)
    {
        b=15
        // alert("you are see in the first image")
    }
    else
    {
        subDiv.style.backgroundImage=images[b]
        b = b > images.length  ? 1 : b - 1;
        img.src=images[b]
    }
 
}