

let array = [];

function selectDiv(){
	let div1 = document.getElementById('aboutme');
	let div2 = document.getElementById('skills');
	let div3 = document.getElementById('previouswork');
	let div4 = document.getElementById('coursestaken');
	let div5 = document.getElementById('contact');

	array.push(div1);
	array.push(div2);
	array.push(div3);
	array.push(div4);
	array.push(div5);

	div1.onclick = function() {clicked(div1)};
	div2.onclick = function() {clicked(div2)};
	div3.onclick = function() {clicked(div3)};
	div4.onclick = function() {clicked(div4)};
	div5.onclick = function() {clicked(div5)};
}

function clicked(div){
	let temp = div;
	let temp2 = div;
	for(let i = 0; i <array.length;i++){
		if (div == array[i]){
			if(array[0] != div){
				temp = array[0];
				array[0] = div;
				for(let x = 1; x <array.length;x++){
					if(x <= i){
					temp2 = array[x];
					array[x] = temp;
					temp = temp2;
					}
				}
			}
		}
	}
	for(let a = 0; a <array.length;a++){
		array[a].style.zIndex = 13 - a;
	}
}