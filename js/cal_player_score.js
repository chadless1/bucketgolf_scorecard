function calScore() {
	
	// get scores of all 4 players and calulate total score

	//player 1 scores
	const p1_scores = document.querySelectorAll(".p1_hs");
	let sum_p1_total = Number(0);
	let sum_p1_par_total = Number(0);
	for (let i=0; i < p1_scores.length; i++) {
		sum_p1_total += Number(p1_scores[i].innerHTML);
		if (String(p1_scores[i].innerHTML).length !=0)
			sum_p1_par_total += Number(p1_scores[i].innerHTML) - 3;
	}
    //player 1 score string
	let p1_all_score = `${sum_p1_total} / ${sum_p1_par_total}`;
	
	//player 2 scores
	const p2_scores = document.querySelectorAll(".p2_hs");
	let sum_p2_total = Number(0);
	let sum_p2_par_total = Number(0);
	for (let i=0; i < p2_scores.length; i++) {
		sum_p2_total += Number(p2_scores[i].innerHTML);
		if (String(p2_scores[i].innerHTML).length !=0)
			sum_p2_par_total += Number(p2_scores[i].innerHTML) - 3;
	
	}
	//player 2 score string
	let p2_all_score = `${sum_p2_total} / ${sum_p2_par_total}`;
	
	//player 3 scores
	const p3_scores = document.querySelectorAll(".p3_hs");
	let sum_p3_total = Number(0);
	let sum_p3_par_total = Number(0);
	for (let i=0; i < p3_scores.length; i++) {
		sum_p3_total += Number(p3_scores[i].innerHTML);
		if (String(p3_scores[i].innerHTML).length !=0)
			sum_p3_par_total += Number(p3_scores[i].innerHTML) - 3;
	}
	//player 3 score string
	let p3_all_score = `${sum_p3_total} / ${sum_p3_par_total}`;
	
	//player 4 scores
	const p4_scores = document.querySelectorAll(".p4_hs");
	let sum_p4_total = Number(0);
	let sum_p4_par_total = Number(0);
	for (let i=0; i < p4_scores.length; i++) {
		sum_p4_total += Number(p4_scores[i].innerHTML);
		if (String(p4_scores[i].innerHTML).length !=0)
			sum_p4_par_total += Number(p4_scores[i].innerHTML) - 3;
	}
	//player 4 score string
	let p4_all_score = `${sum_p4_total} / ${sum_p4_par_total}`;
	
	// display player scores
	document.getElementById("p1s").innerHTML = p1_all_score;
	document.getElementById("p2s").innerHTML = p2_all_score;
	document.getElementById("p3s").innerHTML = p3_all_score;
	document.getElementById("p4s").innerHTML = p4_all_score;

	}
