const {proId,skuId} = JSON.parse(localStorage.getItem("proid"));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': 'f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/detail?productId=${proId}&preferedSku=${skuId}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        appendPro(response);
   })
	.catch(err => console.error(err));
const box1 = document.getElementById("sideBox");
const box2 = document.getElementById("mainBox");
const box3 = document.getElementById("priceBox");
const box4 = document.getElementById("content");
let proDescription;
let brandDescription;
let arr = JSON.parse(localStorage.getItem("cart")) || [];
let arr2 = JSON.parse(localStorage.getItem("favorite")) || [];
const appendPro = ({currentSku:{skuImages,alternateImages,listPrice,size},brand,displayName,shortDescription,parentCategory}) => {
    box1.innerHTML = null;
    box2.innerHTML = null;
    box3.innerHTML = null;
    box4.innerHTML = null;
    let img2 = document.createElement("img");
    img2.src = skuImages.image300;
    box2.append(img2);
    let img3 = document.createElement("img");
    img3.src = skuImages.image300;
    img3.addEventListener("click",()=>{
       img2.src = skuImages.image300;
    });
    box1.append(img3);
    alternateImages.forEach(element => {
        let img1 = document.createElement("img");
        img1.src = element.image300;
        img1.addEventListener("click",()=>{
            img2.src = element.image300;
         });
        box1.append(img1)
    });
    let brand1 = document.createElement("h3");
    brand1.innerText = brand.displayName;
    let name = document.createElement("p");
    name.innerText = displayName;
    let price = document.createElement("p");
    price.id="price"
    price.innerText ="price:" +listPrice;
    let offer=document.createElement("p");
    offer.innerText="Offer : Use 'masai10' to avail your 10% discount."
    let size1 = document.createElement("p");
    size1.id="size1"
    size1.innerText ="Size:" + size;

    let btn_hold=document.createElement("div");
    btn_hold.id="btn_hold";
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click",()=>{
        let obj = {
            brand: brand.displayName,
            productName: displayName,
            price: listPrice,
            img: skuImages.image300
        };
        arr.push(obj);
        localStorage.setItem("cart",JSON.stringify(arr));
    });
    let fav = document.createElement("span");
    fav.setAttribute("class","material-icons");
    fav.innerText = "favorite_border";
    fav.addEventListener("click",()=>{
        let obj1 = {
            brand: brand.displayName,
            productName: displayName,
            price: listPrice,
            img: skuImages.image300
        };
        arr2.push(obj1);
        localStorage.setItem("favorite",JSON.stringify(arr2));
    });
    btn_hold.append(btn,fav);
    box3.append(brand1,name,price,offer,size1,btn_hold);
    box4.innerHTML = shortDescription; 
    proDescription = shortDescription;
    brandDescription = brand.longDescription;
    similarPro(parentCategory.displayName);
};


const finerDetails = () =>{
    box4.innerHTML = null;
    box4.innerHTML = proDescription;
}
const aboutBrand = () =>{
    box4.innerHTML = null;
    box4.innerHTML = brandDescription;
}
const exchange = () =>{
    box4.innerHTML = null;
    box4.innerHTML = "<p>This item can’t be returned — our Returns Policy doesn’t cover innerwear, lingerie, fragrances and beauty products.</p>";
}


// class = swiper-slide

let slideBox = document.querySelector(".innerDiv");
let dataArr = [];

const similarPro = (q) =>{
      const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
		'X-RapidAPI-Key': 'f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

	}
};

fetch(`https://sephora.p.rapidapi.com/products/search?q=${q}&pageSize=12&currentPage=1`, option)
	.then(response => response.json())
	.then(response => {
        let {products} = response;
        for(let i=0;i<12;i++)
        {
            dataArr.push(products[i]);
        }
        let array = [];
             for (let m = 0; m < 5; m++) {
            	array.push(dataArr[m]);
              }

              appendSimilar(array);
              let leftBtn = 0;
              let rigthBtn = 4;
              document.querySelector(".left").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                leftBtn--;
                rigthBtn--;
                array = [];
                if (leftBtn >= 0) {
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr[i]);
                    }
                    appendSimilar(array);
                } 
              });
              document.querySelector(".right").addEventListener("click",()=>{
                if (leftBtn < 0 && rigthBtn < 4) {
                    leftBtn = 0;
                    rigthBtn = 4;
                }
                array = [];
                if (rigthBtn < dataArr.length - 1) {
                    leftBtn++;
                    rigthBtn++;
                    for (let i = leftBtn; i <= rigthBtn; i++) {
                        array.push(dataArr[i]);
                    }
                    appendSimilar(array);
                }
              });
    })
	.catch(err => console.error(err));
}


const appendSimilar = (array) => {
    slideBox.innerHTML = null;
    
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
          slideBox.append(div);
       });
}








