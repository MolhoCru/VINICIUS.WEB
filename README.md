# Portfólio Pessoal

Site de portfólio criado para apresentar quem eu sou, o que estou estudando e os projetos que
desenvolvi durante o curso de Engenharia da Computação.

O projeto usa apenas **HTML, CSS e JavaScript puros**, sem frameworks e sem bibliotecas externas.
O CSS e o JavaScript ficam em arquivos separados e são ligados ao HTML pelas tags
`<link rel="stylesheet">` e `<script src>`.

---

## Sumário

1. [Sobre o projeto](#sobre-o-projeto)
2. [Tecnologias utilizadas](#tecnologias-utilizadas)
3. [Estrutura de arquivos](#estrutura-de-arquivos)
4. [Funcionalidades em JavaScript](#funcionalidades-em-javascript)
5. [Layout e design](#layout-e-design)
6. [Acessibilidade](#acessibilidade)
7. [Como executar](#como-executar)
8. [Como testar cada funcionalidade](#como-testar-cada-funcionalidade)
9. [Versionamento com Git e GitHub](#versionamento-com-git-e-github)
10. [Como personalizar](#como-personalizar)
11. [Limitações conhecidas](#limitações-conhecidas)
12. [Próximos passos](#próximos-passos)
13. [Aprendizados](#aprendizados)
14. [Autor](#autor)

---

## Sobre o projeto

Este portfólio nasceu como trabalho da disciplina de desenvolvimento web. A proposta era criar
um site com `index.html`, `style.css` e `script.js`, adicionar funcionalidades em JavaScript,
documentar tudo e publicar o código em um repositório no GitHub.

A página inicial reúne:

- uma apresentação com meu nome e uma frase animada;
- a lista de projetos, com filtro por categoria e janela de detalhes;
- as habilidades que estou desenvolvendo, com barras de nível;
- um formulário de contato com validação;
- opção de tema claro ou escuro.

---

## Tecnologias utilizadas

| Tecnologia | Para que foi usada |
| ---------- | ------------------ |
| HTML5 | Estrutura da página, formulário e janela de detalhes (`<dialog>`) |
| CSS3 | Cores, layout em grid e flexbox, temas, responsividade e animações |
| JavaScript | Todas as interações da página |
| Git | Controle de versão do código |
| GitHub | Hospedagem do repositório |
| VS Code | Editor de código e integração com o Git |

---

## Estrutura de arquivos

```
.
├── index.html        Página inicial (estrutura e conteúdo)
├── style.css         Estilos, temas e responsividade
├── script.js         Funcionalidades em JavaScript
├── README.md         Este arquivo
├── info.html         Página "Sobre mim" (versão anterior do projeto)
├── project.html      Página de projeto (versão anterior do projeto)
├── selectworks.html  Seleção de trabalhos (versão anterior do projeto)
└── assets/           Arquivos da versão anterior (CSS e JS usados pelas outras páginas)
```

Os três arquivos principais precisam ficar **na mesma pasta**. O `index.html` procura o
`style.css` e o `script.js` ao lado dele.

---

## Funcionalidades em JavaScript

Todas as funcionalidades estão no arquivo `script.js` e têm comentários explicando cada parte.

### 1. Tema claro e escuro

O botão do cabeçalho troca entre os dois temas. O JavaScript altera o atributo `data-theme` do
elemento `<html>`, e o CSS redefine as cores a partir dele. A escolha fica salva no
`localStorage`. Quando não há escolha salva, o site segue o tema do sistema do visitante.

### 2. Menu mobile

Em telas de até 720 px, o menu vira uma gaveta que abre e fecha pelo botão **Menu**. O botão
atualiza o atributo `aria-expanded`, e o menu fecha sozinho quando um link é escolhido.

### 3. Efeito de digitação

A frase "Sou ..." na página inicial é escrita e apagada letra por letra, alternando entre três
textos. A função `digitar()` usa `setTimeout` para controlar a velocidade. Quem prefere menos
movimento no sistema vê apenas a primeira frase, sem animação.

### 4. Filtro de projetos

Os botões **Todos**, **3D**, **Software** e **Hardware** mostram só os projetos da categoria
escolhida. Cada card tem o atributo `data-cat`, e o script compara esse valor com o
`data-filter` do botão clicado.

### 5. Janela de detalhes do projeto

Ao clicar em um card, abre-se uma janela com título, descrição e tecnologias do projeto. Ela usa
o elemento nativo `<dialog>`, que já bloqueia o resto da página e fecha com a tecla **Esc**.
Também fecha pelo botão **×** ou clicando fora da caixa. Os textos ficam em um objeto chamado
`projetos` dentro do `script.js`.

### 6. Validação do formulário

Antes de "enviar", o script confere os campos:

- **Nome:** pelo menos 3 caracteres.
- **E-mail:** formato válido, como `nome@exemplo.com`.
- **Mensagem:** pelo menos 10 caracteres.

Cada erro aparece abaixo do campo, com a borda destacada. Quando tudo está certo, aparece uma
mensagem de confirmação e o formulário é limpo.

### 7. Barra de progresso de leitura

Uma barra fina no topo da janela cresce conforme a página é rolada, mostrando quanto já foi
lido. O cálculo usa `scrollY` e a altura total da página.

### 8. Botão de voltar ao topo

Depois de rolar mais de 400 px, aparece um botão no canto da tela que leva de volta ao início
da página com rolagem suave.

### 9. Barras de habilidade animadas

Cada habilidade tem um nível guardado em `data-nivel`. Um `IntersectionObserver` percebe quando
o item aparece na tela e então preenche a barra até o nível indicado. A animação acontece só
uma vez.

### 10. Ano automático no rodapé

O ano do copyright é preenchido com `new Date().getFullYear()`, então não precisa ser atualizado
à mão.

---

## Layout e design

- **Cores:** azul-cobalto como destaque, amarelo para marcações e fundos azul-acinzentados.
- **Hero:** nome em tamanho grande sobre um fundo de papel quadriculado, feito só com CSS.
- **Projetos:** cards em grid que se ajusta sozinho ao tamanho da tela.
- **Temas:** todas as cores estão em variáveis CSS (`--bg`, `--ink`, `--accent` e outras), o que
  permite trocar o tema redefinindo apenas essas variáveis.
- **Responsividade:** o layout funciona de telas de celular até monitores grandes.

---

## Acessibilidade

- Foco do teclado sempre visível nos links, botões e campos.
- Botões reais (`<button>`) nos cards e filtros, que funcionam com **Tab** e **Enter**.
- Campos do formulário ligados aos seus rótulos com `label` e `for`.
- Mensagem de status do formulário anunciada por leitores de tela (`role="status"`).
- Animações desativadas quando o sistema pede menos movimento.
- Cores com bom contraste nos dois temas.

---

## Como executar

1. Baixe ou clone o repositório:

   ```
   git clone https://github.com/MolhoCru/VINICIUS.WEB.git
   ```

2. Abra a pasta no Visual Studio Code.
3. Abra o `index.html` no navegador. Se tiver a extensão **Live Server**, clique com o botão
   direito no arquivo e escolha **Open with Live Server**.

---

## Como testar cada funcionalidade

- [ ] **Tema:** clique em "Tema escuro", recarregue a página e confira se a escolha foi mantida.
- [ ] **Menu mobile:** diminua a janela até menos de 720 px e use o botão "Menu".
- [ ] **Digitação:** veja a frase do início ser escrita e apagada.
- [ ] **Filtro:** clique em "3D" e confira se só um projeto continua visível.
- [ ] **Janela:** clique em um card, depois feche com **×**, com **Esc** e clicando fora.
- [ ] **Formulário:** envie vazio e veja os erros; depois preencha certo e envie.
- [ ] **Progresso:** role a página e acompanhe a barra amarela no topo.
- [ ] **Topo:** role bastante e use o botão de voltar ao topo.
- [ ] **Habilidades:** role até a seção e veja as barras crescerem.
- [ ] **Rodapé:** confira se o ano está certo.

---

## Versionamento com Git e GitHub

Comandos usados no terminal do VS Code para versionar e publicar o projeto:

```
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/MolhoCru/VINICIUS.WEB.git
git push -u origin main
```

Para publicar melhorias depois:

```
git add .
git commit -m "Descreva aqui o que mudou"
git push
```

Também é possível fazer tudo pela aba **Controle do Código-Fonte** do VS Code: escolher os
arquivos, escrever a mensagem do commit e clicar em **Sincronizar alterações**.

---

## Como personalizar

- **Textos e projetos:** edite o `index.html` e o objeto `projetos` no `script.js`.
- **Cores:** altere as variáveis no início do `style.css`.
- **Frases animadas:** altere a lista `frases` no `script.js`.
- **Níveis de habilidade:** altere o valor de `data-nivel` em cada item.
- **Contatos:** troque `seuemail@exemplo.com` e os links de GitHub e LinkedIn pelos seus dados.

---

## Limitações conhecidas

- O formulário de contato **não envia** a mensagem para ninguém. Ele só valida e simula o envio.
  Para receber mensagens de verdade, seria preciso um serviço de e-mail ou um servidor.
- As páginas `info.html`, `project.html` e `selectworks.html` ainda usam o estilo da versão
  anterior e podem ter aparência diferente da página inicial.
- Os projetos mostrados são textos de exemplo, ainda sem imagens nem links reais.

---

## Próximos passos

- Colocar fotos e capturas de tela dos projetos, com texto alternativo.
- Levar o novo estilo para as demais páginas.
- Adicionar um campo de busca nos projetos.
- Publicar o site com o GitHub Pages.
- Ligar o formulário a um serviço de envio de e-mail.

---

## Aprendizados

Durante o projeto, pratiquei:

- separar estrutura, estilo e comportamento em arquivos diferentes;
- manipular elementos da página com JavaScript e tratar eventos de clique, rolagem e envio;
- usar variáveis CSS para criar temas;
- guardar informações no navegador com `localStorage`;
- organizar o trabalho com Git, commits e GitHub.

---

## Autor

**Grupo F** — estudante de Engenharia da Computação.

Projeto desenvolvido para fins de aprendizado e apresentação de trabalhos pessoais.
