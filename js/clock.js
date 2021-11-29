function getTime(){
	const time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let morningorafternoon = decideEnding(hours);
	minutes = addZero(minutes);
	hours = twelveHourClock(hours);
	document.getElementById('time').innerHTML =  hours + ":" + minutes + " " + morningorafternoon;
	setTimeout(getTime, 1000);
}

function addZero(time) {
  if (time < 10) {time = "0" + time};
  return time;
}

function twelveHourClock(hour){
	if(hour>12){
		hour = hour - 12;
	}
	else if(hour == 0){
		hour = 12;
	}
	return hour;
}

function decideEnding(hour){
	if(hour<12){
		return "AM"
	}
	else{
		return "PM";
	}
}

function getDate(){
	const date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	day = addZero(day);
	month = addZero(month);
	year = addZero(year);
	document.getElementById('date').innerHTML =  month + "/" + day + "/" + year;
	setTimeout(getDate, 1000);
}