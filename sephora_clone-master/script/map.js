let map = document.getElementById("submitmap");
map.addEventListener("click", getData);
let city = document.querySelector("#city").value;

function getData() {
	let cityArr = [
		"DELHI",
		"MUMBAI",
		"HYDERABAD",
		"PUNE",
		"BANGLORE",
		"BANGALORE",
		"BENGALURU",
		"HYDERRABAD",
		"NOIDA",
		"KOLKATA",
		"CHENNAI",
		"NAGPUR",
		"LUCKNOW",
		"JAIPUR",
		"",
	];

	city = document.querySelector("#city").value;
	city = city.toUpperCase();
	console.log(city);
	console.log(cityArr.includes(city));
	if (cityArr.includes(city) == true && city !== "") {
		let text = `Our Store is Present at ${city}!`;
		alert(text);
		console.log("yes");
	} else if (city !== "") {
		alert(
			`Sorry! Our store is not present in ${city} at the moment. You can buy our products on this website!`
		);
	}

	let map = document.getElementById("gmap_canvas");
	map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
getData();

// navigator.geolocation.getCurrentPosition(success);

// function success(position) {
// 	var crd = position.coords;

// 	console.log("Your current position is:");
// 	console.log(`Latitude : ${crd.latitude}`);
// 	console.log(`Longitude: ${crd.longitude}`);
// 	console.log(`More or less ${crd.accuracy} meters.`);
// }

// let showCity = () => {

// };
