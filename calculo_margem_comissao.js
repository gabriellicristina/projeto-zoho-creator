// Descrição: Este código calcula a margem e a comissão total com base nos valores de bookings, determinando a porcentagem da lista de preços em relação ao total ajustado e calculando a comissão como 10% do valor total dos bookings.

valor_bookings = ifnull(input.Bookings, 0);
valor_bookings1 = ifnull(input.Bookings1, 0);
valor_total_bookings = valor_bookings + valor_bookings1;
if(valor_total_bookings > 0 && input.Total_Ajustado1 != null && input.Total_Ajustado1 > 0) {
    acrescimo = valor_total_bookings / input.Total_Ajustado1;
    porcentagem_price_list = acrescimo * 1;
    input.Margem = porcentagem_price_list;
} else if(valor_bookings > 0 && input.Total_Ajustado != null && input.Total_Ajustado > 0) {
    acrescimo = valor_bookings / input.Total_Ajustado;
    porcentagem_price_list = acrescimo * 1;
    input.Margem = porcentagem_price_list;
} else if(valor_bookings1 > 0 && input.Total_Ajustado1 != null && input.Total_Ajustado1 > 0) {
    acrescimo = valor_bookings1 / input.Total_Ajustado1;
    porcentagem_price_list = acrescimo * 1;
    input.Margem = porcentagem_price_list;
} else {
    input.Margem = (acrescimo * 1).round(2);
}
comissao_bookings = valor_bookings * 0.10;
comissao_bookings1 = valor_bookings1 * 0.10;
comissao_total = comissao_bookings + comissao_bookings1;
input.Comissao = comissao_total.round(2);
