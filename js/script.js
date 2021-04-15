function methodSend() {
 /*
 Change actions of form if open in 'localhost'

 Se a página estiver no endereço "local", o formulário vai mudar para o 
 método POST e para a rota do arquivo que testa o envio do formulário.
 Em outro endereço, a página utiliza o método GET (os dados são enviados para a URL).
 */
  var url = window.location.href;
  if (url === 'http://127.0.0.1:5500/' || url === 'http://127.0.0.1:5500/index.html') {
    document.forms.formcontact.method = "POST";
    document.forms.formcontact.action="http://localhost/testes/post/";
  }

}

methodSend()
