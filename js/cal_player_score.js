function calScore() {
	
	// get scores of all 4 players and calulate total score

	//player 1 scores
	const p1_scores = document.querySelectorAll(".p1_hs");
	let sum_p1_total = Number(0);
	for (let i=0; i < p1_scores.length; i++) {
		sum_p1_total += Number(p1_scores[i].innerHTML);
	}

	//player 2 scores
	const p2_scores = document.querySelectorAll(".p2_hs");
	let sum_p2_total = Number(0);
	for (let i=0; i < p2_scores.length; i++) {
		sum_p2_total += Number(p2_scores[i].innerHTML);
	}
	
	//player 3 scores
	const p3_scores = document.querySelectorAll(".p3_hs");
	let sum_p3_total = Number(0);
	for (let i=0; i < p3_scores.length; i++) {
		sum_p3_total += Number(p3_scores[i].innerHTML);
	}
	
	//player 4 scores
	const p4_scores = document.querySelectorAll(".p4_hs");
	let sum_p4_total = Number(0);
	for (let i=0; i < p4_scores.length; i++) {
		sum_p4_total += Number(p4_scores[i].innerHTML);
	}
	
	// display player scores
	document.getElementById("p1s").innerHTML = sum_p1_total;
	document.getElementById("p2s").innerHTML = sum_p2_total;
	document.getElementById("p3s").innerHTML = sum_p3_total;
	document.getElementById("p4s").innerHTML = sum_p4_total;

	}
