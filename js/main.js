var arr = [];
var texts = document.querySelectorAll('input[type="text"]'); 
var form = document.querySelector('.formulario'); 

function clicarLi(event){   
    
    const textoli = event.target.textContent;

    if(alreadySelected(textoli, arr)) return

    arr.push(textoli);    

    const novaMatricula = document.createElement('li');
    const botaoRemover = document.createElement('button');
    const novoRegistro = document.getElementById('registroList');

    novaMatricula.className = 'novaMatricula';
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('btn');
    botaoRemover.classList.add('btn-primary');
    botaoRemover.classList.add('btn-sm');

    novaMatricula.innerHTML = `<span>${textoli}</span>`;

    novaMatricula.appendChild(botaoRemover);

    novoRegistro.appendChild(novaMatricula);

    botaoRemover.addEventListener('click', function(){
        novoRegistro.removeChild(novaMatricula);
        novoRegistro.removeChild(botaoRemover);
        novoRegistro.removeChild(novoRegistro);
    });
}

function alreadySelected(texto, arr) {
    
    if ( arr.includes(texto) ) {
        alert("Matéria já selecionada")
        return true;
    }

    return false;
}

function checkForm() {
    texts.forEach(text_input => {
        text_input.addEventListener('focus', () => {
            for (let check of form.querySelectorAll(".confirma")) {
                check.remove();
            }
        })
          
    });
}
checkForm();

function confirmacao(){
    const registro = document.getElementById('registroList');
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const cpf = document.getElementById('cpf');  
    
    registro.children.length;

    const confirma_dados = document.getElementsByClassName('confirma')    

    if(registro.children.length < 5){
        alert("Voce precisa escolher 5 matérias");
    } else if(registro.children.length > 5) {
        alert(`Limite de matérias atingido. Remova ${registro.children.length -5} matérias `);
    } else if(nome.value == '' || sobrenome.value == '' || cpf.value == '' ) {
        alert("Faltam dados!");        
    } else if (confirma_dados.length == 0 ) {
        alert("Confirme os dados!")        
    } else {                
        alert("Matricula concluída")
        for (let check of form.querySelectorAll(".confirma")) {
            check.remove();
        }        
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );