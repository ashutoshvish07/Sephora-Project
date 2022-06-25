

let data_array=JSON.parse(localStorage.getItem("favorite")) || [];
let bag_array=JSON.parse(localStorage.getItem("cart")) || [];

    const append=()=>{

        data_array.forEach(function(el,index){

            var container=document.getElementById("container_fav")
            
            let img_div=document.createElement("div");
            img_div.id="img_div";

            let info_div=document.createElement("div");
            info_div.id="info_div";

            let holder=document.createElement("div");
            holder.id="holder"

            let img=document.createElement("img");
            img.src=el.img;

            let brand=document.createElement("p");
            brand.innerText=el.brand;

            let heading=document.createElement("h3");
            heading.innerText=el.productName;

            let price=document.createElement("h4");
            price.innerText=el.price;

            let mv_bag=document.createElement("button");
            mv_bag.innerText="Move to bag";
            mv_bag.addEventListener("click", function(){
               bag_array.push(el);
               localStorage.setItem("cart",JSON.stringify(bag_array));
            })

            var btn=document.createElement("button");
             btn.innerText="Remove";
             btn.addEventListener("click", function(){
                data_array.splice(index,1);
        
                localStorage.setItem("favorite",JSON.stringify(data_array));
                window.location.reload();
              });
            

            img_div.append(img);
            info_div.append(brand,heading,price,mv_bag,btn)
            holder.append(img_div,info_div)
            container.append(holder)


        })
    }

    append()