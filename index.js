// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
    return cats
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
    
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats
}

function prependCat(name){
    const moreCats = [name, ...cats]
    return moreCats
}

function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats
}

function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats
}