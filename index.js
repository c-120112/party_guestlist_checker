//Party Guestlist Checker 

var guestlist = ["Cory", "Brian", "Gerald", "Clint", "Daniel", "Robbie"];

var guestname = prompt("What is your name?")

if (guestlist.includes(guestname)){
    alert("Welcome " + guestname + ".")
} else alert("Sorry, maybe next time " + guestname + ".")
