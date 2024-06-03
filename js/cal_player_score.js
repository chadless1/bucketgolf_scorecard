function calScore(button) {

	var p1_h1_score = document.getElementById("p1_h1s").innerHTML;
	var p1_h2_score = document.getElementById("p1_h2s").innerHTML;
	var p1_h3_score = document.getElementById("p1_h3s").innerHTML;
	var p1_h4_score = document.getElementById("p1_h4s").innerHTML;
	var p1_h5_score = document.getElementById("p1_h5s").innerHTML;
	var p1_h6_score = document.getElementById("p1_h6s").innerHTML;
	var sum_p1 = (Number(p1_h1_score) + Number(p1_h2_score) + Number(p1_h3_score) + Number(p1_h4_score) + Number(p1_h5_score) + Number(p1_h6_score) ) - 18;
	var sum_p1_total = Number(p1_h1_score) + Number(p1_h2_score) + Number(p1_h3_score) + Number(p1_h4_score) + Number(p1_h5_score) + Number(p1_h6_score);

	if (sum_p1 == 0){

	sum_p1 = "PAR";
	}

    var p1_score = `${sum_p1_total} | ${sum_p1}`;
    
	document.getElementById("p1s").innerHTML = p1_score;

	var p2_h1_score = document.getElementById("p2_h1s").innerHTML;
	var p2_h2_score = document.getElementById("p2_h2s").innerHTML;
	var p2_h3_score = document.getElementById("p2_h3s").innerHTML;
	var p2_h4_score = document.getElementById("p2_h4s").innerHTML;
	var p2_h5_score = document.getElementById("p2_h5s").innerHTML;
	var p2_h6_score = document.getElementById("p2_h6s").innerHTML;
	var sum_p2 = (Number(p2_h1_score) + Number(p2_h2_score) + Number(p2_h3_score) + Number(p2_h4_score) + Number(p2_h5_score) + Number(p2_h6_score) ) - 18;
	var sum_p2_total = Number(p2_h1_score) + Number(p2_h2_score) + Number(p2_h3_score) + Number(p2_h4_score) + Number(p2_h5_score) + Number(p2_h6_score);

	if (sum_p2 == 0){

	sum_p2 = "PAR";
	}

    var p2_score = `${sum_p2_total} | ${sum_p2}`;
    
	document.getElementById("p2s").innerHTML = p2_score;

	var p3_h1_score = document.getElementById("p3_h1s").innerHTML;
	var p3_h2_score = document.getElementById("p3_h2s").innerHTML;
	var p3_h3_score = document.getElementById("p3_h3s").innerHTML;
	var p3_h4_score = document.getElementById("p3_h4s").innerHTML;
	var p3_h5_score = document.getElementById("p3_h5s").innerHTML;
	var p3_h6_score = document.getElementById("p3_h6s").innerHTML;
	var sum_p3 = (Number(p3_h1_score) + Number(p3_h2_score) + Number(p3_h3_score) + Number(p3_h4_score) + Number(p3_h5_score) + Number(p3_h6_score) ) - 18;
	var sum_p3_total = Number(p3_h1_score) + Number(p3_h2_score) + Number(p3_h3_score) + Number(p3_h4_score) + Number(p3_h5_score) + Number(p3_h6_score);

	if (sum_p3 == 0){

	sum_p3 = "PAR";
	}

    var p3_score = `${sum_p3_total} | ${sum_p3}`;

	document.getElementById("p3s").innerHTML = p3_score;

	var p4_h1_score = document.getElementById("p4_h1s").innerHTML;
	var p4_h2_score = document.getElementById("p4_h2s").innerHTML;
	var p4_h3_score = document.getElementById("p4_h3s").innerHTML;
	var p4_h4_score = document.getElementById("p4_h4s").innerHTML;
	var p4_h5_score = document.getElementById("p4_h5s").innerHTML;
	var p4_h6_score = document.getElementById("p4_h6s").innerHTML;
	var sum_p4 = (Number(p4_h1_score) + Number(p4_h2_score) + Number(p4_h3_score) + Number(p4_h4_score) + Number(p4_h5_score) + Number(p4_h6_score) ) - 18;
	var sum_p4_total = Number(p4_h1_score) + Number(p4_h2_score) + Number(p4_h3_score) + Number(p4_h4_score) + Number(p4_h5_score) + Number(p4_h6_score);

	if (sum_p4 == 0){

	sum_p4 = "PAR";
	}

    var p4_score = `${sum_p4_total} | ${sum_p4}`;

	document.getElementById("p4s").innerHTML = p4_score;

	}
