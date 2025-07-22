# 🎨 Portfólio - Matteus Fernandes

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/matteusfernandes/portifolio/ci-cd.yml?branch=main&logo=github&label=CI%2FCD)](https://github.com/matteusfernandes/portifolio/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

Um portfólio moderno e interativo desenvolvido com Next.js 15, Tailwind CSS v4 e TypeScript, apresentando animações de typewriter e elementos visuais inspirados em código. Projeto construído seguindo design do Figma e as melhores práticas de desenvolvimento.

## 🌟 Demonstração

> 🚀 **[Ver Portfolio ao Vivo →](https://portifolio-matteusfernandes.vercel.app)**

![Portfolio Preview](docs/preview.png)

## ✨ Características

- 🚀 **Next.js 15** - Framework React de última geração com App Router
- 🎨 **Tailwind CSS v4** - Styling utilitário moderno e responsivo
- 📝 **TypeScript** - Type safety completo e melhor developer experience
- 🎯 **Design System** - Implementação fiel às especificações do Figma
- ⌨️ **Animações Typewriter** - Efeitos de digitação para simular código
- 🎭 **Animações Controladas** - Sistema anti-repetição para melhor UX
- 📱 **Responsive Design** - Otimizado para todos os dispositivos
- ⚡ **Performance** - Otimizado para velocidade, SEO e acessibilidade
- 🔧 **CI/CD Pipeline** - Deploy automatizado com GitHub Actions
- 🧪 **Quality Assurance** - ESLint, Prettier e testes automatizados

## 🛠️ Stack Tecnológica

```json
{
  "framework": "Next.js 15.4.2",
  "styling": "Tailwind CSS v4",
  "language": "TypeScript",
  "runtime": "Node.js 18+",
  "font": "Fira Code",
  "animations": "Custom CSS + React Hooks",
  "cicd": "GitHub Actions",
  "deployment": "Vercel",
  "quality": "ESLint + Prettier"
}
```

## 🎨 Funcionalidades Interativas

### Animações Typewriter
- ⌨️ **Texto de Saudação**: Animação character-by-character
- 🏷️ **Nome**: Efeito de digitação com cursor piscante
- 💻 **Comentários de Código**: Simulação de IDE com syntax highlighting
- 🎯 **Execução Única**: Sistema anti-repetição para melhor performance

### Componentes Animados
- 📦 **AnimatedElement**: Wrapper para animações controladas
- ⌨️ **TypewriterText**: Componente reutilizável para efeitos de digitação
- 🪝 **useTypewriter**: Hook customizado para controle de estado
- 🔄 **useAnimateOnce**: Hook para prevenir re-execução de animações

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/matteusfernandes/portifolio.git

# Entre na pasta
cd portifolio

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📁 Estrutura do Projeto

```
portifolio/
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # Pipeline CI/CD
├── docs/                       # Documentação e assets
├── public/                     # Assets estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── favicon.ico
│   │   ├── globals.css         # Estilos globais e animações
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.module.css     # Estilos específicos da home
│   │   └── page.tsx            # Página inicial com animações
│   ├── components/             # Componentes reutilizáveis
│   │   ├── AnimatedElement.tsx # Wrapper para animações controladas
│   │   ├── Navigation.tsx      # Navegação com bordas e estados
│   │   ├── Footer.tsx          # Footer com links sociais tipados
│   │   └── TypewriterText.tsx  # Componente de animação typewriter
│   ├── hooks/                  # Hooks customizados
│   │   ├── useAnimateOnce.ts   # Previne re-execução de animações
│   │   └── useTypewriter.ts    # Controla efeito de digitação
│   └── types/                  # Definições TypeScript
├── eslint.config.mjs           # Configuração ESLint
├── next.config.ts              # Configuração Next.js
├── package.json                # Dependências e scripts
├── tailwind.config.ts          # Configuração Tailwind CSS
└── tsconfig.json               # Configuração TypeScript
```

## 🎨 Design System

### Tipografia
- **Nome Display**: `Fira Code 113.64px` - Título principal com animação
- **Navegação**: `Fira Code 15px` - Links de navegação
- **Subtítulo**: `Fira Code 18px` - Textos secundários 
- **Código**: `Fira Code 14px` - Snippets e comentários animados

### Paleta de Cores
```css
:root {
  /* Cores Principais */
  --text-primary: #8896b0;      /* Texto principal */
  --background: #0a0a0a;        /* Fundo escuro */
  
  /* Accent Colors */
  --accent-orange: #f4b460;     /* Sandy Brown */
  --accent-purple: #5b52ff;     /* Blue Violet */
  --accent-teal: #4cc7b1;       /* Medium Turquoise */
  --accent-pink: #f29ca5;       /* Light Pink */
  
  /* Estados e Bordas */
  --border-color: #333;         /* Bordas dos containers */
  --hover-bg: rgba(255,255,255,0.05); /* Hover states */
}
```

### Animações CSS
```css
/* Typewriter Cursor */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Fade In Elements */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento (localhost:3000)
npm run build        # Build otimizado para produção
npm start           # Servidor de produção local
npm run lint        # Verificação de código com ESLint
npm run lint:fix    # Correção automática de problemas ESLint

# Qualidade de Código
npm run type-check  # Verificação de tipos TypeScript
npm run format      # Formatação com Prettier
npm test           # Execução de testes (se configurados)
```

## 🚀 Deploy e CI/CD

### Pipeline Automatizado
O projeto inclui um pipeline CI/CD completo com GitHub Actions:

- ✅ **Lint**: Verificação de qualidade de código
- 🏗️ **Build**: Compilação e otimização
- 🧪 **Test**: Execução de testes automatizados
- 🚀 **Deploy**: Deploy automático para Vercel na branch main

### Deploy Manual
```bash
# Via Vercel CLI
npm i -g vercel
vercel --prod

# Via GitHub
git push origin main  # Deploy automático ativado
```

## 📦 Dependências

### Principais
```json
{
  "next": "15.4.2",              // Framework React full-stack
  "react": "19.0.0",             // Biblioteca para interfaces
  "react-dom": "19.0.0",         // React DOM renderer
  "typescript": "^5.7.3"         // Superset tipado do JavaScript
}
```

### Styling
```json
{
  "tailwindcss": "^4.0.0",       // Framework CSS utilitário
  "@tailwindcss/typography": "^0.5.10" // Plugin para tipografia
}
```

### Desenvolvimento
```json
{
  "@types/node": "^22.10.2",     // Tipos TypeScript para Node.js
  "@types/react": "^19.0.2",     // Tipos TypeScript para React
  "@types/react-dom": "^19.0.2", // Tipos TypeScript para React DOM
  "eslint": "^9.17.0",           // Linter para qualidade
  "eslint-config-next": "15.4.2" // Config ESLint para Next.js
}
```

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Vercel (para deploy)
VERCEL_TOKEN=seu_token_vercel
ORG_ID=seu_org_id
PROJECT_ID=seu_project_id

# Opcional: Analytics
NEXT_PUBLIC_GA_ID=seu_google_analytics_id
```

### Configuração TypeScript
O projeto usa configuração strict do TypeScript:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são sempre bem-vindas!

### Como Contribuir
1. 🍴 **Fork** o projeto
2. 🌟 **Clone** seu fork
3. 🔧 **Crie** uma branch para sua feature (`git checkout -b feature/nova-feature`)
4. ✨ **Implemente** suas mudanças
5. 🧪 **Teste** suas alterações (`npm run lint && npm run build`)
6. 📝 **Commit** suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
7. 🚀 **Push** para a branch (`git push origin feature/nova-feature`)
8. 📬 **Abra** um Pull Request

### Padrões de Commit
Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: mudanças de formatação
refactor: refatoração de código
test: adição de testes
chore: tarefas de manutenção
```

### Reportar Issues
- 🐛 **Bugs**: Descreva o problema e como reproduzi-lo
- 💡 **Features**: Explique a funcionalidade desejada
- 📖 **Documentação**: Sugira melhorias na documentação

## � Status do Projeto

![GitHub last commit](https://img.shields.io/github/last-commit/matteusfernandes/portifolio)
![GitHub repo size](https://img.shields.io/github/repo-size/matteusfernandes/portifolio)
![GitHub language count](https://img.shields.io/github/languages/count/matteusfernandes/portifolio)
![GitHub top language](https://img.shields.io/github/languages/top/matteusfernandes/portifolio)

### Roadmap
- [x] ✅ Design System implementation
- [x] ✅ Responsive Navigation
- [x] ✅ Footer with social links
- [x] ✅ Typewriter animations
- [x] ✅ TypeScript strict mode
- [x] ✅ CI/CD Pipeline
- [x] ✅ Deploy to Vercel
- [ ] 🔄 About section
- [ ] 🔄 Projects showcase
- [ ] 🔄 Contact form
- [ ] 🔄 Blog integration
- [ ] 🔄 Dark/Light theme toggle
- [ ] 🔄 Internationalization (i18n)

## �📄 Licença

Este projeto está sob a licença **MIT**. Isso significa que você pode:

- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar em projetos privados

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato & Links

### 👨‍💻 Desenvolvedor
**Matteus Fernandes** - Full Stack Developer

### 🌐 Redes Sociais
- 📧 **Email**: [matteus_gbi@hotmail.com](mailto:matteus_gbi@hotmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/matteusfernandes](https://linkedin.com/in/matteusfernandes)
- 🐙 **GitHub**: [github.com/matteusfernandes](https://github.com/matteusfernandes)
- 🌍 **Portfolio**: [portifolio-matteusfernandes.vercel.app](https://portifolio-matteusfernandes.vercel.app)

### 🔗 Recursos Úteis
- 📋 **Figma Design**: Link do design original
- 📖 **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- 🎨 **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- 📘 **TypeScript**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs)

---

<div align="center">

### ⭐ Se este projeto te ajudou ou inspirou, considere deixar uma estrela!

**Feito com ❤️ por [Matteus Fernandes](https://github.com/matteusfernandes)**

![Visitor Count](https://komarev.com/ghpvc/?username=matteusfernandes&repo=portifolio&color=blue&style=flat)

</div>
