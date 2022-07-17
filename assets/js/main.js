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

// variables

// var firstShedd = parseInt(document.getElementById('shedA').value);
// console.log(firstShedd);
// var secondShed = parseInt(document.getElementById(shedB).value);
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
   
    dailyTotal = (a+b+c+d);
    document.getElementById("calculateDaily").value = "sasa " + dailyTotal;
    // console.log(a+b);
    document.getElementById("calculateWeekly").value = "sasa " + (selling_price * dailyTotal*time[0]);

    document.getElementById("calculateYearly").value = "sasa " + (selling_price * dailyTotal*time[1]);
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