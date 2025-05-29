const accountId = 144553
let accountEmail = "raman@google.com"
var accountPassword = "12345"
accountCity =  "jaipur"
let accountState;
// accountId=2 Constant is fixed value So creating two account id is not allowed bacause its under "Const"
console.log(accountId);

accountEmail = "google@google.com"
accountPassword = "212121"
accountCity = "London"

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

/*

Prefer Not to use Var
because of issue in Block scope and fuctional scope 

*/