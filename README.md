# Estrutura do projeto

# pastas:
 config ->  Configurações de bibliotecas externas, como por exemplo, autenticação,upload, email, etc...
# ----------------------------------------------------------------------------------
 modules-> Abrange as áreas de conhecimento de aplicação, diretamente relacionados com a regra de negócio da aplicação. A princípio, os seguintes módulos na aplicação:
#* customers
* producs
* orders
* users
# ----------------------------------------------------------------------------------
 shared -> módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o server.ts, o arquivo principal de rotas, conexão com o banco de dados...
# ----------------------------------------------------------------------------------

 services -> estarão dentro de cada módulo da aplicação e serão responáveis por todas as regras que a aplicação precisa atender, como por exempo:
 
* A senha deve ser armazenada com criptografia
* Não pode haver mais de um produto com o mesmo nome
* Não pode haver um mesmo email sendo usado por mais de um usuário
