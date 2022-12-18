/*
ARRAY METHOD
these are the inbuilt method available on array for easy manipulation or operation 
length -- it print out number of items inside array
push -- it add new item to the array
pop -- it remove the last item in the array
slice -- it cut out the portion of the array. it takes two parameter which are where to begin and start 
shift -- similar to pop except it remove the first item in the array
unshift -- similar to push except it add the new item to the start replacing the former index 0
concat -- it merge two array together 
splice -- similar to slice
find -- check if the item exists in the array
map -- loop through the item of the array
filter -- remove un wanted item in the array

*/


// addition operation
/*
var name = "ayodele01"

var a = 4;
var a = + 7

var person = {
    name: "ayodele01",
    skin: "melanin",
    country: "Nigeria",
    savings: 1000
}



//alert(person.name)

//person.savings = person.savings + 1000

var data = [1, "hi", true, 45, 56, false]

var alp = [1,2, 3, 44, 45, 66,23, 12]

//data.map((item) =>{
//    console.log( "the result is = " + item)
//})

//console.log(newArray)

const sorting = alp.sort((a,b) => b - a)

console.log(sorting)

var num = Math.max(1,2, 3,4,55,5)

alert(num + 6)

var b = 2;

var c = (20 * Math.random()).toFixed(2)

console.log(a)
 
console.log(person.skin)*/



/* LOOP IN JS
loop are the inbuilt method of javascript that can be use to iterate over array item.
types of loop
1 for loop 
2 while for loop
3 do while loop

these three types of loop follow the same process 1.e 
1. initialization -- you must indicate the starting point
2. condition -- you must indicate the point at which to stop
3. increment -- increasing of the value

*/


//for(var i = 1; i < 50; i+=2){
 //   console.log(i)
//}

//
//const showInterval = window.setInterval(function(){
  //  alert("setInterval working every 10s")
//}, 10000)
//
//setInterval(function(){
//    alert("every 4s")
//}, 4000)
//
//document.gotElementById("btn").onclick = function(){
//    clearInterval(showInterval)
//}
//
//document.getElementById("btn").onclick = function(){
//    window.location.reload()
//}
//
//function onsuccess(position){
//    console.log(position.coords.longitude)
//    console.log(position.coords.latitude)
//}
//
//function onerror(err){
//    console.log(err)
//}
//
//window.navigator.geolocation.getCurrentPosition(onsuccess, onerror, {enableHighAccuracy: true})
//console.log(document.head.childNodes)#

//document.getElementById("header").remove()
//document.title 

// var newelement = document.createElement("h1") // new<h1></h1>
//newelement.innerText = "this is h1" // <h1></h1> is h1</h1>
//document.getElementById("header").append(newelement)

//var newBtn = document.createElement("button")
//newBtn.innerText = "btn from dom"

//document.getElementById("footer").append(newBtn)

//document.getElementById("div").innerHTML = "<b>hello</b>"

//document.getElementById("footer").style.backgroundColor = "red"
//document.getElementById("footer").style.padding = "5rem"
 /*
 class
 inheritance
 destructuring
 string literal
 date
 module
 es6 function - fat arrow
 */
/*
 function cal(){
 alert("horld")   
 }

 //const calc = () => alert("hello")
 function PersonFunc(a, b){
    return a * b
 }



class Person{
  constructor(name,skin){
    this.myname = name;
    this.myskin = skin
  }
}


 var p1 = new Person("seyi", "black")
 var p2 = new Person("ebuka", "ebony")
 var p3 = new Person ("sharon", "white")
*/




 //alert(p1.myname)
/*
class Habit{
    constructor(eat, sleep){
        this.eat = eat
        this.sleep = sleep

    }
    info(){
        alert(`this person habit eating and sleeping is ${this.eat} and ${this.sleep} respectively`)
    }
}

var h1 = new Habit("true", "false")
var h2 = new Habit("false", "false")
var h3 = new Habit("true", "true")

h1.info()
*/

//class car extends Person{
 // constructor(model, year, manufacturer){
   // super(name, skin)
    //this.model = model
    //this.year = year
    //this.manufacturer = manufacturer
   // }


  //info(){
   // alert(`the car ${this.year} purchase is ${this.year}, ${this.model} manufacturere by ${this.manufacturer} `)
 // }
//}

//const car1 = new ca("maxda", 2006, "toyota", "yusuf","ebony")
//const car2 = new car("rav-4", 2022, "honda", "soji", "white")

//car2.info()ate

//var date_check = new Date().toLocaleTimeString()

//alert(date_check)

$("#btn").click(function(){
  // $("#header").fadeOut(5000)
  // $("#h1").text("from jquery") 
 //  $("#header").remove()
    // $("#header").prepend("<b>bold text</b>")
   // $("#header").hide(3000).show(5000)
  // $("#h1").text("chaining method").animate({ marginLeft: "4rem"}, 6000)
  //$(".a").parentsUntil("header").css("background-color", "orange")
  //$("#header").chidren().css("background-color", "green")
  //$(".a").nextAll().css("color", "red")
  $.get("read.txt", function(data){
    alert(data)
  })
})

$(".btn2").click(function(){
  // $("#header").fadeIn(5000)
   $("#h1").html("<p>hello from jquery</P>") 
})

$("#btn3").click(function(){
  //$("#header").fadeToggle(5000)
   $("#imput").val("yusuf") 
})

$("#btn4").click(function(){
  //$("#header").fadeTo(5000, 0.3)
  //$("#h1").css("color", "red")
  $("#h1").animate({
    marginLeft: "4rem",
    minHeight: "10rem",
    minWidth: "4rem",
  }, 5000)

})
