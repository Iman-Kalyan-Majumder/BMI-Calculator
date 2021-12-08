            function calculate()
            {
                let height=Number(document.getElementById("height").value)/100;
                let weight=Number(document.getElementById("weight").value);
                let BMI=(weight/(height*height)).toFixed(2);
                document.getElementsByClassName("res")[0].style.display='block';   
                if(BMI<18.5)
                {
                    let msg="Your BMI is "+BMI.toString()+"! You are underweight...";
                    document.getElementById("result").innerHTML=msg;
                }
                else if(BMI<24.5)
                {
                    let msg="Your BMI is "+BMI.toString()+"! You are healthy!";
                    document.getElementById("result").innerHTML=msg;
                }
                else
                {
                    let msg="Your BMI is "+BMI.toString()+"! You are overweight...";
                    document.getElementById("result").innerHTML=msg;    
                }    
            }