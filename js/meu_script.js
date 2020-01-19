function calcular (tipo, valor) {

    if (tipo === 'acao') {

        switch (valor) {
            case 'c':
                // limpar o visor de resultado
                document.getElementById('resultado').value = ''
                break

            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                document.getElementById('resultado').value += valor
                break

            case '=':
                var valor_campo = eval(document.getElementById('resultado').value)
                
                document.getElementById('resultado').value = valor_campo
                break
        }
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}
