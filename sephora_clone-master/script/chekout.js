
let debitcard = document.getElementById("debit")
debitcard.addEventListener("click",DisplayDebit)

function DisplayDebit(){
//     console.log("5451")
//     var x = document.getElementById("debitCardDiv");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else{
//     x.style.display = "none"
//   }
document.getElementById("debitCardDiv").style.display="block"

}

window.addEventListener("mouseup", function (event) {
	var DB = document.getElementById("debitCardDiv");
	if (
		event.target != DB &&
		event.target.parentNode != DB
	) {
		DB.style.display = "none";
	}
});





let upi = document.getElementById("UPIdiv")
upi.addEventListener("click",Upicard)

function Upicard(){
    document.getElementById("upidata").style.display="block"
}

window.addEventListener("mouseup", function (event) {
	var upi = document.getElementById("upidata");
	if (
		event.target != upi &&
		event.target.parentNode != upi
	) {
		upi.style.display = "none";
	}
});




let netbank = document.getElementById("netbankDiv")
netbank.addEventListener("click",netbanks)

function netbanks(){
    document.getElementById("netbankData").style.display="block"
}

window.addEventListener("mouseup", function (event) {
	var net = document.getElementById("netbankData");
	if (
		event.target != net &&
		event.target.parentNode != net
	) {
		net.style.display = "none";
	}
});





let paytm = document.getElementById("paytm")
paytm.addEventListener("click",paytmDiv)

function paytmDiv(){
    document.getElementById("paymwallet").style.display="block"
}

window.addEventListener("mouseup", function (event) {
	var paytmW = document.getElementById("paymwallet");
	if (
		event.target != paytmW &&
		event.target.parentNode != paytmW
	) {
		paytmW.style.display = "none";
	}
});

let total = JSON.parse(localStorage.getItem("total"))

document.getElementById("checkoutTotal").innerHTML=total

document.getElementById("total-number").innerHTML=total

let subtotal= JSON.parse(localStorage.getItem("subtotal"))

document.getElementById("subtotal-number").innerHTML=subtotal

let discount= JSON.parse(localStorage.getItem("discount"))
document.getElementById("discount-number").innerHTML=discount

document.getElementById("address-button2").addEventListener("click",deliveryPage)

function deliveryPage(){
	window.location.href="confetti.html"
}