function calScore(p_val) {
	
	// get scores of all 4 players and calulate total score and par score

	//player scores
	const p_scores = document.querySelectorAll('.p' + p_val + '_hs');
	let p_total = Number(0);
	let p_par = Number(0);
	for (let i=0; i < p_scores.length; i++) {
		p_total += Number(p_scores[i].innerHTML);
		if (String(p_scores[i].innerHTML).length !=0){
			p_par += Number(p_scores[i].innerHTML) - 3;
		}
	}
	// check for positive and even values
	if (p_par > 0){
		p_par = '+' + p_par;
	}else if (p_par == 0){
		p_par = 'E';
	}
	// player score string
	let p_all_score = `${p_total} (${p_par})`;
	// set player score in table
	document.getElementById('p' + p_val + 's').innerHTML = p_all_score;
	}
