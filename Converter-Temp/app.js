

function ucUpdateResult(){
    document.getElementById("ucfromunit").value;
    temUnit();
}

function ucFinalResult(){
    document.getElementById("ucTounit").value;
    temUnit();
}
    
function temUnit(){
   // document.getElementById("tempUnit").value;
  
    let ucUpdate = document.getElementById("ucfromunit").value;
    let ucFinal = document.getElementById("ucTounit").value;
    let unit = parseInt(document.getElementById("tempUnit").value);
  
   
  
    if( ucUpdate=="Celsius [°C] [2:-272.15:-273.15]"  && ucFinal=="Fahrenheit [°F] [2:-457.87:-459.67]"){
        var fahrenheit = parseInt((unit * 9/5) + 32);
        document.getElementById("tempResult").value=fahrenheit + " Fahrenheit [°F]";

     }else if (ucUpdate=="Celsius [°C] [2:-272.15:-273.15]"  && ucFinal=="kelvin [K] [2:1:0]"){
         var kelvin = parseInt((unit+273.15));
         document.getElementById("tempResult").value=kelvin + " Kelvin [K]";

     }else if(ucUpdate=="Celsius [°C] [2:-272.15:-273.15]"  && ucFinal=="Celsius [°C] [2:-272.15:-273.15]"){
        var celsius =parseInt(unit);
        document.getElementById("tempResult").value=celsius + " Celsius [°C]";

     }else if(ucUpdate=="kelvin [K] [2:1:0]" && ucFinal=="Celsius [°C] [2:-272.15:-273.15]"){
        var celsius = parseInt(unit-273.15);
        document.getElementById("tempResult").value=celsius + " Celsius [°C]";

     }else if(ucUpdate=="kelvin [K] [2:1:0]" && ucFinal=="Fahrenheit [°F] [2:-457.87:-459.67]"){
        var fahrenheit = parseInt((unit - 273.15) * 9/5 + 32);
        document.getElementById("tempResult").value=fahrenheit + " Fahrenheit [°F]";

     }else if(ucUpdate=="kelvin [K] [2:1:0]" && ucFinal=="kelvin [K] [2:1:0]"){
        var kelvin = parseInt(unit);
        document.getElementById("tempResult").value=kelvin + " Kelvin [K]";

     }else if(ucUpdate=="Fahrenheit [°F] [2:-457.87:-459.67]" &&  ucFinal=="Celsius [°C] [2:-272.15:-273.15]"){
        var celsius =parseInt((unit - 32) * 5/9 );
        document.getElementById("tempResult").value=celsius + " Celsius [°C]";

     }else if(ucUpdate=="Fahrenheit [°F] [2:-457.87:-459.67]" && ucFinal=="kelvin [K] [2:1:0]"){
        var kelvin = parseInt((unit - 32) * 5/9 + 273.15);
        document.getElementById("tempResult").value=kelvin + " Kelvin [K]";
     }else if(ucUpdate=="Fahrenheit [°F] [2:-457.87:-459.67]" && ucFinal=="Fahrenheit [°F] [2:-457.87:-459.67]"){
        var fahrenheit = parseInt(unit);
        document.getElementById("tempResult").value=fahrenheit + " Fahrenheit [°F]";
     }
     else{
        document.getElementById("tempResult").value="invalid";
     }
  };