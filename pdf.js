## Este código constrói uma URL para acessar um relatório PDF a partir do Zoho Creator com base no ID fornecido, e realiza uma requisição GET para recuperar os dados desse PDF; para que o ConstructedUrl funcione, é necessário publicar o relatório de onde se deseja puxar os dados do PDF.

ConstructedUrl = "[link_formulario]" + input.ID + "/"[nome do modelo de registro]/'[link_report_public]";
PropostaData = invokeurl
[
    url :ConstructedUrl
    type :GET
];
info ConstructedUrl;
info PropostaData;
input.Proposta = PropostaData;
