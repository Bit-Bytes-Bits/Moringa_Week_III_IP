//overlay the second div

var nextbtn = document.querySelector('.next-btn');
var popupformbg =  document.querySelector('.popup-form-bg');
var closeform = document.querySelector('.close-form')

nextbtn.addEventListener('click', function(){
    popupformbg.classList.add('popup-form-bg-active');
});

closeform.addEventListener('click', function(){
    popupformbg.classList.remove('popup-form-bg-active');
})

let a = parseInt(document.getElementById('shedA').value);
let b = parseInt(document.getElementById('shedB').value);
let c = parseInt(document.getElementById('shedC').value);
let d = parseInt(document.getElementById('shedD').value);

document.getElementById("dailysubmit").addEventListener("click", function() {
    totalProduction(a,b,c,d);
  });

  selling_price = 45;
  time = [7, 366];

function totalProduction(a , b, c, d){
   
    dailyMilkProduction = (a+b+c+d);
    dailyTotal = dailyMilkProduction * selling_price;
    document.getElementById("calculateDaily").value = "The total production is " + dailyMilkProduction + " liters per day.";
    // console.log(a+b);
    document.getElementById("calculateWeekly").value = "Your weekly income will be Ksh " + (selling_price * dailyMilkProduction*time[0]);

    document.getElementById("calculateYearly").value = "Your yearly income will be Ksh " + (selling_price * dailyMilkProduction*time[1]);

    incomeJanuary = dailyTotal * 31;
    document.getElementById("january").value = "Your income for January is " + (incomeJanuary);
    incomeFebruary = dailyTotal * 29;
    document.getElementById("february").value = "Your income for February is " + (incomeFebruary);
    incomeMarch = dailyTotal * 31;
    document.getElementById("march").value = "Your income for March is " + (incomeMarch);
    incomeApril = dailyTotal * 30;
    document.getElementById("april").value = "Your income for April is " + (incomeApril);
    incomeMay = dailyTotal * 31;
    document.getElementById("may").value = "Your income for May is " + (incomeMay);
    incomeJune = dailyTotal * 30;
    document.getElementById("june").value = "Your income for June is " + (incomeJune);
    incomeJuly = dailyTotal * 31;
    document.getElementById("july").value = "Your income for July is " + (incomeJuly);
    incomeAugust = dailyTotal * 31;
    document.getElementById("august").value = "Your income for August is " + (incomeAugust);
    incomeSeptember = dailyTotal * 30;
    document.getElementById("september").value = "Your income for September is " + (incomeSeptember);
    incomeOctober = dailyTotal * 31;
    document.getElementById("october").value = "Your income for October is " + (incomeOctober);
    incomeNovember = dailyTotal * 30;
    document.getElementById("november").value = "Your income for November is " + (incomeNovember);
    incomeDecember = dailyTotal * 31;
    document.getElementById("december").value = "Your income for December is " + (incomeDecember);


    



}
// console.log

// function weeklyIncome(selling_price, time);
// = document.getElementById('.weekly-submit');
// weeklyIncome.addEventListener('click', totalProduction);{
    
// };


// // buying price is ksh 45

// let sellingPrice = 45;
// // var time;

// // Writing a function that gives you a report on how much milk is produced per shed and the total amount of milk produced by all sheds.

// let sheds = {
//     'A': 510,
//     'B': 308,
//     'C': 486,
//     'D': 572
// }

// var myArray = new Array(Object.keys(sheds))
// var keys = Object.keys(sheds);
// console.log(myArray);

// for()

// total production in a day

// function totalProdution({A,B,C,D}) {
    
//     let totalProdution = (A + B + C + D);
//     return totalProdution;
// }
// console.log(totalProdution(sheds));

// console.log("Production for shed " + keys[0] + " is " + sheds.A + " liters today.");

// const prod = document.getElementById("shed-a");
// prod.textContent="sasa";
// prod.textContent ="Production for shed " + keys[0] + " is " + sheds.A + " liters today.<br> Production for shed " + keys[1] + " is " + sheds.B + " liters today.";




// // Writing a function that takes in the Brookside buying rate as one of its arguments, gives you a report on how much pay you'll receive over time. For instance, it can give a report on how much you will earn on a weekly basis or even on a yearly basis. For example;


// var time = [7, 366]
// console.log(time[1]* 2);
// function incomeOverTime(sellingPrice, time) {
    
//     function totalProdution({A,B,C,D}) {
    
//         let totalProdution = (A + B + C + D);
//         return totalProdution;
//     }

//     weeklyIncome = totalProdution * time[0];

//     yearlyIncome = totalProdution * time[1];

//     return weeklyIncome;
    
// }

// console.log(weeklyIncome);

// // Create a report on how much you'll make each month in a leap year. (Hint: Consider using objects.)








// // Brookside Dairies decided to raise the rate at which they buy a litre from Ksh.45 to Ksh.49.60. Write a function that gives you a report on the comparison of how much you'll make every month and the difference from the previous rate.