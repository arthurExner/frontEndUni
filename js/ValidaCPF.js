class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, "cpfLimpo",{
            writable: true,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D/g,"") 
        })
    }

    cpfValidado(){
        let cpfValidacao = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.digitosFinais(cpfValidacao);
        cpfValidacao = cpfValidacao.concat(digito1);
        const digito2 = ValidaCPF.digitosFinais(cpfValidacao);
        cpfValidacao = cpfValidacao.concat(digito2);
        return cpfValidacao;
    }

    static digitosFinais(cpfValidacao){
        let multiplicador = cpfValidacao.length + 1;
        let soma = 0;
        for(let s of cpfValidacao){
            soma += Number(s) * multiplicador--;
        }
        const digito = 11 - (soma%11) > 9 ? 0:11 - (soma%11);
        return digito;
    }

    valida(){
        if(this.cpfLimpo.length < 11) return false;
        if(this.cpfLimpo[0].repeat(11) === this.cpfLimpo) return false;
        return this.cpfValidado() === this.cpfLimpo;    
    }
}

