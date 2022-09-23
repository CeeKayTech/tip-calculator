const btn = document.querySelectorAll("button");
const output = document.querySelector(".output")
const cost = document.querySelector(".cost")
const bill = document.querySelector(".bill")
const tip = document.querySelector(".tip")
const person  = document.querySelector(".persons")
const reset = document.querySelector(".reset")

console.log("btn");
btn[0].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.05).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 });

 btn[1].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.1).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 });
btn[2].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.15).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 });
 btn[3].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.20).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 });       
 btn[4].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.5).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 }); 
 btn[5].addEventListener("click", function(){
        bills = (bill.value)
        tips = (bills * 0.25).toFixed(2);
        tip2 = tip.value
        tip.value = tips
        total = (+bills + +tips).toFixed(2);
        cost.value = `$` + (total)
        allCost = (total * person.value).toFixed(2);
        output.value = `$` + (allCost)
        console.log(output.value)
 }); 
 reset.addEventListener("click", function(){
        bill.value = 0
        tip.value = 0
        cost.value = 0
        output.value = 0
        person.value = 1
 });