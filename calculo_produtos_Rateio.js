// Descrição: Este código calcula e atualiza o montante de produtos em um subformulário, assegurando que os totais não ultrapassem o valor disponível de 'Produtos_de_Assinatura', ajustando a quantidade proporcionalmente quando necessário, e calcula o Total_Entrada somando os montantes de cada produto.

valor_total_disponivel = input.Produtos_de_Assinatura;
if(valor_total_disponivel != null && valor_total_disponivel > 0) {
    for each item in input.Produtos {
        preco_unitario = item.Pre_o_Unit_rio;
        quantidade = item.Quantidade;
        if(preco_unitario != null && preco_unitario > 0 && quantidade != null && quantidade > 0) {
            montante_calculado = preco_unitario * quantidade;
            if(montante_calculado <= valor_total_disponivel) {
                item.Montante = montante_calculado;
                valor_total_disponivel = valor_total_disponivel - montante_calculado;
            } else {
                quantidade_ajustada = floor(valor_total_disponivel / preco_unitario);
                item.Quantidade = quantidade_ajustada;
                item.Montante = quantidade_ajustada * preco_unitario;
                valor_total_disponivel = 0;
            }
        } else {
            item.Montante = 0;
        }
    }
} else {
    for each item in input.Produtos {
        item.Montante = 0;
    }
}
if(row.Montante != null && row.Montante > 0) {
    row.Total = row.Quantidade * row.Pre_o_Unit_rio;
} else {
    row.Total = 0;
}
input.Total_Entrada = 0;
for each eachRow in input.Produtos {
    if(eachRow.Montante != null && eachRow.Montante > 0) {
        input.Total_Entrada = input.Total_Entrada + eachRow.Montante;
    }
}
