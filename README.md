# API Calculadora de Investimentos
Api em node atualmente responsavel por fazer calculos basicos de juros compostos

## Dependencias
* node v18.x
* npm
* typescript v3.x

## Como executar a api
Primeiro será necessarios instalar as bibliotecas necessarias para o projeto
```
npm install
```
Depois, será necessario criar um arquivo `.env`, use o `.env.example` como base.
Depois já vai ser possivel executar a aplicação em watch mode 
```
npm run dev
```
Ao dar um GET no endpoint `/health-check`, será retornado o endpoint:
```json
{
    "status": 200
}
```

para rodar os testes de unidade do projeto, use o comado abaixo:
```
npm run test
```

## Rodando localmente junto com uma aplicação web
Caso você estea rodando uma aplicação web localmente, existem alguns pontos a se considerar:
* Não sar a porta 3000, react e next geralmente usam ela pra subir a aplicação
* Configurar o valor `CORS_ORIGIN` para * ou a url da aplicação web local

## Métricas de qualidade
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Garden-Coin_API-CalculadoraDeInvestimentos&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Garden-Coin_API-CalculadoraDeInvestimentos)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Garden-Coin_API-CalculadoraDeInvestimentos&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Garden-Coin_API-CalculadoraDeInvestimentos)
