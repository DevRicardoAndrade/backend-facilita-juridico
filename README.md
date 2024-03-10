# Para rodar o Projeto:
Devemos inicialmente instalar o Yarn de forma global via comando:

### `npm i g yarn`
Após isso devemos rodar o comando: `yarn install` para instalar as nossas dependencias.

### Variaveis de Ambiente
  Deve-se clonar o arquivo .env.example para .env e alimentar as variaveis conforme banco de dados.
  Eu utilizei o docker, mas não é obrigatório, pode usar qualquer servidor rodando postgres.

## Iniciando projeto:
devemos utilizar o comando yarn start:dev para iniciar o projeto em modo de desenvolvimento.

# Funcionamento da API:
## Rotas
  ### Método GET `/clients` - Retorna todos os clientes cadastrados no banco de dados.
  Parametros para filtros passados via Url Query exemplo: 127.0.0.1:8080/clients?name=Ricardo
  #### Parametros disponiveis:
    id, name, email, telephone,
  ### Método POST `/clients` - Cadastra um novo cliente no banco de dados
  #### Payload
    {
      "name": "string",
      "email": "string",
      "telephone": "string",
      "cordX": 0,
      "cordY": 0,
      
    }
  ### Método GET `/clients/routes` - Retorna uma lista de cliente com a rota otimizada.

## Versões:
node v20.11
npm 10.2.4
yarn 1.22.21
