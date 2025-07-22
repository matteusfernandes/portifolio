# Git Hooks Configuration

Este diretório contém hooks do Git para manter a qualidade do código.

## Pre-commit

O hook de pre-commit executa verificações antes de cada commit:

- Linting com ESLint
- Formatação com Prettier
- Verificação de tipos TypeScript

## Commit-msg

O hook de commit-msg valida se a mensagem segue o padrão Conventional Commits.
