let resposta = document.getElementById("resposta")



function calcular(){
    let c = Number (document.getElementById("c").value)
    let resultado = ((c * 9/5) + 32)
    resposta.innerHTML = (resultado)
    console.log(resultado)

}


