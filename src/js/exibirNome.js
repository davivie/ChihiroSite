let nome = document.getElementById('usuario').value;


document.getElementById('resultado').textContent = nome;


localStorage.setItem('nomeUsuario', nome);