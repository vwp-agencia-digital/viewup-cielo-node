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



## ÚLTIMOS COMMITS

```
 nc
Hash: 914a75c
Email: washington@viewup.com.br
Name: Washington Freitas
Date: 19/02/2018 10 horas 42 minutos 54 segundos
```

```
 Add dist branch and deploy dev-ops
Hash: be217c1
Email: washington@viewup.com.br
Name: Washington Freitas
Date: 19/02/2018 10 horas 39 minutos 56 segundos
```

```
 Change package.json version
Hash: 0178b2e
Email: washington@viewup.com.br
Name: Washington Freitas
Date: 19/02/2018 10 horas 17 minutos 29 segundos
```

## Log de alterações (atualizado em 19/02/2018 10-45-56)

### 19/02/2018 10-42-54 nc
```
Hash: 914a75c
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 10-39-56 Add dist branch and deploy dev-ops
```
Hash: be217c1
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 10-17-29 Change package.json version
```
Hash: 0178b2e
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 09-17-36 hotfix: add breackline changes
```
Hash: a65a1db
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 09-09-25 hotfix: changelog write in readme
```
Hash: e57c8fa
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 09-02-08 hotfix: done
```
Hash: 6a19d97
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 19/02/2018 08-58-28 hotfix: some changes; add changelog renerator
```
Hash: a553da3
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 19-37-26 hotfix: add changelog generator
```
Hash: 7d591c0
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 18-57-22 Add ptbr format for readme date
```
Hash: 7ad0f0f
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 18-34-27 FINAL CHANGES
```
Hash: 2128f50
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 18-24-42 nc
```
Hash: 6202ec4
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 18-10-54 change date format
```
Hash: 0b9390d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 18-09-06 Hotfix: Add some changes in pretty date format
```
Hash: 084bd71
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 17-58-27 Change pretty format
```
Hash: 4056f30
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 17-53-31 Change print format on git runner On branch master Changes to be committed: modified: package.json
```
Hash: 271d6b5
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 17-49-18 hotfix: add changes to gitlab runner
```
Hash: d2af669
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 17-43-22 nc
```
Hash: ec7aba5
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 16-21-09 Add commits formated
```
Hash: b62297d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 15-03-36 CHange Readme typo reference
```
Hash: 55029b3
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 15-01-37 Change readme format
```
Hash: c8eab5b
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-58-35 hotfix: change gitlab-integration for fix a reserved key error
```
Hash: 5744110
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-58-02 Change gitlab integration
```
Hash: 2211ab5
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-54-04 Add README last commit reference
```
Hash: f092e4e
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-43-30 nc
```
Hash: 2c64c70
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-40-58 nc
```
Hash: 7807241
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-37-47 nc
```
Hash: aea8f87
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-35-53 add moca as dev
```
Hash: 275c88f
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-34-41 nc
```
Hash: b69eee5
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-32-04 nc
```
Hash: 6595d9d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-30-50 add gitlag test runner
```
Hash: 91f6745
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-29-11 nc
```
Hash: 92ad46e
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 14-09-10 add doc
```
Hash: 9c5076a
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 16/02/2018 11-23-13 nc
```
Hash: bc075e0
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 15/02/2018 17-58-52 update Readme
```
Hash: 6bf7731
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 15/02/2018 17-56-09 Generate Version 1
```
Hash: 4cec7de
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 15/02/2018 17-54-19 Add some changes, Update Query Sale response, add cancel request body validation
```
Hash: 4f28859
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 15/02/2018 15-45-43 hotfix types definition to address
```
Hash: 2e2beba
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 09/02/2018 17-34-11 merge from feature/UpdateSaleRequest
```
Hash: 96c4f50
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 17-27-06 finish tests of payment Request
```
Hash: 7ae7710
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 17-24-24 Implementação UpdateSaleRequest
```
Hash: 677673d
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 15-27-48 get update sale request
```
Hash: a87bc17
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 15-24-11 comment tokenize card request
```
Hash: cd28bc4
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 15-22-42 Update
```
Hash: 811cb7e
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 14-16-45 Merge branch 'feature/CieloEcommerce' into feature/UpdateSaleRequest
```
Hash: 3e171d2
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 14-01-46 finish Cielo Ecommerce
```
Hash: 4a22b39
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-45-39 Merge branch 'feature/PaymentRequest' of ssh://hospedaup.com.br:288/home/git/repositories/viewup-cielo-node into feature/PaymentRequest
```
Hash: 2136b90
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-45-02 merge with feature/CreateSaleRequest
```
Hash: a771816
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-39-51 Fix
```
Hash: 4de4652
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 11-38-03 fix merge conflicts
```
Hash: 80eff7b
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-36-29 fix address
```
Hash: 9c7f545
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-33-20 hotfix: Change payment tester billet to creadit card
```
Hash: 74f4d68
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 09/02/2018 11-23-42 Fix Address
```
Hash: eeccc2d
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 11-20-40 Create Sale Request
```
Hash: d82d20c
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 11-15-51 Create Sale Request
```
Hash: fba3285
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 11-13-16 fix request return
```
Hash: 20113b1
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-07-07 Merge branch 'feature/PaymentRequest' of ssh://hospedaup.com.br:288/home/git/repositories/viewup-cielo-node into feature/PaymentRequest
```
Hash: 7f2aff0
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-05-00 fix request in query sale request
```
Hash: bd01129
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 11-04-21 fix address populate
```
Hash: 3b6316b
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 09/02/2018 09-43-11 Helper
```
Hash: cbf9dcd
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 09/02/2018 09-38-39 improve Address Class
```
Hash: 16325b7
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 18-47-53 fix address
```
Hash: 28d462e
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 17-57-50 fix merge conflicts
```
Hash: a78a292
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 17-55-40 commit to absorb merge
```
Hash: 5c7e45b
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 17-52-03 Fix Abstract request errors
```
Hash: a1f6214
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 08/02/2018 17-31-41 CreateSaleRequest
```
Hash: 3f5cf0a
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 08/02/2018 16-35-14 merge conflicts
```
Hash: 3395c0f
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 16-20-54 Salerequest
```
Hash: b9999c3
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 08/02/2018 16-19-04 Merge branch 'feature/PaymentRequest' of ssh://hospedaup.com.br:288/home/git/repositories/viewup-cielo-node into feature/PaymentRequest
```
Hash: 411ff03
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 16-18-31 making cieloEcommerce
```
Hash: 276bfac
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 15-17-44 Merge branch 'feature/Sale' into feature/CreateSaleRequest
```
Hash: d890f3b
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 08/02/2018 15-07-40 testing paymentrequest
```
Hash: e0276ee
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 14-46-44 Inplementação do Sale
```
Hash: 7c262c9
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 08/02/2018 14-12-37 Merge branch 'feature/Sale' into feature/PaymentRequest
```
Hash: 6de4599
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 08/02/2018 14-09-17 Implementação do Sale
```
Hash: 386660d
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 08/02/2018 09-48-43 Add abstract request test name
```
Hash: 3f1043d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 08/02/2018 09-46-21 Add billet CieloRequestException response assertion check
```
Hash: 509ca99
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 08/02/2018 09-43-54 Add bilelet sale request merchant id and key
```
Hash: 77437eb
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 08/02/2018 09-41-46 Add Sale Handler for test responses
```
Hash: bee5e76
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 08/02/2018 09-01-15 Add sale Payment Tester
```
Hash: bc60694
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 07/02/2018 17-56-57 Merge branch 'feature/Payment' of ssh://hospedaup.com.br:288/home/git/repositories/viewup-cielo-node into feature/Payment
```
Hash: dd5a90f
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 07/02/2018 17-56-00 add sale tester
```
Hash: ad308aa
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 07/02/2018 17-54-01 Implementado a Classe Payment
```
Hash: 4f6af83
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 07/02/2018 15-07-58 Merge branch 'feature/Payment' of ssh://hospedaup.com.br:288/home/git/repositories/viewup-cielo-node into feature/Payment
```
Hash: 6962fea
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 07/02/2018 15-07-04 Add payment sale changes
```
Hash: 800645d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 07/02/2018 14-58-18 Finalizaçao do customer
```
Hash: 3809ada
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 07/02/2018 14-30-43 Merge branch 'feature/CreditCard' into feature/Payment
```
Hash: 40b5dcf
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 07/02/2018 14-16-26 Implementação do CreditCard
```
Hash: 9cb1b68
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 07/02/2018 12-05-52 populate test passed!
```
Hash: cf57111
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 07/02/2018 11-50-56 Merge branch 'feature/Address' into feature/customer-class
```
Hash: e3f9333
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 07/02/2018 11-45-49 CreditCard
```
Hash: 3bf400c
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 07/02/2018 10-58-30 customer class WIP
```
Hash: 58085be
Email: lucas@viewup.com.br
Name: Lucas-Viewup
```


### 07/02/2018 10-54-29 Implementação da classe Address
```
Hash: 07cabd5
Email: breno@viewup.com.br
Name: BrenoOliveira
```


### 06/02/2018 10-59-29 Create Payemnt tester
```
Hash: 6936e6b
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-45-43 update docsify version
```
Hash: cf08442
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-42-06 Add folder shared permissions
```
Hash: caadf8a
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-39-22 Add docify initialize build
```
Hash: 49c0922
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-36-26 add tpescript compilation
```
Hash: 05a8adc
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-30-16 nc
```
Hash: 0add9ab
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-17-47 add $CI_PROJECT_DIR
```
Hash: 217605e
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-13-22 Add git settings
```
Hash: aedb9ed
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 17-10-54 Change scripts generator runner
```
Hash: 3dea3be
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-52-18 nc
```
Hash: afe979d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-49-15 nc
```
Hash: 38e00b1
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-42-43 add gitlab tags
```
Hash: 43f0a08
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-23-04 Change Paipeline Operators
```
Hash: 7c86c8d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-20-43 CHange GITLABYANML
```
Hash: 7afa35a
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-16-32 Add gilab task runner
```
Hash: 997df58
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 16-00-45 Update README.md
```
Hash: 657a9ef
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 15-56-16 Updating Documentation
```
Hash: 0ade5a4
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 15-49-30 Clear Git Chache; Add CredtiCard Test; Add Billet Test
```
Hash: 9d4bf8d
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 15-49-07 remove docs from cache
```
Hash: 3c96408
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 05/02/2018 09-29-34 add payment test.js
```
Hash: 0bfa6b6
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 02/02/2018 16-21-14 Add enviromental files and testers
```
Hash: ce9715e
Email: washington@viewup.com.br
Name: Washington Freitas
```


### 01/02/2018 15-10-23 Add project structure and start write tests
```
Hash: 887f7b1
Email: washington@viewup.com.br
Name: Washington Freitas
```


