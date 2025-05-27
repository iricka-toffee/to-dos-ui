# AI Development Guide

## Общие правила

- Используйте подход TDD/BDD: сначала пишите тест, затем минимальную реализацию.
- Каждый тест для нового поведения — в отдельном файле.
- Соблюдайте структуру: state, context, container, content.
- Оформляйте коммиты в стиле Atomic Conventional Commits.
- После каждого шага обсуждайте дальнейший план и архитектуру.
- Все изменения оформляйте в виде диалога: тест → реализация → коммит → обсуждение следующего шага.

## Пример диалога

1. **Пишем тест**
   - Новый файл с тестом для одного поведения.
2. **Минимальная реализация**
   - Только чтобы тест прошёл.
3. **Коммит**
   - Краткое и структурированное описание изменений.
4. **План**
   - Обсуждение следующих шагов, корректировка плана при изменении требований.

## Пример Conventional Commit

```
feat(request-form): add type select options and mobx state change on select

- add select options for all item types in RequestFormContent
- implement onChange handler to update mobx state via changeType
- add Cypress test to verify type selection updates mobx state
```

## Структура компонентов

- **state/** — mobx-состояние и методы изменения
- **state/Context.ts** — React Context для mobx-state
- **Content.tsx** — только отображение и обработка пользовательского ввода
- **Container.tsx** — связывает state, context и content, обрабатывает submit/API

## Рекомендации

- Для backend используйте аналогичный стиль: сначала тест (например, на endpoint), затем минимальная реализация, затем коммит.
- Следите за единообразием структуры и оформления в обеих частях проекта.
