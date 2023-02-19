function somar(){
    var visor_numero1 = document.getElementById('txtn1')
    var visor_numero2 = document.getElementById('txtn2')
    
    var calculo = document.getElementById('visor--calculadora')
    
    var n1 = Number(visor_numero1.value)
    var n2 = Number(visor_numero2.value)
    var s = n1 + n2
    
    calculo.innerHTML = s
}

function subtrair(){
    var visor_numero1 = document.getElementById('txtn1')
    var visor_numero2 = document.getElementById('txtn2')
    
    var calculo = document.getElementById('visor--calculadora')
    
    var n1 = Number(visor_numero1.value)
    var n2 = Number(visor_numero2.value)
    var s = n1 - n2
    
    calculo.innerHTML = s
}

function multiplicar(){
    var visor_numero1 = document.getElementById('txtn1')
    var visor_numero2 = document.getElementById('txtn2')
    
    var calculo = document.getElementById('visor--calculadora')
    
    var n1 = Number(visor_numero1.value)
    var n2 = Number(visor_numero2.value)
    var s = n1 * n2
    
    calculo.innerHTML = s
}

function limpar(){
    document.getElementById('txtn1').value = null
    document.getElementById('txtn2').value = null
    var calc = document.getElementById('visor--calculadora')
    calc.innerHTML = null
}
