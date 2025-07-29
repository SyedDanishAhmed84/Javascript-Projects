let count = 0;

document.getElementById("click-btn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").innerText = count;
});

document.getElementById("decrement-btn").addEventListener("click",function(){
  count=count-1;
  document.getElementById("counter").innerText=count
});

document.getElementById("reset-btn").addEventListener("click",function(){
  count=0
  document.getElementById("counter").innerText=count
});