// Objetivo: Este código calcula o montante, valor total, margem de desconto e comissão com base no preço da lista, quantidade e desconto fornecidos.

if(input.Pre_o_de_Lista != null && input.Quantidade != null) {
    input.Montante = input.Pre_o_de_Lista * input.Quantidade;

    if(input.Desconto != null) {
        input.Valor_Total = input.Montante - input.Desconto;
    } else {
        input.Valor_Total = input.Montante;
    }

    if(input.Montante != null && input.Valor_Total != null && input.Montante != 0) {
        input.Margem = (input.Montante - input.Valor_Total) / input.Montante * 100;
    } else {
        input.Margem = null;
    }

    if(input.Valor_Total != null) {
        input.Comiss_o = input.Valor_Total * 0.10;
    } else {
        input.Comiss_o = null;
    }
} else {
    input.Montante = null;
    input.Valor_Total = null;
    input.Margem = null;
    input.Comiss_o = null;
}
