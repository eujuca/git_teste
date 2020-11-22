// Atividade 1 - Crie uma função verificaFrete que receberá um valor por parâmetro. Se esse valor for igual ou superior a 100, a função deve retornar 0. Se o valor for menor do que 100, deverá retornar 10% do valor  informado. 
function verificaFrete(valor) {
    if (valor >= 100) {
        return "Valor = 0"
    } else {
        return "Valor = "+ valor*0.1
    }
}
// Atividade 2 - Um laptop, se forem compradas menos de cinco unidades, custa R$ 1.200,00. Se forem adquiridas cinco  ou mais unidades, o produto custará R$ 1.050,00. Escreva uma função que receba por parâmetro o número de laptops comprados, calculando e exibindo, em uma mensagem de alerta, o custo total da compra. 
function qtdLaptop (qtdCompadro) {
    if (qtdCompadro < 5) {
        alert('Cada um custou R$ 1.200,00 sendo o valor total de: '+ qtdCompadro*1200.00)
    } else {
        alert('Cada um custou R$ 1.050,00 sendo o valor total de: '+ qtdCompadro*1050.00)
    }
}