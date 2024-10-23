const usuario = document.querySelector('#usuario');
const senha = document.querySelector('#senha');

function logar() {
    const dados = JSON.parse(localStorage.getItem("dadosFormulario")) || [];
    console.log("Dados para login:", dados);  
    
    // const usuarioValido = dados.find(dado => dado.usuario === usuario.value && dado.senha === senha.value);

    if (usuario.value =="admin" && usuario.value === "admin") {
        window.location.href = 'universo.html';
    } else {
        alert("Usuário ou senha inválidos");
    }
}

document.querySelector('#login-button').addEventListener('click', logar);

