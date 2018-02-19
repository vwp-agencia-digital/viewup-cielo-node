"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors = [
    {
        "code": 0,
        "originalMessage": "Internal error",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 100,
        "originalMessage": "RequestId is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 101,
        "originalMessage": "MerchantId is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 102,
        "originalMessage": "Payment Type is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 103,
        "originalMessage": "Payment Type can only contain letters",
        "message": "Caracteres especiais não permitidos"
    },
    {
        "code": 104,
        "originalMessage": "Customer Identity is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 105,
        "originalMessage": "Customer Name is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 106,
        "originalMessage": "Transaction ID is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 107,
        "originalMessage": "OrderId is invalid or does not exists",
        "message": "Campo enviado excede o tamanho ou contem caracteres especiais"
    },
    {
        "code": 108,
        "originalMessage": "Amount must be greater or equal to zero",
        "message": "Valor da transação deve ser maior que “0”"
    },
    {
        "code": 109,
        "originalMessage": "Payment Currency is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 110,
        "originalMessage": "Invalid Payment Currency",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 111,
        "originalMessage": "Payment Country is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 112,
        "originalMessage": "Invalid Payment Country",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 113,
        "originalMessage": "Invalid Payment Code",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 114,
        "originalMessage": "The provided MerchantId is not in correct format",
        "message": "O MerchantId enviado não é um GUID"
    },
    {
        "code": 115,
        "originalMessage": "The provided MerchantId was not found",
        "message": "O MerchantID não existe ou pertence a outro ambiente (EX: Sandbox)"
    },
    {
        "code": 116,
        "originalMessage": "The provided MerchantId is blocked",
        "message": "Loja bloqueada, entre em contato com o suporte Cielo"
    },
    {
        "code": 117,
        "originalMessage": "Credit Card Holder is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 118,
        "originalMessage": "Credit Card Number is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 119,
        "originalMessage": "At least one Payment is required",
        "message": "Nó “Payment” não enviado"
    },
    {
        "code": 120,
        "originalMessage": "Request IP not allowed. Check your IP White List",
        "message": "IP bloqueado por questões de segurança"
    },
    {
        "code": 121,
        "originalMessage": "Customer is required",
        "message": "Nó “Customer” não enviado"
    },
    {
        "code": 122,
        "originalMessage": "MerchantOrderId is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 123,
        "originalMessage": "Installments must be greater or equal to one",
        "message": "Numero de parcelas deve ser superior a 1"
    },
    {
        "code": 124,
        "originalMessage": "Credit Card is Required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 125,
        "originalMessage": "Credit Card Expiration Date is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 126,
        "originalMessage": "Credit Card Expiration Date is invalid",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 127,
        "originalMessage": "You must provide CreditCard Number",
        "message": "Numero do cartão de crédito é obrigatório"
    },
    {
        "code": 128,
        "originalMessage": "Card Number length exceeded",
        "message": "Numero do cartão superiro a 16 digitos"
    },
    {
        "code": 129,
        "originalMessage": "Affiliation not found",
        "message": "Meio de pagamento não vinculado a loja ou Provider invalido"
    },
    {
        "code": 130,
        "originalMessage": "Could not get Credit Card",
        "message": "—"
    },
    {
        "code": 131,
        "originalMessage": "MerchantKey is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 132,
        "originalMessage": "MerchantKey is invalid",
        "message": "O Merchantkey enviado não é um válido"
    },
    {
        "code": 133,
        "originalMessage": "Provider is not supported for this Payment Type",
        "message": "Provider enviado não existe"
    },
    {
        "code": 134,
        "originalMessage": "FingerPrint length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 135,
        "originalMessage": "MerchantDefinedFieldValue length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 136,
        "originalMessage": "ItemDataName length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 137,
        "originalMessage": "ItemDataSKU length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 138,
        "originalMessage": "PassengerDataName length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 139,
        "originalMessage": "PassengerDataStatus length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 140,
        "originalMessage": "PassengerDataEmail length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 141,
        "originalMessage": "PassengerDataPhone length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 142,
        "originalMessage": "TravelDataRoute length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 143,
        "originalMessage": "TravelDataJourneyType length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 144,
        "originalMessage": "TravelLegDataDestination length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 145,
        "originalMessage": "TravelLegDataOrigin length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 146,
        "originalMessage": "SecurityCode length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 147,
        "originalMessage": "Address Street length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 148,
        "originalMessage": "Address Number length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 149,
        "originalMessage": "Address Complement length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 150,
        "originalMessage": "Address ZipCode length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 151,
        "originalMessage": "Address City length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 152,
        "originalMessage": "Address State length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 153,
        "originalMessage": "Address Country length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 154,
        "originalMessage": "Address District length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 155,
        "originalMessage": "Customer Name length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 156,
        "originalMessage": "Customer Identity length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 157,
        "originalMessage": "Customer IdentityType length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 158,
        "originalMessage": "Customer Email length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 159,
        "originalMessage": "ExtraData Name length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 160,
        "originalMessage": "ExtraData Value length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 161,
        "originalMessage": "Boleto Instructions length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 162,
        "originalMessage": "Boleto Demostrative length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 163,
        "originalMessage": "Return Url is required",
        "message": "URL de retorno não é valida - Não é aceito paginação ou extenções (EX .PHP) na URL de retorno"
    },
    {
        "code": 166,
        "originalMessage": "AuthorizeNow is required",
        "message": "—"
    },
    {
        "code": 167,
        "originalMessage": "Antifraud not configured",
        "message": "Antifraude não vinculado ao cadastro do lojista"
    },
    {
        "code": 168,
        "originalMessage": "Recurrent Payment not found",
        "message": "Recorrencia não encontrada"
    },
    {
        "code": 169,
        "originalMessage": "Recurrent Payment is not active",
        "message": "Recorrencia não está ativa. Execução paralizada"
    },
    {
        "code": 170,
        "originalMessage": "Cartão Protegido not configured",
        "message": "Cartão protegido não vinculado ao cadastro do lojista"
    },
    {
        "code": 171,
        "originalMessage": "Affiliation data not sent",
        "message": "Falha no processamento do pedido - Entre em contato com o suporte Cielo"
    },
    {
        "code": 172,
        "originalMessage": "Credential Code is required",
        "message": "Falha na validação das credenciadas enviadas"
    },
    {
        "code": 173,
        "originalMessage": "Payment method is not enabled",
        "message": "Meio de pagamento não vinculado ao cadastro do lojista"
    },
    {
        "code": 174,
        "originalMessage": "Card Number is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 175,
        "originalMessage": "EAN is required",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 176,
        "originalMessage": "Payment Currency is not supported",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 177,
        "originalMessage": "Card Number is invalid",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 178,
        "originalMessage": "EAN is invalid",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 179,
        "originalMessage": "The max number of installments allowed for recurring payment is 1",
        "message": "Campo enviado está vazio ou invalido"
    },
    {
        "code": 180,
        "originalMessage": "The provided Card PaymentToken was not found",
        "message": "Token do Cartão protegido não encontrado"
    },
    {
        "code": 181,
        "originalMessage": "The MerchantIdJustClick is not configured",
        "message": "Token do Cartão protegido bloqueado"
    },
    {
        "code": 182,
        "originalMessage": "Brand is required",
        "message": "Bandeira do cartão não enviado"
    },
    {
        "code": 183,
        "originalMessage": "Invalid customer bithdate",
        "message": "Data de nascimento invalida ou futura"
    },
    {
        "code": 184,
        "originalMessage": "Request could not be empty",
        "message": "Falha no formado ta requisição. Verifique o código enviado"
    },
    {
        "code": 185,
        "originalMessage": "Brand is not supported by selected provider",
        "message": "Bandeira não suportada pela API Cielo"
    },
    {
        "code": 186,
        "originalMessage": "The selected provider does not support the options provided (Capture, Authenticate, Recurrent or Installments)",
        "message": "Meio de pagamento não suporta o comando enviado"
    },
    {
        "code": 187,
        "originalMessage": "ExtraData Collection contains one or more duplicated names",
        "message": "—"
    },
    {
        "code": 188,
        "originalMessage": "Avs with CPF invalid",
        "message": "—"
    },
    {
        "code": 189,
        "originalMessage": "Avs with length of street exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 190,
        "originalMessage": "Avs with length of number exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 190,
        "originalMessage": "Avs with length of complement exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 191,
        "originalMessage": "Avs with length of district exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 192,
        "originalMessage": "Avs with zip code invalid",
        "message": "CEP enviado é invalido"
    },
    {
        "code": 193,
        "originalMessage": "Split Amount must be greater than zero",
        "message": "Valor para realização do SPLIT deve ser superior a 0"
    },
    {
        "code": 194,
        "originalMessage": "Split Establishment is Required",
        "message": "SPLIT não habilitado para o cadastro da loja"
    },
    {
        "code": 195,
        "originalMessage": "The PlataformId is required",
        "message": "Validados de plataformas não enviado"
    },
    {
        "code": 196,
        "originalMessage": "DeliveryAddress is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 197,
        "originalMessage": "Street is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 198,
        "originalMessage": "Number is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 199,
        "originalMessage": "ZipCode is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 200,
        "originalMessage": "City is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 201,
        "originalMessage": "State is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 202,
        "originalMessage": "District is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 203,
        "originalMessage": "Cart item Name is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 204,
        "originalMessage": "Cart item Quantity is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 205,
        "originalMessage": "Cart item type is required",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 206,
        "originalMessage": "Cart item name length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 207,
        "originalMessage": "Cart item description length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 208,
        "originalMessage": "Cart item sku length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 209,
        "originalMessage": "Shipping addressee sku length exceeded",
        "message": "Dado enviado excede o tamanho do campo"
    },
    {
        "code": 210,
        "originalMessage": "Shipping data cannot be null",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 211,
        "originalMessage": "WalletKey is invalid",
        "message": "Dados da Visa Checkout invalidos"
    },
    {
        "code": 212,
        "originalMessage": "Merchant Wallet Configuration not found",
        "message": "Dado de Wallet enviado não é valido"
    },
    {
        "code": 213,
        "originalMessage": "Credit Card Number is invalid",
        "message": "Cartão de crédito enviado é invalido"
    },
    {
        "code": 214,
        "originalMessage": "Credit Card Holder Must Have Only Letters",
        "message": "Portador do cartão não deve conter caracteres especiais"
    },
    {
        "code": 215,
        "originalMessage": "Agency is required in Boleto Credential",
        "message": "Campo obrigatório não enviado"
    },
    {
        "code": 216,
        "originalMessage": "Customer IP address is invalid",
        "message": "IP bloqueado por questões de segurança"
    },
    {
        "code": 300,
        "originalMessage": "MerchantId was not found",
        "message": "—"
    },
    {
        "code": 301,
        "originalMessage": "Request IP is not allowed",
        "message": "—"
    },
    {
        "code": 302,
        "originalMessage": "Sent MerchantOrderId is duplicated",
        "message": "—"
    },
    {
        "code": 303,
        "originalMessage": "Sent OrderId does not exist",
        "message": "—"
    },
    {
        "code": 304,
        "originalMessage": "Customer Identity is required",
        "message": "—"
    },
    {
        "code": 306,
        "originalMessage": "Merchant is blocked",
        "message": "—"
    },
    {
        "code": 307,
        "originalMessage": "Transaction not found",
        "message": "Transação não encontrada ou não existente no ambiente."
    },
    {
        "code": 308,
        "originalMessage": "Transaction not available to capture",
        "message": "Transação não pode ser capturada - Entre em contato com o suporte Cielo"
    },
    {
        "code": 309,
        "originalMessage": "Transaction not available to void",
        "message": "Transação não pode ser Cancelada - Entre em contato com o suporte Cielo"
    },
    {
        "code": 310,
        "originalMessage": "Payment method doest not support this operation",
        "message": "Comando enviado não suportado pelo meio de pagamento"
    },
    {
        "code": 311,
        "originalMessage": "Refund is not enabled for this merchant",
        "message": "Cancelamento após 24 horas não liberado para o lojista"
    },
    {
        "code": 312,
        "originalMessage": "Transaction not available to refund",
        "message": "Transação não permite cancelamento após 24 horas"
    },
    {
        "code": 313,
        "originalMessage": "Recurrent Payment not found",
        "message": "Transação recorrente não encontrada ou não disponivel no ambiente"
    },
    {
        "code": 314,
        "originalMessage": "Invalid Integration",
        "message": "—"
    },
    {
        "code": 315,
        "originalMessage": "Cannot change NextRecurrency with pending payment",
        "message": "—"
    },
    {
        "code": 316,
        "originalMessage": "Cannot set NextRecurrency to past date",
        "message": "Não é permitido alterada dada da recorrencia para uma data passada"
    },
    {
        "code": 317,
        "originalMessage": "Invalid Recurrency Day",
        "message": "—"
    },
    {
        "code": 318,
        "originalMessage": "No transaction found",
        "message": "—"
    },
    {
        "code": 319,
        "originalMessage": "Smart recurrency is not enabled",
        "message": "Recorrencia não vinculada ao cadastro do lojista"
    },
    {
        "code": 320,
        "originalMessage": "Can not Update Affiliation Because this Recurrency not Affiliation saved",
        "message": "—"
    },
    {
        "code": 321,
        "originalMessage": "Can not set EndDate to before next recurrency.",
        "message": "—"
    },
    {
        "code": 322,
        "originalMessage": "Zero Dollar Auth is not enabled",
        "message": "Zero Dollar não vinculado ao cadastro do lojista"
    },
    {
        "code": 323,
        "originalMessage": "Bin Query is not enabled",
        "message": "Consulta de Bins não vinculada ao cadastro do lojista"
    }
];
const updates = [
    {
        "code": "00",
        "originalMessage": "Transação autorizada com sucesso.",
        "message": "Transação autorizada com sucesso."
    },
    {
        "code": "000",
        "originalMessage": "Transação autorizada com sucesso.",
        "message": "Transação autorizada com sucesso."
    },
    {
        "code": "01",
        "originalMessage": "Transação não autorizada. Transação referida.",
        "message": "Transação não autorizada. Referida (suspeita de fraude) pelo banco emissor."
    },
    {
        "code": "02",
        "originalMessage": "Transação não autorizada. Transação referida.",
        "message": "Transação não autorizada. Referida (suspeita de fraude) pelo banco emissor."
    },
    {
        "code": "03",
        "originalMessage": "Transação não permitida. Erro no cadastramento do código do estabelecimento no arquivo de configuração do TEF",
        "message": "Transação não permitida. Estabelecimento inválido. Entre com contato com a Cielo."
    },
    {
        "code": "04",
        "originalMessage": "Transação não autorizada. Cartão bloqueado pelo banco emissor.",
        "message": "Transação não autorizada. Cartão bloqueado pelo banco emissor."
    },
    {
        "code": "05",
        "originalMessage": "Transação não autorizada. Cartão inadimplente (Do not honor).",
        "message": "Transação não autorizada. Não foi possível processar a transação. Questão relacionada a segurança, inadimplencia ou limite do portador."
    },
    {
        "code": "06",
        "originalMessage": "Transação não autorizada. Cartão cancelado.",
        "message": "Transação não autorizada. Não foi possível processar a transação. Cartão cancelado permanentemente pelo banco emissor."
    },
    {
        "code": "07",
        "originalMessage": "Transação negada. Reter cartão condição especial",
        "message": "Transação não autorizada por regras do banco emissor."
    },
    {
        "code": "08",
        "originalMessage": "Transação não autorizada. Código de segurança inválido.",
        "message": "Transação não autorizada. Código de segurança inválido. Oriente o portador a corrigir os dados e tentar novamente."
    },
    {
        "code": "11",
        "originalMessage": "Transação autorizada com sucesso para cartão emitido no exterior",
        "message": "Transação autorizada com sucesso."
    },
    {
        "code": "12",
        "originalMessage": "Transação inválida, erro no cartão.",
        "message": "Não foi possível processar a transação. Solicite ao portador que verifique os dados do cartão e tente novamente."
    },
    {
        "code": "13",
        "originalMessage": "Transação não permitida. Valor da transação Inválido.",
        "message": "Transação não permitida. Valor inválido. Solicite ao portador que reveja os dados e novamente. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "14",
        "originalMessage": "Transação não autorizada. Cartão Inválido",
        "message": "Transação não autorizada. Cartão inválido. Pode ser bloqueio do cartão no banco emissor, dados incorretos ou tentativas de testes de cartão. Use o Algoritmo de Lhum (Mod 10) para evitar transações não autorizadas por esse motivo. Consulte www.cielo.com.br/desenvolvedores para implantar o Algoritmo de Lhum."
    },
    {
        "code": "15",
        "originalMessage": "Banco emissor indisponível ou inexistente.",
        "message": "Transação não autorizada. Banco emissor indisponível."
    },
    {
        "code": "19",
        "originalMessage": "Refaça a transação ou tente novamente mais tarde.",
        "message": "Não foi possível processar a transação. Refaça a transação ou tente novamente mais tarde. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "21",
        "originalMessage": "Cancelamento não efetuado. Transação não localizada.",
        "message": "Não foi possível processar o cancelamento. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "22",
        "originalMessage": "Parcelamento inválido. Número de parcelas inválidas.",
        "message": "Não foi possível processar a transação. Número de parcelas inválidas. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "23",
        "originalMessage": "Transação não autorizada. Valor da prestação inválido.",
        "message": "Não foi possível processar a transação. Valor da prestação inválido. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "24",
        "originalMessage": "Quantidade de parcelas inválido.",
        "message": "Não foi possível processar a transação. Quantidade de parcelas inválido. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "25",
        "originalMessage": "Pedido de autorização não enviou número do cartão",
        "message": "Não foi possível processar a transação. Solicitação de autorização não enviou o número do cartão. Se o erro persistir, verifique a comunicação entre loja virtual e Cielo."
    },
    {
        "code": "28",
        "originalMessage": "Arquivo temporariamente indisponível.",
        "message": "Não foi possível processar a transação. Arquivo temporariamente indisponível. Reveja a comunicação entre Loja Virtual e Cielo. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "30",
        "originalMessage": "Transação não autorizada. Decline Message",
        "message": "Não foi possível processar a transação. Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir verifique a comunicação com a Cielo esta sendo feita corretamente"
    },
    {
        "code": "39",
        "originalMessage": "Transação não autorizada. Erro no banco emissor.",
        "message": "Transação não autorizada. Erro no banco emissor."
    },
    {
        "code": "41",
        "originalMessage": "Transação não autorizada. Cartão bloqueado por perda.",
        "message": "Transação não autorizada. Cartão bloqueado por perda."
    },
    {
        "code": "43",
        "originalMessage": "Transação não autorizada. Cartão bloqueado por roubo.",
        "message": "Transação não autorizada. Cartão bloqueado por roubo."
    },
    {
        "code": "51",
        "originalMessage": "Transação não autorizada. Limite excedido/sem saldo.",
        "message": "Transação não autorizada. Limite excedido/sem saldo."
    },
    {
        "code": "52",
        "originalMessage": "Cartão com dígito de controle inválido.",
        "message": "Não foi possível processar a transação. Cartão com dígito de controle inválido."
    },
    {
        "code": "53",
        "originalMessage": "Transação não permitida. Cartão poupança inválido",
        "message": "Transação não permitida. Cartão poupança inválido."
    },
    {
        "code": "54",
        "originalMessage": "Transação não autorizada. Cartão vencido",
        "message": "Transação não autorizada. Cartão vencido."
    },
    {
        "code": "55",
        "originalMessage": "Transação não autorizada. Senha inválida",
        "message": "Transação não autorizada. Senha inválida."
    },
    {
        "code": "57",
        "originalMessage": "Transação não permitida para o cartão",
        "message": "Transação não autorizada. Transação não permitida para o cartão."
    },
    {
        "code": "58",
        "originalMessage": "Transação não permitida. Opção de pagamento inválida.",
        "message": "Transação não permitida. Opção de pagamento inválida. Reveja se a opção de pagamento escolhida está habilitada no cadastro"
    },
    {
        "code": "59",
        "originalMessage": "Transação não autorizada. Suspeita de fraude.",
        "message": "Transação não autorizada. Suspeita de fraude."
    },
    {
        "code": "60",
        "originalMessage": "Transação não autorizada.",
        "message": "Transação não autorizada. Tente novamente. Se o erro persistir o portador deve entrar em contato com o banco emissor."
    },
    {
        "code": "61",
        "originalMessage": "Banco emissor indisponível.",
        "message": "Transação não autorizada. Banco emissor indisponível."
    },
    {
        "code": "62",
        "originalMessage": "Transação não autorizada. Cartão restrito para uso doméstico",
        "message": "Transação não autorizada. Cartão restrito para uso doméstico."
    },
    {
        "code": "63",
        "originalMessage": "Transação não autorizada. Violação de segurança",
        "message": "Transação não autorizada. Violação de segurança."
    },
    {
        "code": "64",
        "originalMessage": "Transação não autorizada. Valor abaixo do mínimo exigido pelo banco emissor.",
        "message": "Transação não autorizada. Entre em contato com seu banco emissor."
    },
    {
        "code": "65",
        "originalMessage": "Transação não autorizada. Excedida a quantidade de transações para o cartão.",
        "message": "Transação não autorizada. Excedida a quantidade de transações para o cartão."
    },
    {
        "code": "67",
        "originalMessage": "Transação não autorizada. Cartão bloqueado para compras hoje.",
        "message": "Transação não autorizada. Cartão bloqueado para compras hoje. Bloqueio pode ter ocorrido por excesso de tentativas inválidas. O cartão será desbloqueado automaticamente à meia noite."
    },
    {
        "code": "70",
        "originalMessage": "Transação não autorizada. Limite excedido/sem saldo.",
        "message": "Transação não autorizada. Limite excedido/sem saldo."
    },
    {
        "code": "72",
        "originalMessage": "Cancelamento não efetuado. Saldo disponível para cancelamento insuficiente.",
        "message": "Cancelamento não efetuado. Saldo disponível para cancelamento insuficiente. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "74",
        "originalMessage": "Transação não autorizada. A senha está vencida.",
        "message": "Transação não autorizada. A senha está vencida."
    },
    {
        "code": "75",
        "originalMessage": "Senha bloqueada. Excedeu tentativas de cartão.",
        "message": "Transação não autorizada."
    },
    {
        "code": "76",
        "originalMessage": "Cancelamento não efetuado. Banco emissor não localizou a transação original",
        "message": "Cancelamento não efetuado. Banco emissor não localizou a transação original"
    },
    {
        "code": "77",
        "originalMessage": "Cancelamento não efetuado. Não foi localizado a transação original",
        "message": "Cancelamento não efetuado. Não foi localizado a transação original"
    },
    {
        "code": "78",
        "originalMessage": "Transação não autorizada. Cartão bloqueado primeiro uso.",
        "message": "Transação não autorizada. Cartão bloqueado primeiro uso. Solicite ao portador que desbloqueie o cartão diretamente com seu banco emissor."
    },
    {
        "code": "80",
        "originalMessage": "Transação não autorizada. Divergencia na data de transação/pagamento.",
        "message": "Transação não autorizada. Data da transação ou data do primeiro pagamento inválida."
    },
    {
        "code": "82",
        "originalMessage": "Transação não autorizada. Cartão inválido.",
        "message": "Transação não autorizada. Cartão Inválido. Solicite ao portador que reveja os dados e tente novamente."
    },
    {
        "code": "83",
        "originalMessage": "Transação não autorizada. Erro no controle de senhas",
        "message": "Transação não autorizada. Erro no controle de senhas"
    },
    {
        "code": "85",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "86",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "89",
        "originalMessage": "Erro na transação.",
        "message": "Transação não autorizada. Erro na transação. O portador deve tentar novamente e se o erro persistir, entrar em contato com o banco emissor."
    },
    {
        "code": "90",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "91",
        "originalMessage": "Transação não autorizada. Banco emissor temporariamente indisponível.",
        "message": "Transação não autorizada. Banco emissor temporariamente indisponível."
    },
    {
        "code": "92",
        "originalMessage": "Transação não autorizada. Tempo de comunicação excedido.",
        "message": "Transação não autorizada. Tempo de comunicação excedido."
    },
    {
        "code": "93",
        "originalMessage": "Transação não autorizada. Violação de regra - Possível erro no cadastro.",
        "message": "Transação não autorizada. Violação de regra - Possível erro no cadastro."
    },
    {
        "code": "96",
        "originalMessage": "Falha no processamento.",
        "message": "Não foi possível processar a transação. Falha no sistema da Cielo. Se o erro persistir, entre em contato com a Cielo."
    },
    {
        "code": "97",
        "originalMessage": "Valor não permitido para essa transação.",
        "message": "Transação não autorizada. Valor não permitido para essa transação."
    },
    {
        "code": "98",
        "originalMessage": "Sistema/comunicação indisponível.",
        "message": "Transação não autorizada. Sistema do emissor sem comunicação. Se for geral, verificar SITEF, GATEWAY e/ou Conectividade."
    },
    {
        "code": "99",
        "originalMessage": "Sistema/comunicação indisponível.",
        "message": "Transação não autorizada. Sistema do emissor sem comunicação. Tente mais tarde.  Pode ser erro no SITEF, favor verificar !"
    },
    {
        "code": "999",
        "originalMessage": "Sistema/comunicação indisponível.",
        "message": "Transação não autorizada. Sistema do emissor sem comunicação. Tente mais tarde.  Pode ser erro no SITEF, favor verificar !"
    },
    {
        "code": "AA",
        "originalMessage": "Tempo Excedido",
        "message": "Tempo excedido na comunicação com o banco emissor. Oriente o portador a tentar novamente, se o erro persistir será necessário que o portador contate seu banco emissor."
    },
    {
        "code": "AC",
        "originalMessage": "Transação não permitida. Cartão de débito sendo usado com crédito. Use a função débito.",
        "message": "Transação não permitida. Cartão de débito sendo usado com crédito. Solicite ao portador que selecione a opção de pagamento Cartão de Débito."
    },
    {
        "code": "AE",
        "originalMessage": "Tente Mais Tarde",
        "message": "Tempo excedido na comunicação com o banco emissor. Oriente o portador a tentar novamente, se o erro persistir será necessário que o portador contate seu banco emissor."
    },
    {
        "code": "AF",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "AG",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "AH",
        "originalMessage": "Transação não permitida. Cartão de crédito sendo usado com débito. Use a função crédito.",
        "message": "Transação não permitida. Cartão de crédito sendo usado com débito. Solicite ao portador que selecione a opção de pagamento Cartão de Crédito."
    },
    {
        "code": "AI",
        "originalMessage": "Transação não autorizada. Autenticação não foi realizada.",
        "message": "Transação não autorizada. Autenticação não foi realizada. O portador não concluiu a autenticação. Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir, entre em contato com a Cielo informando o BIN (6 primeiros dígitos do cartão)"
    },
    {
        "code": "AJ",
        "originalMessage": "Transação não permitida. Transação de crédito ou débito em uma operação que permite apenas Private Label. Tente novamente selecionando a opção Private Label.",
        "message": "Transação não permitida. Transação de crédito ou débito em uma operação que permite apenas Private Label. Solicite ao portador que tente novamente selecionando a opção Private Label. Caso não disponibilize a opção Private Label verifique na Cielo se o seu estabelecimento permite essa operação."
    },
    {
        "code": "AV",
        "originalMessage": "Transação não autorizada. Dados Inválidos",
        "message": "Falha na validação dos dados da transação. Oriente o portador a rever os dados e tentar novamente."
    },
    {
        "code": "BD",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento.Solicite ao portador que digite novamente os dados do cartão, se o erro persistir pode haver um problema no terminal do lojista, nesse caso o lojista deve entrar em contato com a Cielo."
    },
    {
        "code": "BL",
        "originalMessage": "Transação não autorizada. Limite diário excedido.",
        "message": "Transação não autorizada. Limite diário excedido. Solicite ao portador que entre em contato com seu banco emissor."
    },
    {
        "code": "BM",
        "originalMessage": "Transação não autorizada. Cartão Inválido",
        "message": "Transação não autorizada. Cartão inválido. Pode ser bloqueio do cartão no banco emissor ou dados incorretos. Tente usar o Algoritmo de Lhum (Mod 10) para evitar transações não autorizadas por esse motivo."
    },
    {
        "code": "BN",
        "originalMessage": "Transação não autorizada. Cartão ou conta bloqueado.",
        "message": "Transação não autorizada. O cartão ou a conta do portador está bloqueada. Solicite ao portador que entre em contato com  seu banco emissor."
    },
    {
        "code": "BO",
        "originalMessage": "Transação não permitida. Falha da operação.",
        "message": "Transação não permitida. Houve um erro no processamento. Solicite ao portador que digite novamente os dados do cartão, se o erro persistir, entre em contato com o banco emissor."
    },
    {
        "code": "BP",
        "originalMessage": "Transação não autorizada. Conta corrente inexistente.",
        "message": "Transação não autorizada. Não possível processar a transação por um erro relacionado ao cartão ou conta do portador. Solicite ao portador que entre em contato com o banco emissor."
    },
    {
        "code": "BV",
        "originalMessage": "Transação não autorizada. Cartão vencido",
        "message": "Transação não autorizada. Cartão vencido."
    },
    {
        "code": "CF",
        "originalMessage": "Transação não autorizada.C79:J79 Falha na validação dos dados.",
        "message": "Transação não autorizada. Falha na validação dos dados. Solicite ao portador que entre em contato com o banco emissor."
    },
    {
        "code": "CG",
        "originalMessage": "Transação não autorizada. Falha na validação dos dados.",
        "message": "Transação não autorizada. Falha na validação dos dados. Solicite ao portador que entre em contato com o banco emissor."
    },
    {
        "code": "DA",
        "originalMessage": "Transação não autorizada. Falha na validação dos dados.",
        "message": "Transação não autorizada. Falha na validação dos dados. Solicite ao portador que entre em contato com o banco emissor."
    },
    {
        "code": "DF",
        "originalMessage": "Transação não permitida. Falha no cartão ou cartão inválido.",
        "message": "Transação não permitida. Falha no cartão ou cartão inválido. Solicite ao portador que digite novamente os dados do cartão, se o erro persistir, entre em contato com o banco"
    },
    {
        "code": "DM",
        "originalMessage": "Transação não autorizada. Limite excedido/sem saldo.",
        "message": "Transação não autorizada. Limite excedido/sem saldo."
    },
    {
        "code": "DQ",
        "originalMessage": "Transação não autorizada. Falha na validação dos dados.",
        "message": "Transação não autorizada. Falha na validação dos dados. Solicite ao portador que entre em contato com o banco emissor."
    },
    {
        "code": "DS",
        "originalMessage": "Transação não permitida para o cartão",
        "message": "Transação não autorizada. Transação não permitida para o cartão."
    },
    {
        "code": "EB",
        "originalMessage": "Transação não autorizada. Limite diário excedido.",
        "message": "Transação não autorizada. Limite diário excedido. Solicite ao portador que entre em contato com seu banco emissor."
    },
    {
        "code": "EE",
        "originalMessage": "Transação não permitida. Valor da parcela inferior ao mínimo permitido.",
        "message": "Transação não permitida. Valor da parcela inferior ao mínimo permitido. Não é permitido parcelas inferiores a R$ 5,00. Necessário rever calculo para parcelas."
    },
    {
        "code": "EK",
        "originalMessage": "Transação não permitida para o cartão",
        "message": "Transação não autorizada. Transação não permitida para o cartão."
    },
    {
        "code": "FA",
        "originalMessage": "Transação não autorizada.",
        "message": "Transação não autorizada AmEx."
    },
    {
        "code": "FC",
        "originalMessage": "Transação não autorizada. Ligue Emissor",
        "message": "Transação não autorizada. Oriente o portador a entrar em contato com o banco emissor."
    },
    {
        "code": "FD",
        "originalMessage": "Transação negada. Reter cartão condição especial",
        "message": "Transação não autorizada por regras do banco emissor."
    },
    {
        "code": "FE",
        "originalMessage": "Transação não autorizada. Divergencia na data de transação/pagamento.",
        "message": "Transação não autorizada. Data da transação ou data do primeiro pagamento inválida."
    },
    {
        "code": "FF",
        "originalMessage": "Cancelamento OK",
        "message": "Transação de cancelamento autorizada com sucesso. ATENÇÂO: Esse retorno é para casos de cancelamentos e não para casos de autorizações."
    },
    {
        "code": "FG",
        "originalMessage": "Transação não autorizada. Ligue AmEx.",
        "message": "Transação não autorizada. Oriente o portador a entrar em contato com a Central de Atendimento AmEx."
    },
    {
        "code": "FG",
        "originalMessage": "Ligue 08007285090",
        "message": "Transação não autorizada. Oriente o portador a entrar em contato com a Central de Atendimento AmEx."
    },
    {
        "code": "GA",
        "originalMessage": "Aguarde Contato",
        "message": "Transação não autorizada. Referida pelo Lynx Online de forma preventiva. A Cielo entrará em contato com o lojista sobre esse caso."
    },
    {
        "code": "HJ",
        "originalMessage": "Transação não permitida. Código da operação inválido.",
        "message": "Transação não permitida. Código da operação Coban inválido."
    },
    {
        "code": "IA",
        "originalMessage": "Transação não permitida. Indicador da operação inválido.",
        "message": "Transação não permitida. Indicador da operação Coban inválido."
    },
    {
        "code": "JB",
        "originalMessage": "Transação não permitida. Valor da operação inválido.",
        "message": "Transação não permitida. Valor da operação Coban inválido."
    },
    {
        "code": "KA",
        "originalMessage": "Transação não permitida. Falha na validação dos dados.",
        "message": "Transação não permitida. Houve uma falha na validação dos dados. Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir verifique a comunicação entre loja virtual e Cielo."
    },
    {
        "code": "KB",
        "originalMessage": "Transação não permitida. Selecionado a opção incorrente.",
        "message": "Transação não permitida. Selecionado a opção incorreta. Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir deve ser verificado a comunicação entre loja virtual e Cielo."
    },
    {
        "code": "KE",
        "originalMessage": "Transação não autorizada. Falha na validação dos dados.",
        "message": "Transação não autorizada. Falha na validação dos dados. Opção selecionada não está habilitada. Verifique as opções disponíveis para o portador."
    },
    {
        "code": "N7",
        "originalMessage": "Transação não autorizada. Código de segurança inválido.",
        "message": "Transação não autorizada. Código de segurança inválido. Oriente o portador corrigir os dados e tentar novamente."
    },
    {
        "code": "R1",
        "originalMessage": "Transação não autorizada. Cartão inadimplente (Do not honor).",
        "message": "Transação não autorizada. Não foi possível processar a transação. Questão relacionada a segurança, inadimplencia ou limite do portador."
    },
    {
        "code": "U3",
        "originalMessage": "Transação não permitida. Falha na validação dos dados.",
        "message": "Transação não permitida. Houve uma falha na validação dos dados. Solicite ao portador que reveja os dados e tente novamente. Se o erro persistir verifique a comunicação entre loja virtual e Cielo."
    },
    {
        "code": "GD",
        "originalMessage": "Transação não permitida",
        "message": "Transação não permitida"
    }
];
const ptBr = {
    errors,
    updates
};
const register = function (AbstractRequest) {
    AbstractRequest.register(ptBr);
};
exports.default = register;
