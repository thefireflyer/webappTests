//alert("testing");


var width = window.screen.availWidth;
var height = window.screen.availHeight;

//alert(width);
//alert(height);

if(width<height){
	//alert("portrait mode");
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: '.'})
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}