# Viewup Cielo API-3.0

SDK API-3.0 PHP


## Dependências

* [NODEJS](https://nodejs.org/en/) >= 6
* [NPM](https://www.npmjs.com/get-npm) >= 5.6.0
* [Yarn](https://yarnpkg.com/pt-BR/)  >= 1.4
* [TypeScript](https://www.typescriptlang.org/) >= 2.6.2

## Configurações

Repositório Local:

```
git@192.168.25.2:viewup/viewup-cielo-node.git
```

Repositório Remoto

```
ssh://root@hospedaup.com.br:288/home/git/repositories/viewup-cielo-node.git
```

## Criando um Build

Todo o código fonte encontra-se na pasta `src/`. Para criar um build rode `yarn run tsc` e aguarde o compilador.
O resultado final entra-se na pasta `lib/` gerada pelo TypeScript.

## Contribuindo

- Clone o repositório do Repositório Local
- Crie um branch que exemplifique as tarefas que forem ser executadas (ex: feature/query-sale, hotfix/change-payment-status)
- Assim que terminado, faça merge para o branch master usando a flag `--no-ff`

## Test

Tenha em mão o seu MerchantId e MerchantKey para desenvolvedores. Para isso basta acessar  o [Sandbox Register](https://cadastrosandbox.cieloecommerce.cielo.com.br/)
e fazer um cadastro rápido.

Clone o projeto do servidor local, instale os módulos e divirta-se


```bash
yarn run test
```

```bash
npm run test
```




## Grar documentação

Para gerar a documentação, tenha instalado na maquina o Docify:

```bash
npm install -g docify
```

Altere o README.md e rode o comando.
```bash
docsify init ./docs
```

Para ver o resultado inicie o servidor do docify
```bash
docsify serve docs
```

## Principais recursos

* [x] Pagamentos por cartão de crédito. (Obrigatório)
* [ ] Pagamentos recorrentes.  (Opcional - 2º plano)
    * [ ] Com autorização na primeira recorrência.(Opcional - 2º plano)
    * [ ] Com autorização a partir da primeira recorrência.(Opcional - 2º plano)
* [ ] Pagamentos por cartão de débito.(Opcional - 2º plano)
* [x] Pagamentos por boleto. (Obrigatório)
* [ ] Pagamentos por transferência eletrônica.
* [ ] Cancelamento de autorização. (Obrigatório)
* [x] Consulta de pagamentos. (Obrigatório)
* [ ] Tokenização de cartão.(Opcional - 2º plano)

## Limitações

Por envolver a interface de usuário da aplicação, o SDK funciona apenas como um framework para criação das transações.
Nos casos onde a autorização é direta, não há limitação; mas nos casos onde é necessário a autenticação ou qualquer tipo de redirecionamento do usuário,
 o desenvolvedor deverá utilizar o SDK para gerar o pagamento e, com o link retornado pela Cielo, providenciar o redirecionamento do usuário.

## Instalando o SDK

Se você já possui um projeto configurado basta adicionar o modulo usando:

Yarn

```bash
yarn add git+ssh://root@hospedaup.com.br/home/git/repositories/viewup-cielo-node.git
```

NPM

```bash
npm install --save git+ssh://root@hospedaup.com.br/home/git/repositories/viewup-cielo-node.git
```

## Produtos e Bandeiras suportadas e suas constantes

| Bandeira         | Constante              | Crédito à vista | Crédito parcelado Loja | Débito | Voucher |
|------------------|------------------------|-----------------|------------------------|--------|---------|
| Visa             | CreditCard::VISA       | Sim             | Sim                    | Sim    | *Não*   |
| Master Card      | CreditCard::MASTERCARD | Sim             | Sim                    | Sim    | *Não*   |
| American Express | CreditCard::AMEX       | Sim             | Sim                    | *Não*  | *Não*   |
| Elo              | CreditCard::ELO        | Sim             | Sim                    | *Não*  | *Não*   |
| Diners Club      | CreditCard::DINERS     | Sim             | Sim                    | *Não*  | *Não*   |
| Discover         | CreditCard::DISCOVER   | Sim             | *Não*                  | *Não*  | *Não*   |
| JCB              | CreditCard::JCB        | Sim             | Sim                    | *Não*  | *Não*   |
| Aura             | CreditCard::AURA       | Sim             | Sim                    | *Não*  | *Não*   |

<!--
TODO Atualzar a documentação de PHP para a SDK em Node JS
## Utilizando o SDK

Para criar um pagamento simples com cartão de crédito com o SDK, basta fazer:

### Criando um pagamento com cartão de crédito

```javascript
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\Payment;
use Cielo\API30\Ecommerce\CreditCard;

use Cielo\API30\Ecommerce\Request\CieloRequestException;
// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente
$customer = $sale->customer('Fulano de Tal');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700);

// Crie uma instância de Credit Card utilizando os dados de teste
// esses dados estão disponíveis no manual de integração
$payment->setType(Payment::PAYMENTTYPE_CREDITCARD)
        ->creditCard("123", CreditCard::VISA)
        ->setExpirationDate("12/2018")
        ->setCardNumber("0000000000000001")
        ->setHolder("Fulano de Tal");

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
    // dados retornados pela Cielo
    $paymentId = $sale->getPayment()->getPaymentId();

    // Com o ID do pagamento, podemos fazer sua captura, se ela não tiver sido capturada ainda
    $sale = (new CieloEcommerce($merchant, $environment))->captureSale($paymentId, 15700, 0);

    // E também podemos fazer seu cancelamento, se for o caso
    $sale = (new CieloEcommerce($merchant, $environment))->cancelSale($paymentId, 15700);
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```

### Criando um pagamento e gerando o token do cartão de crédito

```php
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\Payment;
use Cielo\API30\Ecommerce\CreditCard;

use Cielo\API30\Ecommerce\Request\CieloRequestException;
// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente
$customer = $sale->customer('Fulano de Tal');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700);

// Crie uma instância de Credit Card utilizando os dados de teste
// esses dados estão disponíveis no manual de integração.
// Utilize setSaveCard(true) para obter o token do cartão
$payment->setType(Payment::PAYMENTTYPE_CREDITCARD)
        ->creditCard("123", CreditCard::VISA)
        ->setExpirationDate("12/2018")
        ->setCardNumber("0000000000000001")
        ->setHolder("Fulano de Tal")
        ->setSaveCard(true);

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    // O token gerado pode ser armazenado em banco de dados para vendar futuras
    $token = $sale->getPayment()->getCreditCard()->getCardToken();
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```

### Criando um pagamento com cartão de crédito tokenizado

```php
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\Payment;
use Cielo\API30\Ecommerce\CreditCard;

use Cielo\API30\Ecommerce\Request\CieloRequestException;
// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente
$customer = $sale->customer('Fulano de Tal');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700);

// Crie uma instância de Credit Card utilizando os dados de teste
// esses dados estão disponíveis no manual de integração
$payment->setType(Payment::PAYMENTTYPE_CREDITCARD)
        ->creditCard("123", CreditCard::VISA)
        ->setCardToken("TOKEN-PREVIAMENTE-ARMAZENADO");

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
    // dados retornados pela Cielo
    $paymentId = $sale->getPayment()->getPaymentId();
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```

### Criando um pagamento recorrente

```php
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\Payment;
use Cielo\API30\Ecommerce\CreditCard;

use Cielo\API30\Ecommerce\Request\CieloRequestException;
// ...
// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MID', 'MKEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente
$customer = $sale->customer('Fulano de Tal');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700);

// Crie uma instância de Credit Card utilizando os dados de teste
// esses dados estão disponíveis no manual de integração
$payment->setType(Payment::PAYMENTTYPE_CREDITCARD)
        ->creditCard("123", CreditCard::VISA)
        ->setExpirationDate("12/2018")
        ->setCardNumber("0000000000000001")
        ->setHolder("Fulano de Tal");

// Configure o pagamento recorrente
$payment->recurrentPayment(true)->setInterval(RecurrentPayment::INTERVAL_MONTHLY);

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    $recurrentPaymentId = $sale->getPayment()->getRecurrentPayment()->getRecurrentPaymentId();
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```

### Criando transações com cartão de débito

```php
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\CreditCard;

use Cielo\API30\Ecommerce\Request\CieloRequestException;

// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente
$customer = $sale->customer('Fulano de Tal');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700);

// Defina a URL de retorno para que o cliente possa voltar para a loja
// após a autenticação do cartão
$payment->setReturnUrl('https://localhost/test');

// Crie uma instância de Debit Card utilizando os dados de teste
// esses dados estão disponíveis no manual de integração
$payment->debitCard("123", CreditCard::VISA)
        ->setExpirationDate("12/2018")
        ->setCardNumber("0000000000000001")
        ->setHolder("Fulano de Tal");

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
    // dados retornados pela Cielo
    $paymentId = $sale->getPayment()->getPaymentId();

    // Utilize a URL de autenticação para redirecionar o cliente ao ambiente
    // de autenticação do emissor do cartão
    $authenticationUrl = $sale->getPayment()->getAuthenticationUrl();
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```

### Criando uma venda com Boleto

```php
<?php
require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\Sale;
use Cielo\API30\Ecommerce\CieloEcommerce;
use Cielo\API30\Ecommerce\Payment;

use Cielo\API30\Ecommerce\Request\CieloRequestException;
// ...
// Configure o ambiente
$environment = $environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

// Crie uma instância de Sale informando o ID do pedido na loja
$sale = new Sale('123');

// Crie uma instância de Customer informando o nome do cliente,
// documento e seu endereço
$customer = $sale->customer('Fulano de Tal')
                  ->setIdentity('00000000001')
                  ->setIdentityType('CPF')
                  ->address()->setZipCode('22750012')
                             ->setCountry('BRA')
                             ->setState('RJ')
                             ->setCity('Rio de Janeiro')
                             ->setDistrict('Centro')
                             ->setStreet('Av Marechal Camara')
                             ->setNumber('123');

// Crie uma instância de Payment informando o valor do pagamento
$payment = $sale->payment(15700)
                ->setType(Payment::PAYMENTTYPE_BOLETO)
                ->setAddress('Rua de Teste')
                ->setBoletoNumber('1234')
                ->setAssignor('Empresa de Teste')
                ->setDemonstrative('Desmonstrative Teste')
                ->setExpirationDate(date('d/m/Y', strtotime('+1 month')))
                ->setIdentification('11884926754')
                ->setInstructions('Esse é um boleto de exemplo');

// Crie o pagamento na Cielo
try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    $sale = (new CieloEcommerce($merchant, $environment))->createSale($sale);

    // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
    // dados retornados pela Cielo
    $paymentId = $sale->getPayment()->getPaymentId();
    $boletoURL = $sale->getPayment()->getUrl();

    printf("URL Boleto: %s\n", $boletoURL);
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
```

### Tokenizando um cartão

```php
<?php

require 'vendor/autoload.php';

use Cielo\API30\Merchant;

use Cielo\API30\Ecommerce\Environment;
use Cielo\API30\Ecommerce\CreditCard;
use Cielo\API30\Ecommerce\CieloEcommerce;

use Cielo\API30\Ecommerce\Request\CieloRequestException;

// ...
// ...
// Configure o ambiente
$environment = Environment::sandbox();

// Configure seu merchant
$merchant = new Merchant('MID', 'MKEY');

// Crie uma instância do objeto que irá retornar o token do cartão
$card = new CreditCard();
$card->setCustomerName('Fulano de Tal');
$card->setCardNumber('0000000000000001');
$card->setHolder('Fulano de Tal');
$card->setExpirationDate('10/2020');
$card->setBrand(CreditCard::VISA);

try {
    // Configure o SDK com seu merchant e o ambiente apropriado para recuperar o cartão
    $card = (new CieloEcommerce($merchant, $environment))->tokenizeCard($card);

    // Get the token
    $cardToken = $card->getCardToken();
} catch (CieloRequestException $e) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    $error = $e->getCieloError();
}
// ...
```
-->

## Manual

Para mais informações sobre a integração com a API 3.0 da Cielo, vide o manual em: [Integração API 3.0](https://developercielo.github.io/manual/cielo-ecommerce)

## ÚTIMO COMMIT

