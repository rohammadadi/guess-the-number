var guessnum, playernum, score, bscore;
guessnum = 0;
playernum = 0;
score = 20;
bscore = 0;

document.querySelector('#number').style.opacity = '0';
document.querySelector('#Guessed').style.opacity = '0';
document.querySelector('.high').style.opacity = '0';
document.querySelector('.low').style.opacity = '0';
document.querySelector('.job').style.opacity = '0';
document.querySelector('#questionmark').style.opacity = '1';

guessnum = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);

document.querySelector('.up').addEventListener('click', function() {
	playernum += 1;
	document.querySelector('#Guessed').style.opacity = '1';
	document.querySelector('#Guessed').textContent = playernum;
});
document.querySelector('.down').addEventListener('click', function() {
	playernum -= 1;
	document.querySelector('#Guessed').style.opacity = '1';
	document.querySelector('#Guessed').textContent = playernum;
});
document.querySelector('.Check').addEventListener('click', function () {
	if (playernum < guessnum) {
		document.querySelector('.low').style.opacity = '1';
		setTimeout(toolow, 1000);
		score -= 1;
		document.querySelector('.scorenum').textContent = score;
	} else if (playernum > guessnum) {
		document.querySelector('.high').style.opacity = '1';
		setTimeout(toohigh, 1000);
		score -= 1;
		document.querySelector('.scorenum').textContent = score;
	} else {
		document.querySelector('#number').style.opacity = '1';
		document.querySelector('#number').textContent = guessnum;
		document.querySelector('.gtn').style.opacity = '0';
		document.querySelector('.job').style.opacity = '1';
		document.querySelector('#questionmark').style.opacity = '0';
		document.querySelector('.scorenum').textContent = score;
	}
});

function toolow() {
	document.querySelector('.low').style.opacity = '0';
}
function toohigh() {
	document.querySelector('.high').style.opacity = '0';
}
document.querySelector('.Again').addEventListener('click', function () {
	theLastNum = guessnum;
	guessnum = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
	lastPlayerNum = playernum;
	playernum = 0;
	

	document.querySelector('#number').style.opacity = '0';
	document.querySelector('#Guessed').style.opacity = '0';
	document.querySelector('.high').style.opacity = '0';
	document.querySelector('.low').style.opacity = '0';
	document.querySelector('.job').style.opacity = '0';

	document.querySelector('.gtn').style.opacity = '1';
	document.querySelector('#questionmark').style.opacity = '1';

	if (score > bscore && lastPlayerNum == theLastNum) {
			bscore = score;
			document.querySelector('.bsnum').textContent = bscore;
	} else {
		
	}
	score = 20;
	document.querySelector('.scorenum').textContent = score;
});