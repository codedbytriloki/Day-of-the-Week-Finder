function FindDay(){
const resultEl = document.getElementById("result");
const dateInput = document.getElementById("dateInput").value;

if(!dateInput){
  resultEl.textContent = "Please enter a date";
  return;
}

const date = new Date(dateInput);
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const dayName = days[date.getDay()];

resultEl.textContent = `That day is a ${dayName} !`;

}