# Error Copy

## Base Structure

Good error copy answers:

1. What happened.
2. What the user can do.
3. What happens next or who can help, if known.

Do not overexplain technical causes unless they change the user's action.

## Tone

Avoid:
- "Ой";
- "К сожалению";
- "Извините";
- "Что-то пошло не так" without a concrete recovery action;
- jokes or exaggerated calm.

Prefer:
- "Не загрузилось. Попробуйте снова";
- "Нет доступа к документу";
- "Не удалось подключиться к интернету";
- "Страница не найдена";
- "Сервис временно недоступен. Попробуйте позже".

## Error Types

### Access

Use when the user lacks permission or the object is unavailable to them.

Pattern:
- title: "Нет доступа";
- body: why at user level, not internal role mechanics;
- action: request access, switch account, go back, or contact owner if real.

### Loading

Use when content failed to load.

Pattern:
- title: "Не загрузилось";
- action: "Попробовать снова";
- body only if the scope matters: "Не загрузились операции за месяц".

### Connection

Use only when evidence points to connectivity.

Pattern:
- title: "Нет подключения к интернету";
- action: "Проверить подключение" or "Повторить";
- avoid blaming Wi-Fi/mobile network unless known.

### Mass Outage

Use when the service is degraded for many users.

Pattern:
- title: "Сервис временно недоступен";
- body: what is affected and when to retry if known;
- action: secondary path only when it works.

### Universal

Use when the system cannot identify the cause.

Pattern:
- title: "Не получилось";
- body: concrete action: retry, go back, refresh, contact support.

### Contextual

Use near a field or action.

Pattern:
- say exactly what to fix: "Введите 6 цифр", "Дата не может быть раньше сегодняшней";
- avoid generic "Некорректное значение".

### 404

Pattern:
- title: "Страница не найдена";
- body: "Возможно, ссылка устарела или в адресе ошибка";
- action: "На главную" or "Вернуться назад".
