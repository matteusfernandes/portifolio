# Conventional Commits

Este projeto segue a especificação [Conventional Commits](https://www.conventionalcommits.org/) para padronizar as mensagens de commit.

## Formato

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Tipos

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação, ponto e vírgula, etc
- **refactor**: Refatoração sem mudança de funcionalidade
- **test**: Adição ou correção de testes
- **chore**: Tarefas de build, dependências, etc

## Exemplos

```bash
feat: adiciona componente de navegação
fix: corrige alinhamento do footer
docs: atualiza README com instruções de setup
style: aplica formatação do Prettier
refactor: organiza estrutura de componentes
test: adiciona testes para Navigation component
chore: atualiza dependências do projeto
```

## Scopes Sugeridos

- `ui`: Interface do usuário
- `api`: Endpoints e integração
- `config`: Configurações
- `deploy`: Deploy e CI/CD
- `deps`: Dependências
