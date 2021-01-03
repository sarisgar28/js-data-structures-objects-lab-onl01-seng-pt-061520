// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, object, key, value){
 const newDriver = {driver, object};

 newDriver[key] = value;

 return newDriver
}
