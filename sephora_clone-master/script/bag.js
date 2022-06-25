// let qty1 = document.getElementsByClassName("qty-number");
// qty1.addEventListener("change", selectqty);

// function selectqty() {
// 	console.log(11111111111);
// 	let qty2 = document.getElementById("qty-number").value;
// 	// let price =
// 	console.log(qty2);
// }



let promofn = (e) => {
	if (e.key == "Enter") {
		let promocode = document.getElementById("promoinp").value;
		if (promocode == "masai10") {
			let total = document.getElementById("subtotal-number");
			console.log(Number(total.innerText));
			
			let discount = Number(total.innerText) / 10;
			document.getElementById("discount-number").innerText=discount;
			let newtotal = Number(total.innerText) - discount;
			console.log(discount, newtotal);
			document.getElementById("total-number").innerText="$. "+newtotal;
		}
	}
};

let promo = document.getElementById("promoinp");
promo.addEventListener("keydown", promofn);



var sum = sum || 0;
var num = 0 || num;
// document.getElementsByClassName("mybag").innerText=qty



var products = JSON.parse(localStorage.getItem("cart"));

var productslength=products.length

var countofproducts=document.querySelector(".mybag1")

countofproducts.innerText=productslength


		// document.getElementById("box").append(products[0].img)


// products.map(function(item,index){
	
// 	Display(item.img,item.brand,item.price)
	
	
// });

document.getElementById("subtotal-number").innerHTML=sum
document.getElementById("total-number").innerText="$ "+document.getElementById("subtotal-number").innerText



document.getElementById("address-button").addEventListener("click",bagToCheckout)

function bagToCheckout(){
	window.location.href="checkout.html"
}

	
	

// }
document.getElementById("subtotal-number").innerHTML=sum
document.getElementById("total-number").innerText="$ "+document.getElementById("subtotal-number").innerText



display()

function display(){
	products.map(function(el,index){
	
		var row = document.createElement("tr");
		
		var td1 = document.createElement("td");
		let image = document.createElement("img");
		image.src=el.img
		image.setAttribute("id","productImg")
		
		
		td1.append(image)
		var td2 = document.createElement("td");
		td2.setAttribute("id","description")
    	// td2.textContent = el.brand
		var product_brand=document.createElement("p")
		product_brand.innerText=el.brand
		var product_Name=document.createElement("h3")
		product_Name.innerText=el.productName
		td2.append(product_brand,product_Name)
		var td3 = document.createElement("td");
		
		var price=el.price.slice(1)	
		var increase = document.createElement("button");
		// increase.textContent = "+";
		increase.innerHTML=  `<span class="material-icons">
		chevron_right
		</span>`
		increase.addEventListener("click", function (){
			var val = Number(qty.innerText);
			if(val<5){
				qty.innerText = Number(qty.innerText) + 1;
			countofproducts.innerText++
			console.log(countofproducts.innerText)

			document.getElementsByClassName("mybag").innerText=qty
			total.innerText = Number(qty.innerText) * price;
			sum = eval(sum + Number(price));
			document.getElementById("subtotal-number").innerHTML=sum
			document.getElementById("total-number").innerText="$ "+document.getElementById("subtotal-number").innerText
			}
			
		});

		var decrease = document.createElement("button");
		// decrease.setAttribute("id", "dec");
		// decrease.textContent = "-";
		decrease.innerHTML=`<span class="material-icons">
		chevron_left
		</span>` 
		decrease.addEventListener("click", function () {
			var val = Number(qty.innerText);
			if (val > 1) {
			  qty.innerText = Number(qty.innerText) - 1;
			  countofproducts.innerText--
			  document.getElementsByClassName("mybag").innerText=qty
			  total.innerText = Number(total.innerText) - price;
			  sum = eval(sum - Number(price));
			  document.getElementById("subtotal-number").innerHTML=sum
			  document.getElementById("total-number").innerText="$ "+document.getElementById("subtotal-number").innerText
			//   tag.innerText = sum;
			//   checkOutTotal = JSON.parse(localStorage.getItem("total")) || 0;
			//   checkOutTotal = sum;
			//   localStorage.setItem("total", JSON.stringify(checkOutTotal));
			}
		  });
		  
		  
		  var qty = document.createElement("p");
		  qty.innerText="1"
		  qty.setAttribute("class","currentQty")
		  qty.id = "qty" + (num + 1);
		  td3.append(decrease,qty,increase)
		  td3.style.display = "flex";
		  td3.setAttribute("id","qtychange")

		  var td4 = document.createElement("td");
		  var leftbox= document.createElement("div")
		  leftbox.setAttribute("id","priceBox")
		  var dollar = document.createElement("p")
		  dollar.innerText="$"
		  var total = document.createElement("p");
		  total.innerText=price
    		total.id = "total" + (num + 1);
			leftbox.append(dollar,total)
			td4.append(leftbox)

			var td5 = document.createElement("td")
			var removBtn = document.createElement("button")
			removBtn.setAttribute("id","RemoveBtn")
			removBtn.innerText="Remove"
			removBtn.addEventListener("click",function(){
				removeFn(el)
			})
			td5.append(removBtn)

		  row.append(td1, td2, td3,td4,td5);
			var hr = document.createElement("hr")
		  var tbody = document.querySelector("tbody");
    	  tbody.append(row);
		  sum = eval(sum + Number(price));

	
	
	
	
	});
}
document.getElementById("subtotal-number").innerHTML=sum
document.getElementById("total-number").innerText="$ "+document.getElementById("subtotal-number").innerText

function removeFn(el,index){
	
	products.splice(index,1)
	
	localStorage.setItem("cart",JSON.stringify(products))
	location.reload()
	// document.querySelector("tbody").innerHTML=null
	// var arrays = JSON.parse(localStorage.getItem("cart"))
	// display(arrays)
	
	console.log(products)
}


		document.getElementById("address-button").addEventListener("click",moveToCheckout)


		var cartDiscount=[]
		var cartTotal=[]
		var Cartsubtotal=[]

		var CartAddrress=[]

		function moveToCheckout(){
		let total=document.getElementById("total-number").innerText
		cartTotal.push(total)
		localStorage.setItem("total",JSON.stringify(cartTotal))
		console.log(cartTotal)

		let subtotal= document.getElementById("subtotal-number").innerText

		Cartsubtotal.push(subtotal)
		localStorage.setItem("subtotal",JSON.stringify(Cartsubtotal))
		console.log(subtotal)

		let discount= document.getElementById("discount-number").innerText
		cartDiscount.push(discount)
		localStorage.setItem("discount",JSON.parse(cartDiscount))

		console.log(cartDiscount)

		let UserAddress = document.getElementById("address").value


		// console.log(UserAddress)
		let UserCity = document.getElementById("city").value
		let UserState = document.getElementById("state").value
		let Userpincode = document.getElementById("pincode").value
		let Usermobile= document.getElementById("mobile").value

		CartAddrress.push(UserAddress,UserCity,UserState,Userpincode,Usermobile)

		localStorage.setItem("UserAddress",JSON.stringify(CartAddrress))
		console.log(CartAddrress)







}


























// Display()
// function Display(){
// 	data.map(function(el,index){
// 		var row = document.createElement("tr");
// 		var td1 = document.createElement("td");
// 		let img = document.createElement("img");
// 		img.src=el.img
// 		td1.append(img)
// 		var td2 = document.createElement("td");
//     	td2.textContent = el.brand
// 		var td3 = document.createElement("td");
// 		var price=el.price
// 		var increase = document.createElement("button");
// 		increase.textContent = "+";
// 		increase.addEventListener("click", function (){
      
// 			qty.innerText = Number(qty.innerText) + 1;

// 			document.getElementsByClassName("mybag").innerText=qty
// 			total.innerText = Number(qty.innerText) * price;
// 			sum = eval(sum + Number(price));
// 			document.getElementById("subtotal-number").innerHTML=sum
// 			document.getElementById("total-number").innerText=document.getElementById("subtotal-number").innerText
// 		});

// 		var decrease = document.createElement("button");
// 		// decrease.setAttribute("id", "dec");
// 		decrease.textContent = "-";
// 		decrease.addEventListener("click", function () {
// 			var val = Number(qty.innerText);
// 			if (val > 1) {
// 			  qty.innerText = Number(qty.innerText) - 1;
// 			  document.getElementsByClassName("mybag").innerText=qty
// 			  total.innerText = Number(total.innerText) - price;
// 			  sum = eval(sum - Number(price));
// 			  document.getElementById("subtotal-number").innerHTML=sum
// 			  document.getElementById("total-number").innerText=document.getElementById("subtotal-number").innerText
// 			//   tag.innerText = sum;
// 			//   checkOutTotal = JSON.parse(localStorage.getItem("total")) || 0;
// 			//   checkOutTotal = sum;
// 			//   localStorage.setItem("total", JSON.stringify(checkOutTotal));
// 			}
// 		  });
		  
		  
// 		  var qty = document.createElement("p");
// 		  qty.innerText="1"
// 		  qty.id = "qty" + (num + 1);
// 		  td3.append(increase,qty,decrease)
// 		  td3.style.display = "flex";

// 		  var td4 = document.createElement("td");
// 		  var total = document.createElement("p");
// 		  total.innerText=price
//     		total.id = "total" + (num + 1);
// 			td4.append(total)

// 		  row.append(td1, td2, td3,td4);

// 		  var tbody = document.querySelector("tbody");
//     	  tbody.append(row);
// 		  sum = eval(sum + Number(price));

// 	})
	