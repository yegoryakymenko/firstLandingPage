(function() {
	let navbarTrigger = document.querySelector(".burger");
	let navbar = document.querySelector("#navbarTrigger");
	let header = document.querySelector(".header");
	console.log(navbar);
	console.log(navbarTrigger);
	navbarTrigger.addEventListener("click",  function navbarActiveTrigger() {
		navbar.classList.toggle('navigation-active');
		navbarTrigger.classList.toggle('burger-active');
		console.log("asd");
	});
	document.addEventListener("scroll", function navbarFixed() {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled >= 600) {
			header.classList.add("active");	
		} else if(scrolled < 600) {
			header.classList.remove("active");
		}
		console.log(scrolled)
	})
	
})();