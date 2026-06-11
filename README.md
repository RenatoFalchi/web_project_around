# Tripleten web_project_around

Sprint 12 — JavaScript Assíncrono e Trabalho com APIs
1️⃣ — Projeto: Sprint 12 — Renato Falchi Correia de Oliveira

Este projeto dá continuidade ao desenvolvimento do Around The U.S., agora com foco em comunicação com servidor via API REST, JavaScript assíncrono e atualização dinâmica da interface com base em dados reais.
A Sprint 12 conecta a aplicação a um servidor real, substituindo todos os dados estáticos por requisições HTTP, e adiciona novas funcionalidades como exclusão com confirmação e atualização de avatar.

2️⃣ — Objetivo do projeto

Conectar a aplicação ao servidor e implementar as seguintes funcionalidades:

Criar a classe Api para centralizar todas as requisições HTTP

Carregar dados reais do usuário e cartões do servidor ao abrir a página

Salvar alterações de perfil no servidor via PATCH

Adicionar novos cartões ao servidor via POST

Deletar cartões com confirmação via popup

Curtir e descurtir cartões sincronizando com o servidor

Atualizar a foto de perfil via popup dedicado

Melhorar a UX com o estado "Salvando..." nos botões durante requisições

3️⃣ — Funcionalidades implementadas

🌐 Classe Api

Centraliza toda a comunicação com o servidor.
Métodos implementados:

getUserInfo() — busca dados do usuário logado

getInitialCards() — busca lista de cartões

getUserAndCards() — carrega usuário e cartões simultaneamente com Promise.all

updateUserInfo() — atualiza nome e sobre via PATCH

updateAvatar() — atualiza foto de perfil via PATCH

addCard() — adiciona novo cartão via POST

deleteCard() — exclui cartão via DELETE

likeCard() — curte cartão via PUT

unlikeCard() — remove curtida via DELETE

🗑️ Classe PopupWithConfirmation (herda Popup)

Novo popup de confirmação para exclusão de cartões.

Recebe um handler via setConfirmAction()

Executa a ação apenas se o usuário confirmar clicando em "Sim"

🃏 Classe Card (atualizada)

Agora recebe \_id, isLiked e owner do servidor.

Renderiza o ícone de curtida corretamente ao carregar

Delega as ações de curtir e deletar para o index.js via callbacks

🪟 Classe PopupWithForm (atualizada)

Novo método renderLoading(isLoading) que altera o texto do botão para "Salvando..." durante requisições e restaura o texto original ao terminar.

👤 Classe UserInfo (atualizada)

Novo método setAvatar(link) para atualizar a foto de perfil na página.

🔧 Outros requisitos atendidos

Todas as requisições ao servidor são feitas exclusivamente pela classe Api

Respostas do servidor são sempre verificadas com res.ok

Erros são tratados com .catch() em todas as requisições

Os cartões são renderizados apenas após receber o id do usuário

Popup de avatar com efeito hover sobre a foto de perfil

Validação de formulários em todos os popups incluindo o de avatar

4️⃣ — Tecnologias utilizadas

HTML5
Estrutura semântica da aplicação.

CSS3
Estilização com BEM, media queries, grid, flexbox e responsividade completa.

JavaScript (ES6+)
Manipulação de DOM, modularização e orientação a objetos.

Programação Orientada a Objetos (OOP)
Classes separadas por responsabilidade: Card, Section, Popup, PopupWithImage, PopupWithForm, PopupWithConfirmation, UserInfo, Api.

JavaScript Assíncrono
Promises, .then(), .catch(), .finally() e Promise.all() para requisições paralelas.

API REST
Comunicação com servidor via fetch usando métodos GET, POST, PATCH, PUT e DELETE.

Autenticação por token
Token pessoal enviado no cabeçalho authorization em todas as requisições.

Validação de formulários
Implementada via FormValidator em todos os formulários da aplicação.

GitHub Pages
Hospedagem da versão final do projeto.

5️⃣ — Deploy do projeto

🔗 https://renatofalchi.github.io/web_project_around/
