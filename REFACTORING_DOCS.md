# Documentação da R```
src/
├── components/
│   ├── projetos/                    # Componentes específicos da página projetos
│   │   ├── ProjectFilters.tsx       # Filtros de categoria/tecnologia
│   │   ├── ProjectGrid.tsx          # Grid de projetos + empty state
│   │   ├── ProjectCard.tsx          # Card individual de projeto
│   │   ├── ProjectSkillsSidebar.tsx # Sidebar esquerda com skills
│   │   ├── ProjectDetailsSidebar.tsx# Sidebar direita com detalhes
│   │   └── index.ts                 # Barrel exports
│   ├── sobre-mim/                   # Componentes específicos da página sobre-mim
│   ├── Navigation.tsx               # Componentes gerais
│   ├── Footer.tsx
│   ├── AnimatedElement.tsx
│   └── index.ts                     # Barrel exports geral
├── data/
│   ├── projects.ts                  # Dados e interfaces
│   └── index.ts                     # Barrel exports
├── hooks/
│   ├── useProjectFilters.ts         # Custom hook para filtros
│   └── index.ts                     # Barrel exports
├── utils/
│   ├── skillIcons.tsx               # Utilitários de ícones
│   └── index.ts                     # Barrel exports
└── app/projetos/page.tsx            # Página principal refatorada
```ção - Página de Projetos

## Visão Geral
A página de projetos foi refatorada para melhorar a manutenibilidade, legibilidade e organização do código. A estrutura monolítica foi dividida em componentes menores e mais focados.

## Estrutura de Arquivos

### 📁 `/src/data/`
- **`projects.ts`** - Dados dos projetos e interface TypeScript
- **`index.ts`** - Arquivo barrel para facilitar importações

### 📁 `/src/utils/`
- **`skillIcons.tsx`** - Utilitários para ícones de habilidades
- **`index.ts`** - Arquivo barrel para utilitários

### 📁 `/src/hooks/`
- **`useProjectFilters.ts`** - Hook customizado para gerenciamento de filtros
- **`index.ts`** - Arquivo barrel para hooks

### 📁 `/src/componentes/projetos/`
- **`ProjectFilters.tsx`** - Componente de filtros (categoria e tecnologia)
- **`ProjectGrid.tsx`** - Grid de projetos com estado vazio
- **`ProjectCard.tsx`** - Card individual de projeto
- **`ProjectSkillsSidebar.tsx`** - Sidebar esquerda com skills e contato
- **`ProjectDetailsSidebar.tsx`** - Sidebar direita com detalhes do projeto
- **`index.ts`** - Arquivo barrel para componentes de projetos

## Componentes

### 🔧 **ProjectFilters**
**Responsabilidade:** Renderizar filtros de categoria e tecnologia
- Props: categories, technologies, selected values, handlers
- Features: Dropdown filters, counter de resultados, botão de reset

### 🎯 **ProjectGrid**
**Responsabilidade:** Renderizar grid de projetos ou estado vazio
- Props: projects, selectedProject, handlers
- Features: Grid responsivo, empty state, seleção de projeto

### 🃏 **ProjectCard**
**Responsabilidade:** Card individual de projeto
- Props: project, isSelected, onSelect
- Features: Preview, badges, chips de tecnologia, hover effects

### 📋 **ProjectSkillsSidebar**
**Responsabilidade:** Sidebar esquerda com skills do projeto selecionado
- Props: selectedProject
- Features: Grid de skills com ícones, seção de contato

### 📄 **ProjectDetailsSidebar**
**Responsabilidade:** Sidebar direita com detalhes completos
- Props: selectedProject, handlers para GitHub/Demo
- Features: Preview grande, botões de ação, cards informativos

## Hooks Customizados

### 🪝 **useProjectFilters**
**Responsabilidade:** Gerenciar estado e lógica dos filtros
- Estado: selectedCategory, selectedTech, filteredProjects
- Features: Filtros memoizados, extração de categorias/tecnologias únicas
- Retorna: Valores de estado, handlers, dados processados

## Utilitários

### 🎨 **getSkillIcon**
**Responsabilidade:** Retornar ícone e cor para cada skill
- Input: Nome da skill (string)
- Output: { icon: ReactElement, color: string }
- Features: Mapeamento de skills para ícones SVG/texto e cores

## Interface TypeScript

### 📝 **Project**
```typescript
interface Project {
  id: number;
  name: string;
  tech: string;
  description: string;
  skills: string[];
  detailedDescription: string;
  longDescription: string;
  category: string;
  developedSkills: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}
```

## Benefícios da Refatoração

### ✅ **Manutenibilidade**
- Componentes pequenos e focados
- Responsabilidades bem definidas
- Fácil localização de bugs

### ✅ **Reutilização**
- Componentes podem ser reutilizados
- Hooks personalizados reutilizáveis
- Utilitários compartilhados

### ✅ **Testabilidade**
- Componentes isolados
- Logic separada da apresentação
- Mocking mais fácil

### ✅ **Legibilidade**
- Arquivos menores
- Nomes descritivos
- Imports organizados

### ✅ **Escalabilidade**
- Fácil adicionar novos projetos
- Extensível para novas features
- Estrutura consistente

## Como Adicionar Novos Projetos

1. **Adicionar dados** em `src/data/projects.ts`
2. **Skills novas** adicionar em `src/utils/skillIcons.tsx`
3. **Componentes** são automaticamente atualizados

## Padrões Utilizados

- **Barrel Exports** - Arquivos index.ts para imports limpos
- **Custom Hooks** - Lógica reutilizável
- **Component Composition** - Componentes pequenos e focados
- **TypeScript** - Type safety em toda aplicação
- **Props Interface** - Definições claras de props
- **Separation of Concerns** - Dados, lógica e apresentação separados
- **Page-based Organization** - Componentes organizados por página/feature

## Organização por Páginas

A estrutura de componentes segue o padrão de organização por páginas/features:

```
src/components/
├── projetos/           # Todos os componentes da página projetos
├── sobre-mim/          # Todos os componentes da página sobre-mim
├── Navigation.tsx      # Componentes compartilhados
├── Footer.tsx          # Componentes compartilhados
└── AnimatedElement.tsx # Componentes compartilhados
```

### Benefícios da Organização por Páginas:
- **Localização** - Fácil encontrar componentes relacionados
- **Escalabilidade** - Cada nova página tem sua própria pasta
- **Manutenção** - Mudanças isoladas por feature
- **Colaboração** - Times podem trabalhar em features separadas
- **Modularidade** - Componentes page-specific vs compartilhados

## Performance

- **Memoização** - Hook usa useMemo para filtros
- **Componentes otimizados** - Evita re-renders desnecessários  
- **Lazy evaluation** - Filtros processados apenas quando necessário
