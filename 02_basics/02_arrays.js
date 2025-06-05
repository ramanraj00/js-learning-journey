const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]

const dc_heros = ["Batman" , "Flash" , "Superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); //=> Spread Operator

const another_ar̥ray = [1 , 2 , 3,[4 ,5 ,6] , 7 , [6 , 7,[4 ,5]]]
const real_another_array = another_ar̥ray.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Raman"));
// console.log(Array.from("Raman"));

// console.log(Array.from({name: "Raman"}))  // Intrsting case it will give blank[]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));