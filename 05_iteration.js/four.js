const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : "swift by apple"

}

for (const key in myObject){
    // console.log(`keys ${key} :- ${myObject[key]}`);
}

const programming = ["Js", "rb", "py", "java", "cpp"]

for (const key in programming){
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('Usa', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map){
//     console.log(key);
//}
 // Iske upar iteration nhi ho raha hai