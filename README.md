# 🥜 In a Nutshell - Coach Mode

Um jogo interativo de perguntas e respostas no estilo "Coach Mode", onde o Jogador 1 controla as pistas e o Jogador 2 tenta adivinhar a resposta.

## 🎮 Como Funciona

### Jogador 1 (Coach)

- Controla quais palavras da pergunta são reveladas
- Pode revelar ou esconder palavras individualmente clicando nelas
- Pode mostrar/esconder a resposta completa
- Tem botões para revelar ou esconder todas as palavras de uma vez

### Jogador 2 (Adivinhador)

- Tenta adivinhar a resposta com base nas palavras reveladas
- Digita sua resposta no campo de texto
- Recebe feedback imediato se acertou ou errou

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool rápido e moderno
- **CSS3** - Estilização com gradientes e animações

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta do projeto
cd in-a-nutshell

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O jogo estará disponível em `http://localhost:5173/`

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── WordBox.tsx    # Caixa individual de palavra
│   ├── QuestionDisplay.tsx  # Display da pergunta
│   ├── AnswerSection.tsx    # Seção de mostrar/esconder resposta
│   └── GuessInput.tsx       # Input para o palpite do jogador 2
├── data/
│   └── questions.ts   # Base de perguntas
├── types/
│   └── index.ts       # Definições de tipos TypeScript
├── App.tsx            # Componente principal
├── App.css            # Estilos do jogo
└── main.tsx           # Ponto de entrada
```

## 🎯 Funcionalidades

- ✅ Revelar/esconder palavras individualmente
- ✅ Mostrar/esconder resposta completa
- ✅ Input para palpite do jogador 2
- ✅ Validação de resposta com feedback visual
- ✅ Botão para gerar nova pergunta
- ✅ Botões para revelar/esconder todas as palavras
- ✅ Sistema de categorias
- ✅ Design responsivo

## 🎨 Personalização

### Adicionar Novas Perguntas

Edite o arquivo `src/data/questions.ts`:

```typescript
export const questions: Question[] = [
  {
    id: '6',
    text: 'Sua nova pergunta aqui?',
    words: ['Sua', 'nova', 'pergunta', 'aqui?'],
    answer: 'Resposta',
    category: 'Categoria',
  },
  // ... mais perguntas
];
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
