// const track = document.getElementById("image-track");

// window.onmousedown = e => {
// 	track.dataset.mouseDownAt = e.clientX;
// }

// window.onmousemove = e => {

// 	if (track.dataset.mouseDownAt==="0")return
// 	const mouseDelta = parseFloat(track.dataset.mouseDownAt)- e.clientX ,
// 	maxDelta =window.innerWidth;
// 	const percentage = (mouseDelta/maxDelta)*-100;
// 	nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage;
// 	if (nextPercentage>0){
// 		nextPercentage=0;
// 	}
// 	if (nextPercentage<-100){
// 		nextPercentage=-100;
// 	}

// 	track.dataset.percentage =nextPercentage;

// 	track.animate({

// 		transform:"translate(" + (nextPercentage) + "%,-50%)"
// 	},{duration:1200,fill:"forwards"});

// 	for(const image of track.getElementsByClassName("image")){
// 		image.animate({objectPosition:nextPercentage +100+ "% 50%" },{duration:1200,fill:"forwards"});
// 	}

// }

// window.onmouseup = e => {
// 	track.dataset.mouseDownAt = "0";
// 	if(track.dataset.percentage===undefined){
// 		track.dataset.percentage=0;
// 	}

// 	track.dataset.prevPercentage=track.dataset.percentage;

// }

const track = document.getElementById("image-track");

window.onmousedown = e => {
	track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
	if(track.dataset.mouseDownAt === "0") return;


	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
	maxDelta = window.innerWidth / 2;

	const percentage = (mouseDelta / maxDelta) * -100,
	nextPercentage = Math.min(0,Math.max(-100,parseFloat(track.dataset.prevPercentage) + percentage));

	// console.log(nextPercentage);
	track.dataset.percentage = nextPercentage;


	// track.style.transform = `translate(${nextPercentage}%, -50%)`;
	track.animate({
		transform: `translate(${nextPercentage}%, -50%)`
		}, { duration: 100, fill: "forwards" });

	for(const image of track.getElementsByClassName("image")) {
		// image.style.objectPosition = `${nextPercentage + 100}% 50%`;
		image.animate({
			objectPosition: `${100 + nextPercentage}% center`
		}, { duration: 100, fill: "forwards" });
	}
}

window.onmouseup = () => {
	track.dataset.mouseDownAt = 0;
	track.dataset.prevPercentage = track.dataset.percentage;
}

