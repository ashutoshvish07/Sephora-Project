
const searchPro = (query) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
            'X-RapidAPI-Key': 'f61a0d4d26msh294da13f36ec372p1cf486jsn8bdd561d2abf'
        }
    };
    
    fetch(`https://sephora.p.rapidapi.com/products/search?q=${query}&pageSize=60&currentPage=1`, options)
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("sephoraPro",JSON.stringify(response));
            window.location.href = "./product.html";
        })
        .catch(err => console.error(err));

}
