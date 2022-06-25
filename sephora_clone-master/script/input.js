function searchDivFn() {
	let searchresults = document.getElementById("searchresults");
	searchresults.style.display = "block";
	console.log("1");
}

window.addEventListener("mouseup", function (event) {
	var searchresults = document.getElementById("searchresults");
	if (
		event.target != searchresults &&
		event.target.parentNode != searchresults
	) {
		searchresults.style.display = "none";
	}
});
