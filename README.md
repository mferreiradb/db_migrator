<h1 align="center">Migrador de Banco de Dados</h1>

<p align="center">Migrador de Banco de Dados para Mysql</p>
<p align="center">A lógica pode reaproveitada para demais modelos</p>

<div align="center">
    <img src="https://img.shields.io/badge/Version-1.0.0-blueviolet?style=for-the-badge&amp;logo=ghost" alt="Badge">
    <img src="https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&amp;logo=ghost" alt="Badge">
    <img src="https://img.shields.io/badge/xlsx-^8.38.0-brightgreen?style=for-the-badge&amp;logo=ghost" alt="Badge">
    <img src="https://img.shields.io/badge/Status-finished-brightgreen?style=for-the-badge&amp;logo=ghost" alt="Badge">
</div>


## PASSO  A PASSO

*Conexão*

- Preencha as variáveis de ambiente em um aarquivo `.env`, seguindo o modelo apresentado em `.env.example`

- Teste a conexão rodando o arquivo `db.js`

- Caso ocorra algum erro de acesso ao banco devido permissões negadas, abra o banco de dados e rode o seguinte comando:

        ALTER USER 'USER'@'HOST' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';
        flush privileges;
    
    - USER: usuário do banco de dados
    - HOST: onde se encontra o banco de dados onde está o banco de dados
    - PASSWORD: senha do banco de dados

*Planilha de migração*

- Insira na planilha os dados que deseja migrar de um banco de dados  para o outro

- Lembre-se de preencher a primeira linha da planilha com os nomes dos campos desejados

- Caso hajam dados de data, preencha na planilha como uma `string`, colocando a data entre aspas simples

*Migração*

- No arquivo `index.js`, desestruture a variável `row`, passando na desestruturação os campos informados na planilha

- Os dados de data trazidos como strings da planilha devem passados para as variáveis de transformação, para que sejam transformadas novamente em dados do tipo Date

- Atribua à variávei `sql` o comando de inserção, apontando a tabela e os campos

- Por fim, utilize `connection.execute()` para executar a migração

    - A função `execute()` recebe dois parâmetros: o primeiro prâmetro é a variável com o comando de inserção, neste caso, `sql`. O segundo parâmetro será um array com os campos que devem ser substituídos pelas interrogações presentes na variável `sql`
