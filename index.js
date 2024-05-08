const weight = document.querySelector('.weight');
const unit = document.querySelector('#select_unit');
const feet = document.querySelector('#select_feet');
const inches = document.querySelector('#select_inches');
const result = document.querySelector('.result');
const BMIstatus = document.querySelector('.BMIstatus');
const s1 = document.querySelector('#s1');

// console.log(weight)
// console.log(unit)
// console.log(feet)
// console.log(inches)

function calculateBMI(){
    let z;
    if(weight.value == ""){
        s1.textContent = "*Must be fill";
    }
    else{
        // s1.textContent = "";
    }    
    if(weight.value==""){
        z=false;
    }
    else{
        z=true
    
    
    

    let convertedWeight = weight.value;
    let status;
    
    if(unit.value ==="LB"){
        convertedWeight = weight.value * 0.453592;

    }
    console.log("weight In LB",convertedWeight);


    const fullHeight = (feet.value * 0.3048) + (inches.value * 0.0254);
    const BMI = convertedWeight/fullHeight**2;


    console.log(BMI);
    const _BMI = BMI.toFixed(2);
    result.textContent = (`your BMI calculation is "${_BMI}".`)
    if(_BMI <= 18.4){
       status = "Underweight"; 
    }
    else if(_BMI >= 18.5 && _BMI <= 24.9){
        status = "Normal"
    }
    else if(_BMI >= 25.0 && _BMI <=39.9){
        status = "Overweight"
    }
    else{
        status = "Obese"

    }
    BMIstatus.textContent = (`And your are "${status}".`)
}
return z
} 