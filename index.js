// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
   return cats.push("Ralph");    
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");     
}

function destructivelyRemoveLastCat(){
    return cats.pop("Milo", "Otis");     
}
function destructivelyRemoveFirstCat(){
    return cats.pop();     
}

function destructivelyRemoveFirstCat(){
    return cats.shift();     
}


// 2

function appendCat(name){
    let updatedList = [...cats, name];
    return updatedList;
}

function prependCat(name){
    let updatedList2 = [name, ...cats];
    return updatedList2;
}
function removeLastCat(name){
    let updatedList3 = cats.slice("Milo", cats.length-1);
    return updatedList3;
}

function removeFirstCat(name){
    let updatedList4 = [...cats];
    updatedList4.shift();
    return updatedList4;
}




