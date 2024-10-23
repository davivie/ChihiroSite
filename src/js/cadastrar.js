const form = document.querySelector(".formulario");
const campos = document.querySelectorAll(".form-control");
const listaDados = document.querySelector(".lista-dados");

function carregarDados() {
    const dadosDaLista = JSON.parse(localStorage.getItem("dadosFormulario")) || [];

    if (dadosDaLista.length > 0) {
        dadosDaLista.forEach(dado => {
            const li = document.createElement("li");
            li.textContent = dado;
            listaDados.appendChild(li);
        });

        campos.forEach((campo, index) => {
            if (dadosDaLista[index]) {
                campo.value = dadosDaLista[index];
            }
        });
    }
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const listaDeValores = [];
    
    campos.forEach(campo => {
        const valor = campo.value.trim();
        if (valor) {
            listaDeValores.push(valor);
        }
    });

    if (listaDeValores.length === 0) {
        return; 
    }

    const dadosDaLista = JSON.parse(localStorage.getItem("dadosFormulario")) || [];
    dadosDaLista.push(...listaDeValores);
    
    localStorage.setItem("dadosFormulario", JSON.stringify(dadosDaLista));

    listaDeValores.forEach(dado => {
        const li = document.createElement("li");
        li.textContent = dado;
        listaDados.appendChild(li);
    });

    campos.forEach(campo => campo.value = '');
});

window.addEventListener("load", carregarDados);
