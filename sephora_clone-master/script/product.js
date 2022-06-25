let proData = JSON.parse(localStorage.getItem("sephoraPro"));
let q = proData.keyword;
console.log(proData);
const appendData = (data) =>{
    const box = document.getElementById("container");
 box.innerHTML = null;
   data.forEach(({brandName,productName,image450,productId,currentSku:{listPrice,skuId}}) => {
     let div = document.createElement("div");
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
         window.location.href = "./singlePro.html";
     });
     box.append(div);

    });
}

appendData(proData.products);

const changeDiv = () => {
    let op = document.getElementById("sort").value;
    console.log(op);
    searchPro1(q,op);

}

const searchPro1 = (query,s) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': ' f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'

        }
    };
    
    fetch(`https://sephora.p.rapidapi.com/products/search?q=${query}&pageSize=60&currentPage=1&sortBy=${s}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            appendData(response.products);
        })
        .catch(err => console.error(err));

}


