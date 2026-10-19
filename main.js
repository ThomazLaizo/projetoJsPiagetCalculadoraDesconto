const f = document.getElementById('formulario')

f.addEventListener('submit', function(e){
    e.preventDefault()

    var valor_compra = Number(document.getElementById('valor').value)
    var campo_valor = document.getElementById('compra')
    var campo_resultado = document.getElementById('final')
    campo_valor.textContent = 'R$' + valor_compra.toFixed(2).replace('.',',')
    campo_desconto = document.getElementById('desconto')
    
    if (valor_compra >= 100 && valor_compra < 500){
        var valor_desconto = 0.05
    }
    else if(valor_compra >= 500){
        var valor_desconto = 0.1
    }
    else{
        var valor_desconto = 0
    }

    campo_desconto.textContent = (valor_desconto * 100) + ',00%'
    var valor_aplicado = (valor_compra * valor_desconto)
    campo_resultado.textContent = 'R$' + (valor_compra - valor_aplicado).toFixed(2).replace('.',',')
})
