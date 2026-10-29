# Roteiros de Estudo

Site do projeto **Roteiros de Estudo**, que apoia alunos do 6º ao 9º ano da rede municipal fora da sala de aula. O aluno escolhe a disciplina e o ano e encontra roteiros de estudo gerados por IA e revisados por professores. O professor pode simular o pedido de um novo roteiro.

Projeto da Atividade Avaliativa A2 (Desenvolvimento Web), feito em dupla:

- João Lucas Damato Drummond (2320681)
- João Pedro de Oliveira Mendes Sereno (2453231)

## Funcionalidades

- **Página inicial:** lista os roteiros e permite filtrar por disciplina e por ano escolar.
- **Página do roteiro (`/roteiros/[id]`):** mostra título, tema, tempo estimado, conteúdo, questões de fixação com resposta, aviso de que o material foi gerado por IA e os dados do professor revisor (nome, disciplina e escola). Um id inexistente leva à página 404.
- **Material complementar:** resumo do artigo da Wikipédia sobre o tema, com estados de carregamento, erro e sucesso. Se a API falhar, o roteiro continua sendo exibido normalmente.
- **Solicitar roteiro (`/solicitar`):** formulário com validação (quantidade de questões de 3 a 10 e data com pelo menos 7 dias de antecedência). O envio é apenas simulado e nenhum dado é enviado a servidor.

## Tecnologias

- Next.js (App Router) e React, exportados como site estático
- Dados do domínio em arquivos JSON (`data/disciplinas.json` e `data/roteiros.json`)
- CSS puro (`app/globals.css`), sem bibliotecas de componentes
- API externa: [API da Wikipédia em português](https://pt.wikipedia.org/w/api.php), pública e sem chave de acesso

## Como executar

É necessário ter o Node.js instalado.

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Como gerar o build estático

```bash
npm run build
```

O site estático é gerado na pasta `out/` (o `next.config.mjs` usa `output: "export"`). Para ver o resultado:

```bash
npx serve out
```

Abra o endereço indicado no terminal.

## Estrutura do projeto

```
app/
  layout.js            layout geral (cabeçalho e rodapé)
  page.js              página inicial com filtros
  globals.css          estilos
  roteiros/[id]/page.js  página dinâmica de cada roteiro
  solicitar/page.js    página do formulário
components/
  Header.jsx, Filtros.jsx, RoteiroCard.jsx, DetalhesRoteiro.jsx,
  QuestaoCard.jsx, TextoApoio.jsx, FormularioSolicitacao.jsx
data/
  disciplinas.json, roteiros.json
lib/
  wikipedia.js         consulta à API da Wikipédia
```

## Relatório de execução

O relatório com o plano, o que foi realizado e as mudanças em relação ao protótipo está disponível em PDF: [ATV2 - Web.pdf](https://github.com/user-attachments/files/34108115/ATV2.-.Web.pdf)
