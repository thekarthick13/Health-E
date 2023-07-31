function calculateBMI(){
 var heightInput= document.getElementById("height");
 var weightInput=document.getElementById("weight");
 var bmiOutput= document.getElementById("result");

 var height= parseFloat(heightInput.value);
 var weight=parseFloat(weightInput.value);

 if(isNaN(height) || isNaN(weight)){
    bmiOutput.innerHTML="Invalid input";
    return;
 }
 var bmi=weight/((height/100)**2);
 var category="";

 if(bmi<18.5) category="Underweight";
 else if(bmi<25)category="Normal";
 else if(bmi<30) category="Overweight";
 else category="Obese";

 bmiOutput.innerHTML="Your BMI is "+bmi.toFixed(2)+" ("+ category + ")";





}