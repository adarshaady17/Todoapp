let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let delbut=document.createElement("button");
    delbut.innerText="delete";
    delbut.classList.add("delete");
    item.appendChild(delbut);
});
// let detbtns=document.querySelectorAll(".delete");
// for(delbut of detbtns){
//     delbut.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});