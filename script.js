const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint");
const giveup = document.querySelector(".giveup");
const input = document.getElementById("text");
const submit = document.querySelector(".submit");
let correctScore = document.querySelector(".correctScore");
let wrongScore = document.querySelector(".wrongScore");
let timeText = document.querySelector(".time p");

let correctWord,time;
const timer = maxTime =>{
	clearInterval(time);
time = setInterval(() =>{
	if (maxTime > 0) {
		maxTime --;
	return timeText.innerText =maxTime + "s";
	}
	if (maxTime == 0) {
				Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'Time up dear!',
  showConfirmButton: false,
  timer: 1000
})
			j=j+1;
	wrongScore.innerText=j;

	}
clearInterval(time);
initGame();

}, 1000);
}

const initGame = () =>{
	timer(15);
	let randomObj = scrambleWords[Math.floor(Math.random()*scrambleWords.length)];

	let wordArray = randomObj.word.split("");

	for (var i = wordArray.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random()* (i+1));
		[wordArray[i], wordArray[j]] = 	[wordArray[j], wordArray[i]]
	}
	wordText.innerText= wordArray.join("");
	hintText.innerText = randomObj.hint;
	correctWord = randomObj.word.toLowerCase();
	console.log(wordArray, randomObj.word)
}

giveup.addEventListener("click",()=>{
		Swal.fire({
  position: 'center',
  icon: 'info',
  title: 'Try next one!',
  showConfirmButton: false,
  timer: 1000
})
	j=j+1;
	wrongScore.innerText=j;

initGame();
});
let i = 0; let j = 0;
submit.addEventListener("click",()=>{
let userWord = input.value.toLocaleLowerCase();
if (userWord==correctWord) {
	Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'You freaking genius!',
  showConfirmButton: false,
  timer: 1000
})
	i=i+1;
	correctScore.innerText=i;
}
else{
		Swal.fire({
  position: 'center',
  icon: 'error',
  title: 'Wrong Answer',
  showConfirmButton: false,
  timer: 1000
})
	j=j+1;
	wrongScore.innerText=j;
}
	initGame();

});








initGame();