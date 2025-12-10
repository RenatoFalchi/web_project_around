# Tripleten web_project_around

Sprint 11 — Programação Orientada a Objetos e Refatoração
1️⃣ — Projeto: Sprint 11 — Renato Falchi Correia de Oliveira

Este projeto dá continuidade ao desenvolvimento do Around The U.S., agora com foco em refatoração avançada, Programação Orientada a Objetos (OOP) e organização modular do código.
A Sprint 11 introduz diversas novas classes, substituindo blocos de código procedurais por estruturas orientadas a objetos mais reutilizáveis, escaláveis e fáceis de manter.

2️⃣ — Objetivo do projeto

Refatorar e modularizar a aplicação adicionando as seguintes funcionalidades por meio de classes dedicadas, cada uma responsável por uma parte específica da lógica:

Criar e renderizar elementos na página usando a classe Section

Gerenciar popups com a classe genérica Popup

Criar popups especializados:

PopupWithImage para exibir imagens ampliadas

PopupWithForm para formulários

Manipular dados do usuário com a classe UserInfo

Conectar a classe Card aos popups usando o callback handleCardClick()

O resultado final é um projeto bem estruturado, com todas as funcionalidades encapsuladas, seguindo princípios de SRP (Single Responsibility Principle) e boas práticas de OOP.

3️⃣ — Funcionalidades implementadas com classes
🧩 Classe Section

Responsável por renderizar listas de elementos na página.

Recebe items (array) e renderer (callback) no construtor.

Renderiza todos os elementos com renderItems().

Insere novos cards dinamicamente com addItem().

🪟 Classe Popup

Classe base para todos os popups.
Implementa:

open() e close()

Fechamento via tecla Escape

Fechamento ao clicar na sobreposição

setEventListeners() para adicionar eventos globais ao popup

🖼️ Classe PopupWithImage (herda Popup)

Controla o popup de visualização de imagens.

Sobrescreve open() para inserir imagem e legenda dinamicamente.

📝 Classe PopupWithForm (herda Popup)

Gerencia popups com formulários.

Recebe callback de submit no construtor

Implementa \_getInputValues() para coletar dados

Adiciona evento de submit ao formulário

Sobrescreve close() para limpar o formulário após envio

👤 Classe UserInfo

Responsável pelo gerenciamento de dados do usuário:

Obtém informações do usuário com getUserInfo()

Atualiza nome e ocupação com setUserInfo()

Sincroniza dados exibidos na interface com o popup de edição

🃏 Classe Card (refatorada)

Agora recebe a função handleCardClick() no construtor.

Ao clicar na imagem, abre o popup de visualização usando o popup de imagem.

🔧 Outros requisitos atendidos

Todo código orientado a objetos está isolado em arquivos próprios

O arquivo index.js agora é responsável apenas pela criação das instâncias e addEventListeners

Lógica repetitiva foi eliminada

Componentes independentes se comunicam apenas via callbacks

Código mais limpo, organizado e escalável

4️⃣ — Tecnologias utilizadas

HTML5
Estrutura semântica da aplicação.

CSS3
Estilização com BEM, media queries, grid, flexbox e responsividade completa.

JavaScript (ES6+)
Manipulação de DOM, modularização e orientação a objetos.

Programação Orientada a Objetos (OOP)
Classes separadas por responsabilidade: Card, Section, Popup, PopupWithImage, PopupWithForm, UserInfo.

Validação de formulários
Mantida da sprint anterior via FormValidator.

Webpack / caminho modular (caso use)
Imports e organização de componentes.

GitHub Pages
Hospedagem da versão final do projeto.

5️⃣ — Deploy do projeto

🔗 https://renatofalchi.github.io/web_project_around/
