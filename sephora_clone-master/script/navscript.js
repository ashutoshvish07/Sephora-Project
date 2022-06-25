let register = async (e) => {
	e.preventDefault();

	let form_data = {
		name: document.getElementById("name1").value,
		email: document.getElementById("email1").value,
		password: document.getElementById("password1").value,
		username: document.getElementById("username1").value,
		mobile: document.getElementById("mobile1").value,
		description: "xyz",
	};

	// console.log(form_data);
	form_data = JSON.stringify(form_data);

	let res = await fetch(
		"https://masai-api-mocker.herokuapp.com/auth/register",
		{
			method: "POST",
			body: form_data,
			// mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	let data = await res.json();
	console.log(data);
	window.location.href = "./index.html";
};

document.getElementById("submit2").addEventListener("click", register);

//login;
let login = async () => {
	let user_data = {
		username: document.getElementById("username").value,
		password: document.getElementById("password").value,
	};

	user_data = JSON.stringify(user_data);

	let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
		method: "POST",
		body: user_data,

		headers: {
			"Content-Type": "application/json",
		},
	});

	let data = await res.json();

	let username = document.getElementById("username").value;
	getUserDetail(username, data.token);
	console.log(data);
};

document.getElementById("submit1").addEventListener("click", login);

let getUserDetail = async (username, token) => {
	console.log("here");
	let res = await fetch(
		`https://masai-api-mocker.herokuapp.com/user/${username}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	let data = await res.json();
	console.log("user data: ", data);
	let logName = document.getElementById("logname");
	console.log(logName.innerHTML);
	let name = data.name;
	localStorage.setItem("accountName", name);

	let name2 = localStorage.getItem("accountName");

	console.log(document.getElementById("logname").innerText);
	document.getElementById("logname").innerText = name2 || "Login";
	document.getElementById("stickynavlogin").innerText = name2 || "Login";
	document.getElementById("sidelogname").innerText = name2 || "Login";
};
let name2 = localStorage.getItem("accountName");

console.log(document.getElementById("logname").innerText);
document.getElementById("logname").innerText = name2 || "Login";
document.getElementById("stickynavlogin").innerText = name2 || "Login";
document.getElementById("sidelogname").innerText = name2 || "Login";

document.getElementById("submit1").addEventListener("click", login);

// let searchPro = (query) => {
// 	console.log(query);
// };
document.getElementById("RedirectTobag").addEventListener("click", toBag)

function toBag(){
	window.location.href="bag.html"
  }


  document.getElementById("redirectToFav").addEventListener("click", toFav)

  function toFav(){
	window.location.href="favourite.html"
  }


  document.getElementById("head-bottom-title-upper").addEventListener("click", toHome)

	function toHome(){
	window.location.href="index.html"
}




