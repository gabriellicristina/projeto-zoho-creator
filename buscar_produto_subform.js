## busca os dados do produto selecionado em um SubFormulário, atualiza o formulário principal com as informações correspondentes, calcula montantes e valores mínimos, médio e máximo, aplica ajustes e comissões, e acumula o total de instalação, garantindo que todos os cálculos sejam feitos com base nas quantidades e preços fornecidos.

if(row.Nome_Produto != null)
{
	related_record = Produtos_Aluguel_Mensal[Nome_Produto == row.Nome_Produto];
	if(related_record != null)
	{
		row.C_digo_Produto=related_record.C_digo_Produto;
		row.Pre_o=related_record.Pre_o;
		row.Instala_o=related_record.Instala_o;
		quantidade = ifnull(row.Quantidade,1);
		row.Price_Order=row.Pre_o * 1.1087 * quantidade;
		montante_calculado = row.Pre_o * quantidade;
		input.Total_Entrada1 = ifnull(input.Total_Entrada1,0) + montante_calculado;
		row.Valor_Minimo=row.Pre_o * 0.925 * quantidade;
		row.Valor_Medio=row.Pre_o * 1.075 * quantidade;
		row.Valor_Maximo=row.Pre_o * 1.15 * quantidade;
	}
}
input.Total_Ajustado1 = input.Total_Entrada1 * 1.1087;
if(input.Total_Entrada1 > 0)
{
	desconto_percentual = (input.Total_Ajustado1 - input.Total_Entrada1) / input.Total_Entrada1 * 100;
	input.Price_Line1 = desconto_percentual;
}
else
{
	input.Price_Line1 = 0;
}
input.Valor_Minimo1 = input.Total_Entrada1 * 0.925;
input.Valor_Medio1 = input.Total_Entrada1 * 1.075;
input.Valor_Maximo1 = input.Total_Entrada1 * 1.15;
input.Comiss_o1 = input.Total_Entrada1 * 0.145;
input.Total_Instala_o = 0;
for each  item in input.Produtos_Aluguel_Mensal
{
	if(item.Instala_o != null)
	{
		input.Total_Instala_o = input.Total_Instala_o + item.Instala_o;
	}
}
input.Valor_Minimo2 = input.Total_Instala_o * 0.925;
input.Valor_Medio2 = input.Total_Instala_o * 1.075;
input.Valor_Maximo2 = input.Total_Instala_o * 1.15;
