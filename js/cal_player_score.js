function calScore(button) {
	
	// get scores of all 4 players and calulate total score

	//player 1 scores
	var p1_h1_score = document.getElementById("p1_h1s").innerHTML;
	var p1_h2_score = document.getElementById("p1_h2s").innerHTML;
	var p1_h3_score = document.getElementById("p1_h3s").innerHTML;
	var p1_h4_score = document.getElementById("p1_h4s").innerHTML;
	var p1_h5_score = document.getElementById("p1_h5s").innerHTML;
	var p1_h6_score = document.getElementById("p1_h6s").innerHTML;
	//total all player 1 hole scores
	var sum_p1_total = Number(p1_h1_score) + Number(p1_h2_score) + Number(p1_h3_score) + Number(p1_h4_score) + Number(p1_h5_score) + Number(p1_h6_score);

	//player 2 scores
	var p2_h1_score = document.getElementById("p2_h1s").innerHTML;
	var p2_h2_score = document.getElementById("p2_h2s").innerHTML;
	var p2_h3_score = document.getElementById("p2_h3s").innerHTML;
	var p2_h4_score = document.getElementById("p2_h4s").innerHTML;
	var p2_h5_score = document.getElementById("p2_h5s").innerHTML;
	var p2_h6_score = document.getElementById("p2_h6s").innerHTML;
	//total all player 2 hole scores
	var sum_p2_total = Number(p2_h1_score) + Number(p2_h2_score) + Number(p2_h3_score) + Number(p2_h4_score) + Number(p2_h5_score) + Number(p2_h6_score);

	//player 3 scores
	var p3_h1_score = document.getElementById("p3_h1s").innerHTML;
	var p3_h2_score = document.getElementById("p3_h2s").innerHTML;
	var p3_h3_score = document.getElementById("p3_h3s").innerHTML;
	var p3_h4_score = document.getElementById("p3_h4s").innerHTML;
	var p3_h5_score = document.getElementById("p3_h5s").innerHTML;
	var p3_h6_score = document.getElementById("p3_h6s").innerHTML;
	//total all player 3 hole scores
	var sum_p3_total = Number(p3_h1_score) + Number(p3_h2_score) + Number(p3_h3_score) + Number(p3_h4_score) + Number(p3_h5_score) + Number(p3_h6_score);

	//player 4 scores
	var p4_h1_score = document.getElementById("p4_h1s").innerHTML;
	var p4_h2_score = document.getElementById("p4_h2s").innerHTML;
	var p4_h3_score = document.getElementById("p4_h3s").innerHTML;
	var p4_h4_score = document.getElementById("p4_h4s").innerHTML;
	var p4_h5_score = document.getElementById("p4_h5s").innerHTML;
	var p4_h6_score = document.getElementById("p4_h6s").innerHTML;
	//total all player 4 hole scores
	var sum_p4_total = Number(p4_h1_score) + Number(p4_h2_score) + Number(p4_h3_score) + Number(p4_h4_score) + Number(p4_h5_score) + Number(p4_h6_score);

	// display player scores
	document.getElementById("p1s").innerHTML = sum_p1_total;
	document.getElementById("p2s").innerHTML = sum_p2_total;
	document.getElementById("p3s").innerHTML = sum_p3_total;
	document.getElementById("p4s").innerHTML = sum_p4_total;

	}
