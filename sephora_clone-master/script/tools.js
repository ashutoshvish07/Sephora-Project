function ShowAndHide() {
    var x = document.getElementById("SectionName");
    if (x.style.display == "none") {
      x.style.display = "block";
  
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide2() {
    var x = document.getElementById("SectionName2");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide3() {
    var x = document.getElementById("SectionName3");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide4() {
    var x = document.getElementById("SectionName4");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide5() {
    var x = document.getElementById("SectionName5");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide6() {
    var x = document.getElementById("SectionName6");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function ShowAndHide7() {
    var x = document.getElementById("SectionName7");
    if (x.style.display == "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  
  // 1

  let slideBox1 = document.querySelector("#inner1");
let dataArr1 = [];

const similarPro1 = (q,s) =>{
      const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': ' f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/search?q=${q}&pageSize=12&currentPage=1&sortBy=${s}`, option)
	.then(response => response.json())
	.then(response => {
    console.log(response);
        let {products} = response;
        for(let i=0;i<12;i++)
        {
            dataArr1.push(products[i]);
        }
        
        let array = [];
             for (let m = 0; m < 5; m++) {
            	array.push(dataArr1[m]);
              }

              appendSimilar1(array);
              let leftBtn = 0;
              let rigthBtn = 4;
              document.querySelector("#left1").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                leftBtn--;
                rigthBtn--;
                array = [];
                if (leftBtn >= 0) {
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr1[i]);
                    }
                    appendSimilar1(array);
                } 
              });
              document.querySelector("#right1").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                array = [];
                if (rigthBtn < dataArr1.length - 1) {
                    leftBtn++;
                    rigthBtn++;
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr1[i]);
                    }
                    appendSimilar1(array);
                }
              });
    })
	.catch(err => console.error(err));
}


const appendSimilar1 = (array) => {
    slideBox1.innerHTML = null;
    
    array.forEach(({brandName,productName,image450,productId,currentSku:{listPrice,skuId}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let img1 = document.createElement("img");
        img1.src = image450;
        let brand = document.createElement("h4");
        brand.innerText = brandName;
        let product = document.createElement("p");
        product.innerText = productName;
        let price = document.createElement("h4");
        price.innerText = listPrice;
        div.append(img1,brand,product,price);
        div.addEventListener("click",()=>{
            let obj = {
                proId: productId,
                skuId: skuId
            };
            localStorage.setItem("proid",JSON.stringify(obj));
            window.location.href = "singlePro.html";
        });
          slideBox1.append(div);
       });
}

// 2
let slideBox2 = document.querySelector("#inner2");
let dataArr2 = [];

const similarPro2 = (q,s) =>{
      const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': ' f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/search?q=${q}&pageSize=12&currentPage=1&sortBy=${s}`, option)
	.then(response => response.json())
	.then(response => {
    console.log(response);
        let {products} = response;
        for(let i=0;i<12;i++)
        {
            dataArr2.push(products[i]);
        }
        
        let array = [];
             for (let m = 0; m < 5; m++) {
            	array.push(dataArr2[m]);
              }

              appendSimilar2(array);
              let leftBtn = 0;
              let rigthBtn = 4;
              document.querySelector("#left2").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                leftBtn--;
                rigthBtn--;
                array = [];
                if (leftBtn >= 0) {
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr2[i]);
                    }
                    appendSimilar2(array);
                } 
              });
              document.querySelector("#right2").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                array = [];
                if (rigthBtn < dataArr2.length - 1) {
                    leftBtn++;
                    rigthBtn++;
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr2[i]);
                    }
                    appendSimilar2(array);
                }
              });
    })
	.catch(err => console.error(err));
}


const appendSimilar2 = (array) => {
    slideBox2.innerHTML = null;
    
    array.forEach(({brandName,productName,image450,productId,currentSku:{listPrice,skuId}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let img1 = document.createElement("img");
        img1.src = image450;
        let brand = document.createElement("h4");
        brand.innerText = brandName;
        let product = document.createElement("p");
        product.innerText = productName;
        let price = document.createElement("h4");
        price.innerText = listPrice;
        div.append(img1,brand,product,price);
        div.addEventListener("click",()=>{
            let obj = {
                proId: productId,
                skuId: skuId
            };
            localStorage.setItem("proid",JSON.stringify(obj));
            window.location.href = "singlePro.html";
        });
          slideBox2.append(div);
       });
}



// 3
let slideBox3 = document.querySelector("#inner3");
let dataArr3 = [];

const similarPro3 = (q) =>{
      const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': ' f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/search?q=${q}&pageSize=12&currentPage=1`, option)
	.then(response => response.json())
	.then(response => {
    console.log(response);
        let {products} = response;
        for(let i=0;i<12;i++)
        {
            dataArr3.push(products[i]);
        }
        
        let array = [];
             for (let m = 0; m < 5; m++) {
            	array.push(dataArr3[m]);
              }

              appendSimilar3(array);
              let leftBtn = 0;
              let rigthBtn = 4;
              document.querySelector("#left3").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                leftBtn--;
                rigthBtn--;
                array = [];
                if (leftBtn >= 0) {
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr3[i]);
                    }
                    appendSimilar3(array);
                } 
              });
              document.querySelector("#right3").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                array = [];
                if (rigthBtn < dataArr3.length - 1) {
                    leftBtn++;
                    rigthBtn++;
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr3[i]);
                    }
                    appendSimilar3(array);
                }
              });
    })
	.catch(err => console.error(err));
}


const appendSimilar3 = (array) => {
    slideBox3.innerHTML = null;
    
    array.forEach(({brandName,productName,image450,productId,currentSku:{listPrice,skuId}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let img1 = document.createElement("img");
        img1.src = image450;
        let brand = document.createElement("h4");
        brand.innerText = brandName;
        let product = document.createElement("p");
        product.innerText = productName;
        let price = document.createElement("h4");
        price.innerText = listPrice;
        div.append(img1,brand,product,price);
        div.addEventListener("click",()=>{
            let obj = {
                proId: productId,
                skuId: skuId
            };
            localStorage.setItem("proid",JSON.stringify(obj));
            window.location.href = "singlePro.html";
        });
          slideBox3.append(div);
       });
}


// 4

let slideBox4 = document.querySelector("#inner4");
let dataArr4 = [];

const similarPro4 = (q) =>{
      const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': ' f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/search?q=${q}&pageSize=12&currentPage=1`, option)
	.then(response => response.json())
	.then(response => {
    console.log(response);
        let {products} = response;
        for(let i=0;i<12;i++)
        {
            dataArr4.push(products[i]);
        }
        
        let array = [];
             for (let m = 0; m < 5; m++) {
            	array.push(dataArr4[m]);
              }

              appendSimilar4(array);
              let leftBtn = 0;
              let rigthBtn = 4;
              document.querySelector("#left4").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                leftBtn--;
                rigthBtn--;
                array = [];
                if (leftBtn >= 0) {
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr4[i]);
                    }
                    appendSimilar4(array);
                } 
              });
              document.querySelector("#right4").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                array = [];
                if (rigthBtn < dataArr4.length - 1) {
                    leftBtn++;
                    rigthBtn++;
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr4[i]);
                    }
                    appendSimilar4(array);
                }
              });
    })
	.catch(err => console.error(err));
}


const appendSimilar4 = (array) => {
    slideBox4.innerHTML = null;
    
    array.forEach(({brandName,productName,image450,productId,currentSku:{listPrice,skuId}}) => {
        let div = document.createElement("div");
        div.setAttribute("class","card");
        let img1 = document.createElement("img");
        img1.src = image450;
        let brand = document.createElement("h4");
        brand.innerText = brandName;
        let product = document.createElement("p");
        product.innerText = productName;
        let price = document.createElement("h4");
        price.innerText = listPrice;
        div.append(img1,brand,product,price);
        div.addEventListener("click",()=>{
            let obj = {
                proId: productId,
                skuId: skuId
            };
            localStorage.setItem("proid",JSON.stringify(obj));
            window.location.href = "singlePro.html";
        });
          slideBox4.append(div);
       });
}



similarPro1("tools","P_NEW%3A1");
similarPro2("tools","P_BEST_SELLING%3A1");
similarPro3("brushes");
similarPro4("high-tech tools");
