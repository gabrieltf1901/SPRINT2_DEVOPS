Pré-requisitos Para rodar este projeto, é necessário ter instalado:

Docker Docker Compose Git (para clonar o repositório)

Clonando o Repositório Primeiro, clone este repositório para a sua máquina local: git clone https://github.com/gabrieltf1901/SPRINT2_DEVOPS.git

Configuração e Execução

Passo 1: Construir e Iniciar os Contêineres Para rodar o projeto, utilize o Docker Compose. Este comando irá construir as imagens e iniciar os contêineres em background. docker-compose up -d --build

Esse comando fará o seguinte:

API: Construirá a imagem da API Node.js localizada em ./api e a executará na porta 3000. Banco de Dados Oracle: Iniciará um contêiner Oracle XE, com persistência de dados habilitada através de um volume Docker.

Passo 2: Verificar se os Serviços Estão Ativos Após o comando acima, você pode verificar se os contêineres estão em execução com: docker-compose ps

A saída mostrará os contêineres api e database em execução. A API estará disponível em http://localhost:3000/pacientes_op

Passo 3: Testar a API Para testar a API, você pode usar ferramentas como o Postman ou o curl.

Exemplos de endpoints disponíveis:

GET /pacientes_op - Lista todos os pacientes. GET /pacientes_op /:id - Busca um paciente pelo ID. POST /pacientes_op  - Adiciona um novo paciente. PUT /pacientes_op /:id - Atualiza um paciente pelo ID. DELETE /pacientes_op /:id - Remove um paciente pelo ID.

Dependências do Projeto As dependências da API são gerenciadas pelo package.json dentro da pasta api. As principais dependências são:

express: Framework minimalista para criar servidores web com Node.js. O Docker se encarregará de instalar essas dependências automaticamente ao construir o contêiner.

Arquitetura do Projeto A arquitetura do projeto é composta por dois serviços principais, que são definidos no arquivo docker-compose.yml:

API (Node.js): Responsável por fornecer endpoints para gerenciar pacientes. Banco de Dados Oracle XE: Responsável por armazenar os dados de jogadores e persistir as informações. Cada serviço é executado em um contêiner independente, e o Docker Compose facilita o gerenciamento desses contêineres. O volume persistente para o banco de dados garante que os dados não sejam perdidos quando o contêiner for reiniciado.

Comandos Úteis Parar todos os contêineres: docker-compose down

Reiniciar os contêineres com build: docker-compose up -d --build

Verificar logs dos contêineres: docker-compose logs -f

Observação Para modificar ou estender a aplicação, edite os arquivos na pasta api e reconstrua o contêiner da API com: docker-compose up -d --build
