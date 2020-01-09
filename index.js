
const calculate = () => {
    let h8 = document.getElementById("h8").value;
    h8 = h8*12;
    h8=h8*0.025;

    let w8 = document.getElementById("w8").value;


    var bmi = w8/(h8*h8);
    bmi=Math.round(bmi);
    if(bmi<=25 && bmi>=19 ){

        document.getElementById("bmi").value =`${bmi} : Normal`;
            
        }
        else if(bmi<19)
        {
    
        document.getElementById("bmi").value = `${bmi} : Underweight`;
        }
        else{
           
        document.getElementById("bmi").value = `${bmi} : Overweight`; 
        }
 
}