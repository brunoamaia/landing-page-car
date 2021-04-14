function methodSend() {
  // Change actions of form if open in 'localhost'
  var url = window.location.href;
  if (url === 'http://127.0.0.1:5500/' || url === 'http://127.0.0.1:5500/index.html') {
    document.forms.formcontact.method = "POST"
    document.forms.formcontact.action="http://localhost/testes/post/"
  } 

}

methodSend()