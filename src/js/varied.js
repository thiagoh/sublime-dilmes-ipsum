//draw attention to the share button
function animateShare(){
  var boxShare = document.getElementsByClassName('share');
  boxShare[0].classList.add('share-animate');
  setTimeout(function(){
    boxShare[0].classList.remove('share-animate');
    setTimeout(function(){
      boxShare[0].classList.remove('share-animate');
      animateShare();
    },5000);
  },1000);
}
animateShare();

// copy to clipboard - clipboard.min.js
var btn = document.getElementById('btnCopy')
var clipboard = new Clipboard(btn);
clipboard.on('success', function(e) {
    console.log(e);
    e.trigger.textContent = "DilmesIpsum Copied!";
});
clipboard.on('error', function(e) {
    console.log(e);
});
function cleanText(){
  btn.textContent = "Copy to clipboard";
}
