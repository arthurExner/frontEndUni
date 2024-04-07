class ValidaForm {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.eventos(); //ja é executado assi que o obj é instanciado
    }

    confirmacao() {
        const nome = document.getElementById('nome');
        const sobrenome = document.getElementById('sobrenome');
        const cpf = document.getElementById('cpf');        

        if (!(nome.value || sobrenome.value || cpf.value)) { //lembrar que null é falsy            
            return false;
        }
        return true;
    }

    eventos() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); //pra evitar que o form seja enviado
        const validField = this.checkFields();
        const confirmacao = this.confirmacao();      

        if (validField & confirmacao) {
            //pra ir removendo checks antigos que ja estavam na tela:
        for (let check of this.form.querySelectorAll(".confirma")) {
            check.remove();
        }
            const check_button =  document.getElementById("check_data")                      
            this.criaConfirma(check_button, 'Dados Confirmados!');
            alert('Dados compatíveis.');
        } else {
            alert('Corrija pendencias.');
        }

    }

    checkFields() {
        let valid = true;
        //pra ir removendo erros antigos que ja estavam na tela:
        for (let error of this.form.querySelectorAll(".error")) {
            error.remove();
        }
        //validando trechos em branco:
        for (let field of document.querySelectorAll('.validar')) {
            if (!field.value) {
                const label = field.previousElementSibling.innerText;
                this.criaErro(field, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
            //validando cpf, usando outra classe já criada:
            if (field.classList.contains('cpf')) {
                if (!this.validaCPF(field)) {
                    this.criaErro(field, `CPF inválido.`);
                    valid = false;
                }
            }         

        }
        return valid;
    }

    validaCPF(field) {
        const cpf = new ValidaCPF(field.value);
        const valid = cpf.valida();
        return valid;
    }

    criaErro(field, msg) {
        const div = document.createElement('div'); //criando uma div para jogar a mensagem de erro.
        div.innerText = msg;
        div.classList.add("error");
        field.insertAdjacentElement('afterend', div); //jogando a div logo após o campo
    }

    criaConfirma(field, msg) {
        const div = document.createElement('div'); //criando uma div para jogar a mensagem de confirma.
        div.innerText = msg;
        div.classList.add("confirma");
        field.insertAdjacentElement('afterend', div); //jogando a div logo após o campo
    }
}

const v = new ValidaForm();