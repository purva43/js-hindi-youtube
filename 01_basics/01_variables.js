const accountId=1234
let accountEmail="hitesh@google.com"
var accountPassword="3456"
accountCity="Pune"
/* it is possible but it is not correct syntax */
let accountState;

accountEmail="purva@gmail.com"
accountPassword="3478"

console.log(accountId);
/*  prefer not to use var
bcz of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])