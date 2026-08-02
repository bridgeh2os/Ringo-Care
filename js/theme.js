const button =
document.querySelector("#theme-toggle");


const saved =
localStorage.getItem("theme");


if(saved){

document.documentElement.dataset.theme =
saved;

}


button?.addEventListener(
"click",
()=>{

const current =
document.documentElement.dataset.theme;


const next =
current === "dark"
? "light"
: "dark";


document.documentElement.dataset.theme =
next;


localStorage.setItem(
"theme",
next
);

});
