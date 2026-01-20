# Vue 3 Api Imitation — Forms + Modal

Тестовый проект на **Vue 3**, демонстрирующий работу с интерактивными формами в modal (popup) с использованием **Bootstrap**, **Font Awesome** и **Pinia**.  
Backend отсутствует — используется имитация API-запросов.

---

## Стек

- **Vue 3** (Composition API, `<script setup>`)
- **Pinia** — управление состоянием
- **Bootstrap 5** — стили и modal
- **Font Awesome** — иконки
- **Vite** — сборщик

---

## Функциональность

- Две интерактивные формы:
  - **Форма авторизации**
  - **Форма регистрации**
- Формы открываются в **popup (Bootstrap Modal)**
- Работа с полями через `v-model`
- Имитация API-запроса (`Promise + setTimeout`)
- Состояние (loading, user) хранится в **Pinia**
- Отображение JSON-ответа после успешной отправки формы

---

## Структура проекта

```text
src/
├─ main.js
├─ App.vue
├─ stores/
│ └─ authStore.js
├─ components/
│ ├─ LoginModal.vue
│ ├─ RegisterModal.vue
│ └─ UserInfo.vue
├─ assets/
│ └─ Logo.png
```

---

## Project setup

```

npm install

```

### Compiles and hot-reloads for development

```

npm run serve

```

### Compiles and minifies for production

```

npm run build

```

```

```

```

```
