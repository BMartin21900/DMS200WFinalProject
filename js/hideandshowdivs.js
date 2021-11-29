
function showAboutMe(){
	const element1 = document.getElementById('aboutmeclickable');
	const element2 = document.getElementById('skillsclickable');
	const element3 = document.getElementById('previousworkclickable');
	const element4 = document.getElementById('coursestakenclickable');
	const element5 = document.getElementById('contactclickable');

	const xbtn1 = document.getElementById('aboutmex-btn');
	const xbtn2 = document.getElementById('skillsx-btn');
	const xbtn3 = document.getElementById('previousworkx-btn');
	const xbtn4 = document.getElementById('coursestakenx-btn');
	const xbtn5 = document.getElementById('contactx-btn');

	const homebtn = document.getElementById('homebtn');

	element1.addEventListener("click", () => {
	var showelement = document.getElementById('aboutme');
	runHideOrShow(showelement);
	moveDiv(showelement);
	
});

	element2.addEventListener("click", () => {
	var showelement = document.getElementById('skills');
	runHideOrShow(showelement);
	moveDiv(showelement);
});

	element3.addEventListener("click", () => {
	var showelement = document.getElementById('previouswork');
	runHideOrShow(showelement);
	moveDiv(showelement);
});

	element4.addEventListener("click", () => {
	var showelement = document.getElementById('coursestaken');
	runHideOrShow(showelement);
	moveDiv(showelement);
});

	element5.addEventListener("click", () => {
	var showelement = document.getElementById('contact');
	runHideOrShow(showelement);
	moveDiv(showelement);
});


		xbtn1.addEventListener("click", () => {
		var showelement = document.getElementById('aboutme');
		runHideOrShow(showelement);
});

		xbtn2.addEventListener("click", () => {
		var showelement = document.getElementById('skills');
		runHideOrShow(showelement);
});

		xbtn3.addEventListener("click", () => {
		var showelement = document.getElementById('previouswork');
		runHideOrShow(showelement);
});

		xbtn4.addEventListener("click", () => {
		var showelement = document.getElementById('coursestaken');
		runHideOrShow(showelement);
});

		xbtn5.addEventListener("click", () => {
		var showelement = document.getElementById('contact');
		runHideOrShow(showelement);
});


		homebtn.addEventListener("click", () => {
		var showelement = document.getElementById('aboutme');
		hideAll(showelement);
		showelement = document.getElementById('skills');
		hideAll(showelement);
		showelement = document.getElementById('previouswork');
		hideAll(showelement);
		showelement = document.getElementById('coursestaken');
		hideAll(showelement);
		showelement = document.getElementById('contact');
		hideAll(showelement);
});

}

function runHideOrShow(element){
if(element.style.display == ""){
		element.style.display = "none";
	}

	if (element.style.display != 'none'){
		element.style.display = 'none';
	}
	else{
		element.style.display = 'block';
		element.style.top = 20 + "%";
		element.style.left = 30 + "%";
		element.style.width = 700 + "px";
		element.style.height = 600 + "px";
	}
}

function hideAll(element){
	if (element.style.display != 'none'){
		element.style.display = 'none';
	}
}