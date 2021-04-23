function calcular(tipo, valor) {

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
                var resultado = document.getElementById('resultado').value

                if (resultado.endsWith('-') || resultado.endsWith('+') || resultado.endsWith('*') || resultado.endsWith('/') || resultado.endsWith('.')) {
                    var tamanho = resultado.length

                    if (tamanho > 1 || (valor === '+' || valor === '-')) {
                        var operacao = resultado.charAt(tamanho - 1)
                        resultado = resultado.replace(operacao, valor)
                        document.getElementById('resultado').value = resultado
                    }

                } else if (resultado === '') {

                    if (valor === '+' || valor === '-') {
                        document.getElementById('resultado').value += valor
                    }

                } else {
                    document.getElementById('resultado').value = Number.parseFloat(document.getElementById('resultado').value)
                    document.getElementById('resultado').value += valor
                }

                break

            case '=':
                if (document.getElementById('resultado').value != '') {
                    var valor_campo = eval(document.getElementById('resultado').value)
                
                    document.getElementById('resultado').value = valor_campo
                }

                break
        }
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}

window.onload = function() {
    document.querySelectorAll('button').forEach(function(button) {
        var parametros = button.getAttribute('calcular').split(';')
        var tipo = parametros[0]
        var valor = tipo === 'valor' ? Number.parseInt(parametros[1]) : parametros[1]
        
        button.onclick = function() {
            calcular(tipo, valor)
        }
    })
}