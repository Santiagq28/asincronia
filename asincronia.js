/*
function sayHello(n) {
    console.log("saludo",n);
}

function sayHelloDelay(n) {
    setTimeout(function () {
        console.log("Saludo demorado");
    }, 500 );
}

sayHello(1);
sayHelloDelay();
sayHello(2);
*/

function sumar(acumulado, valor, callback) {
    
    let total;
    setTimeout(function() {
        total = acumulado + valor;
        callback(total);
    }, 1000);
    
}

let acumulado = 0;
/*

acumulado = sumar(acumulado, 2);
acumulado = sumar(acumulado, 2);
console.log("El total es", acumulado);


sumar(0, 2, function(acumulado) {
    sumar(acumulado, 5, function(acumulado){
        console.log(acumulado)
    })
})
*/

async function sumarPromise(acumulado,valor){
    return new Promise(function(resolve, reject){
        if(valor == 5){
            return reject("No me gustan los 5")
        }
        
        const total = acumulado + valor;
        resolve(total);
    })
}
async function main(){
    try{
        let total = await sumarPromise(0,2);
        total = await sumarPromise(total,5)
        console.log(total)
    }catch(error){
        console.log(error);
    }
    
}
main();


/*
sumarPromise(acumulado, 2)
.then(function(total){
    return sumarPromise(total, 5)
})
.then(function(total){
    console.log(total);
})
.catch(function(error){
    console.log(error);
})
*/