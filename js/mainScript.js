console.log('verbonden io het index');

$('#modalSubscriptionForm').modal('show');

function resutbtn(){
    document.getElementById('inputDataOne').value = "";
    document.getElementById('inputDataTwo').value = "";
    // document.getElementById('resultCalculate2').innerHTML= "";
    document.getElementById('resultCalculate').innerHTML= "";
    document.getElementById('inputDataOneNew').value = "";
  }

// Add Sub Mul Div Knop met Input 1 en Input 2
function calculate(krijgNumer){
var inputOne = document.getElementById('inputDataOne').value; //result as string
var convertToNumberFirst = parseInt(inputOne); // convert to number
console.log(convertToNumberFirst);
var inputTwo = document.getElementById('inputDataTwo').value; // result as string
var convertToNumberSecond = parseInt(inputTwo); // convert to number
console.log(convertToNumberSecond);
var getModole = document.getElementsByClassName('myOperatoBtn');
console.log(getModole);
    console.log(krijgNumer);
    for(var i = 0; i < getModole.length; i++) {
    var valResult = getModole[i].value; // show the list of value
    console.log(valResult);
    var calculate;
        if (krijgNumer == 'add' ) {
            console.log('add Success');
            calculate = convertToNumberFirst + convertToNumberSecond;
            console.log(calculate);
            break;
          
        }else if (krijgNumer == 'sub') {
            console.log('sub Success');
            calculate = convertToNumberFirst - convertToNumberSecond;
            console.log(calculate);
            break;
        
        }else if (krijgNumer == 'mul') {
            calculate = convertToNumberFirst * convertToNumberSecond;
            console.log('mul Success'); 
            console.log(calculate);
            break;
           
        }else if (krijgNumer == 'div'){
            calculate = convertToNumberFirst / convertToNumberSecond;
            console.log('div Success'); 
            console.log(calculate);
            break;
           
        }
    }
    document.getElementById('inputDataOneNew').value = calculate;
}
// Add Sub Mul Div Knop met Input 1 en Input 2

// Dropdown optie dan calculate
function calculatebtn(){
    var inputOne = document.getElementById('inputDataOne').value; //result as string
    var convertToNumberFirst = parseInt(inputOne); // convert to number
    console.log(convertToNumberFirst);
    var inputTwo = document.getElementById('inputDataTwo').value; // result as string
    var convertToNumberSecond = parseInt(inputTwo); // convert to number
    console.log(convertToNumberSecond);
    var getModole = document.getElementsByClassName('myOperatoBtn');
    console.log(getModole);

    var getOperator = document.getElementById('operator').value;
    console.log(getOperator);
    var calculate;
        if (getOperator == 'add2') {
            // console.log('add Success');
            calculate = convertToNumberFirst + convertToNumberSecond;    
            console.log(calculate);
        }
        if (getOperator == 'sub') {
            // console.log('sub Success');
            calculate = convertToNumberFirst - convertToNumberSecond;
            console.log(calculate);
        }
        if (getOperator == 'mul') {
            calculate = convertToNumberFirst * convertToNumberSecond;
            // console.log('mul Success'); 
            console.log(calculate);
        }
        if (getOperator == 'div'){
            calculate = convertToNumberFirst / convertToNumberSecond;
            // console.log('div Success'); 
            console.log(calculate);
        } 
        document.getElementById('inputDataOneNew').value = calculate;      
}
// Dropdown optie dan calculate

//Primegetallen
function primeGetal() {
    var getalvanresult = document.getElementById('inputDataOneNew').value;
    var priemgetal = true;
    for (var ourCounter = 2; ourCounter < getalvanresult; ourCounter++) {
        if ( getalvanresult % ourCounter == 0 ) {
            priemgetal  = false;
            break;
        } 
    }
    switch (priemgetal) {
        case true:
            document.getElementById('inputDataOneNew').value = getalvanresult + ' is een priem getal';
            break;
        case false:   
            document.getElementById('inputDataOneNew').value = getalvanresult + ' is geen priem getal';
            break;
        default:
            break;
    }
}
//Primegetallen


//Choose Number
function clickButton(newValue){
    document.getElementById('inputDataOneNew').value = document.getElementById('inputDataOneNew').value + newValue;
}

function equalButton(){
   var equalResultButton = document.getElementById('inputDataOneNew').value;
    if(equalResultButton) {
        document.getElementById('inputDataOneNew').value = eval(equalResultButton);
    }
}

//Choose Operator

// function runResult(){





