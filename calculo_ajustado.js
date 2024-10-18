// Descrição: Este código calcula e ajusta os totais de produtos com base em valores disponíveis, atribuindo preços, comissões e valores mínimos, médio e máximo, além de calcular o desconto percentual, se aplicável, em função dos dados dos produtos disponíveis.

input.Total_Entrada = 0;
input.Total_Ajustado = 0;
input.Price_Line = 0;
input.Valor_Minimo = 0;
input.Valor_Medio = 0;
input.Valor_Maximo = 0;
input.Comiss_o = 0;
valor_total_disponivel = input.Produtos_de_Assinatura;
if(valor_total_disponivel != null && valor_total_disponivel > 0) {
    for each item in input.Produtos1 {
        if(item.Nome_do_Produto != null) {
            related_record = Produtos_Assinatura_Mensal1[Nome_do_Produto == item.Nome_do_Produto];
            if(related_record != null) {
                item.C_digo_Produto2 = related_record.C_digo_Produto2;
                item.Pre_o_Unit_rio = related_record.Pre_o_Unit_rio;
            }
        }
        preco_unitario = item.Pre_o_Unit_rio;
        quantidade = item.Quantidade;
        if(preco_unitario != null && preco_unitario > 0 && quantidade != null && quantidade > 0) {
            item.Price_Order = preco_unitario * 1.1087 * quantidade;
            montante_calculado = preco_unitario * quantidade;
            if(montante_calculado <= valor_total_disponivel) {
                valor_total_disponivel = valor_total_disponivel - montante_calculado;
            } else {
                quantidade_ajustada = floor(valor_total_disponivel / preco_unitario);
                item.Quantidade = quantidade_ajustada;
                montante_calculado = quantidade_ajustada * preco_unitario;
                valor_total_disponivel = 0;
            }
            input.Total_Entrada = input.Total_Entrada + montante_calculado;
            item.Valor_Minimo = preco_unitario * 0.925 * quantidade;
            item.Valor_Medio = preco_unitario * 1.075 * quantidade;
            item.Valor_Maximo = preco_unitario * 1.15 * quantidade;
        } else {
            item.Price_Order = null;
            item.Valor_Minimo = null;
            item.Valor_Medio = null;
            item.Valor_Maximo = null;
        }
    }
    input.Total_Ajustado = input.Total_Entrada * 1.1087;
    if(input.Total_Entrada > 0) {
        desconto_percentual = (input.Total_Ajustado - input.Total_Entrada) / input.Total_Entrada * 100;
        input.Price_Line = desconto_percentual;
    } else {
        input.Price_Line = 0;
    }
    input.Valor_Minimo = input.Total_Entrada * 0.925;
    input.Valor_Medio = input.Total_Entrada * 1.075;
    input.Valor_Maximo = input.Total_Entrada * 1.15;
    input.Comiss_o = input.Total_Entrada * 0.20;
} else {
    input.Total_Entrada = 0;
    input.Total_Ajustado = 0;
    input.Price_Line = 0;
    input.Valor_Minimo = 0;
    input.Valor_Medio = 0;
    input.Valor_Maximo = 0;
    input.Comiss_o = 0;
}
