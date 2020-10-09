var cardsArray = [
  {
    name: 'yanai',
    img: "photos/yanai.png",
  },
  {
    name: 'amiel',
    img: "photos/amiel.png",
  },
  {
    name: 'bezalel',
    img: "photos/bezalel.png",
  },
  {
    name: 'eden',
    img: "photos/eden.png",
  },
  {
    name: 'gili',
    img: "photos/gili.png",
  },
  {
    name: 'komornik',
    img: "photos/komornik.png",
  }
];


var gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
      
var firstGuess = '';
var secondGuess = '';
var count = 0;
var delay = 1200;
var correct= false;
var counter = 0;
      var matched = document.querySelectorAll('.match');
      if(matched.length==12){
          alert("WELL DONE!!");
      }

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


grid.addEventListener("click", event => {   //"touchstart" for TOCH SCREEN!!!

  const clicked = event.target;

  if (count == 0){
      firstGuess= clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
      count= 1;
  }else if (count > 0){
      secondGuess= clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
      if (secondGuess == firstGuess){
           correct= true;
      }
      setTimeout(reset => {
      firstGuess = '';
      secondGuess = '';
      count = 0;
      let selected = document.querySelectorAll('.selected');
      selected.forEach(card => {
        card.classList.remove('selected');
          if(correct){
              card.classList.add('match');
          }
      });
      correct= false;
  },1200);
}
    
    
});
