function cadastrarProduto(codigoProduto, nomeProduto, descricaoProduto, valorProduto){
    var tabela = document.getElementById("tabelaDeProdutos");
    var qtdlinhas =  tabela.rows.length;
    var line = tabela.insertRow(qtdlinhas);

    if(codigoProduto.length > 0 && nomeProduto.length > 0 && descricaoProduto.length > 0 && valorProduto.length > 0){
        tabela.style.display = "table";

        var codigo = line.insertCell(0).innerHTML = codigoProduto;
        var nome = line.insertCell(1).innerHTML = nomeProduto;
        var descricao = line.insertCell(2).innerHTML = descricaoProduto;
        var valor = line.insertCell(3).innerHTML = "R$ " + valorProduto;
    } else {
        alert("Preencha todos o campos.")
    }
}