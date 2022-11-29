// Code your solution in this file!
const drivers =["Antonia" , "Nuru","Amari","Mo"]
function returnFirstTwoDrivers(){
    let newDriver= drivers.slice(0,2)
    return newDriver
}
returnFirstTwoDrivers();
 function returnLastTwoDrivers(){
    let lastDrivers =["Amari","Mo"]
    return lastDrivers
 }
 returnFirstTwoDrivers
 const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]
 function createFareMultiplier(b){
    return function(fare=1){
        return b*fare
    }
 }
 function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
 }
function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}
function selectDifferentDrivers(arrayOfDrivers, functn){
    return functn(arrayOfDrivers)
}