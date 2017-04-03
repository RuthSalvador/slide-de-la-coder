var post = document.getElementById('post');
var main = document.getElementById('main');
var botonEnviar  = document.getElementById('b-enviar');

botonEnviar.addEventListener('click', function(e){
  e.preventDefault();
  if (post.value.length > 0){
    var comment = document.createElement('p');
    main.appendChild(comment);
    var texto = document.createTextNode('*POST: '+ post.value)
    comment.appendChild(texto);
  } else {
    alert ("Por favor, ingrese un post")
  }
})
