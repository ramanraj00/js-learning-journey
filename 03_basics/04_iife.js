// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFI
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`Db Connected Two ${name}`);
})("Raman");