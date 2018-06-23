var currentPos = 0;
var randPos = getRandomArbitary(10,630);
var randSpeed = getRandomArbitary(1,5);
var state = true;
var global;
var counter=0;
function onHit(event) {
    if(randPos <= event.clientX && randPos+20 >= event.clientX && currentPos <= event.clientY && currentPos + 40 >= event.clientY) {
        currentPos = 500;
        changeParam();
        counter++;
        var score = document.getElementById('score');
        score.textContent = +counter;
    }
}
function getStart () {
    if(currentPos>0){
        return
    }else{
        animate();
        state = true;
    }
}
function getStop(){
    state = false;
    counter = 0;
    score.textContent = counter;
    reset();
}
function getRandomArbitary(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
function reset() {
    currentPos = 0;
}
function changeParam() {
    randPos = getRandomArbitary(10,630);
    randSpeed = getRandomArbitary(1,5);
}
function getColor() {
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    return "rgba("+r+","+g+","+b+",1)";
}
function animate() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');  
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
  if(state){
      ctx.fillRect(randPos, currentPos, 20, 20);
      currentPos += randSpeed;
      if(currentPos >= canvas.clientHeight) {
          reset();
          ctx.fillStyle = getColor()
          changeParam();
      }
  }else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(global);
  }
  global = requestAnimationFrame(animate)
}

