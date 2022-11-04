

const init = function(){
  const injectElement = document.createElement('div');
  injectElement.className = 'test-element';
  injectElement.innerHTML = 'Hello, This is nithish here';
  document.body.appendChild(injectElement);
}
init();