
//El asterisco sirve para identificar un generators
function* gen(x, a){
    yield x + a 
    yield 2
    yield 3
}

const g  = gen(2,3);
console.log(g.next().value)
console.log(g.next().value)