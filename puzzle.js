let rows = 5;
let columns = 5;

let currTile;
let otherTile;
let turns = 0;


window.onload = ()=>{
  for(let r = 0;r < rows; r++){
    for(let c = 0;c < columns; c++){
      const tile = document.createElement('img')
      tile.src = './asset/blank2.jpg' 

      tile.addEventListener('dragstart',dragStart);
      tile.addEventListener('dragover',dragOver);
      tile.addEventListener('dragenter',dragEnter);
      tile.addEventListener('dragleave',dragLeave);
      tile.addEventListener('drop',dragDrop);
      tile.addEventListener('dragend',dragEnd);

      document.getElementById('board').append(tile);
      
    }
  }



  let pieces = [];
for(let p = 1; p <= rows*columns; p++){
  pieces.push(p.toString())
  
}
pieces.reverse();
   for(let i = 0; i < pieces.length; i++){
    let j = Math.floor(Math.random()  * pieces.length)
    
    let tmp = pieces[i];
    pieces[i] = pieces[j]
    pieces[j] = tmp;
   }
for(let p = 0;p < pieces.length; p++){
  const tile = document.createElement('img')
  tile.src = './asset/' + pieces[p] + '.jpg' 

  tile.addEventListener('dragstart',dragStart);
  tile.addEventListener('dragover',dragOver);
  tile.addEventListener('dragenter',dragEnter);
  tile.addEventListener('dragleave',dragLeave);
  tile.addEventListener('drop',dragDrop);
  tile.addEventListener('dragend',dragEnd);

  document.getElementById('pieces').append(tile);
  
}

}


//Drag tiles

function dragStart(){
    currTile = this;
}
function dragOver(e){
  e.preventDefault()
}
function dragEnter(e){
  e.preventDefault()
}
function dragLeave(){
  
}
function dragDrop(){
  otherTile = this;
}
function dragEnd(){
  if(currTile.src.includes('blank')){
    return;
  }
  
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;
  turns  += 1;
  document.getElementById('count').innerHTML = turns;
  const gameEnded = document.getElementById('end');

  if(turns === 25){
    gameEnded.innerHTML = 'Game Ended';
  }
  
}