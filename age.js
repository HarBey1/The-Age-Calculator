const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function ageCalculate(){
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthMonth,birthDate,birthYear;
  
// birthdetails object
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth()+1,
    year: inputDate.getFullYear()
  }

  let currentYear = today.getFullYear();
  let currenMonth = today.getMonth()+1;
  let currentDate = today.getDate();

  leapChecker(currentYear);
  
  if(birthDetails.year > currentYear || (birthDetails.month > currenMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currenMonth && birthDetails.year == currentYear)){
    alert("Not born yet");
    displayResult("-","-","-");
    return;
  }
  birthYear = currentYear - birthDetails.year;
   //Conditions
  if(currenMonth >= birthDetails.month){
    birthMonth = currenMonth - birthDetails.month;
  }
  else{
    birthYear--;
    birthMonth = 12+ currenMonth - birthDetails.month;
  }

  if(currentDate >= birthDetails.date){
    birthDate  =currentDate - birthDetails.date;
  }
  else{
    birthMonth--;
    let days = months[currenMonth - 2];
    birthDate =  days + currentDate - birthDetails.date;
    if(birthMonth < 0){
      birthMonth = 11;
      birthYear--;
    }
  }
  //console.log(birthYear, birthMonth, birthDate);
  displayResult (birthDate,birthMonth,birthYear);
}
function displayResult(bDate,bMonth,bYear){
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent =  bMonth;
  document.getElementById("days").textContent = bDate;

}
 // Set leap year
function leapChecker(year){
  if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0))
  {
    months[1] = 29;
  }
  else{
    months[1] = 28;
  }
  console.log(year, months[1])
}
