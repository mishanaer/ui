# Component Rules

## Headings And Subheadings

The heading carries the main meaning. The subheading explains, narrows, or adds conditions.

Rules:

- Put the user's current situation or next action in the heading.
- Do not use empty headings: `Ошибка`, `Внимание`, `Информация`.
- Do not split one sentence mechanically between heading and subheading.
- Prefer each visible text block to be a separate unit of meaning.

Bad:

- Heading: `Внимание!`
- Body: `Ваши счета ограничены по требованию суда`

Better:

- Heading: `Счета арестованы`
- Body: `Пока арест не снимут, ими нельзя пользоваться`

## Buttons

A button is the user's reply or command.

Use an infinitive for actions:

- `Оплатить`
- `Добавить`
- `Продолжить`
- `Отменить подписку`

Use an acknowledgement word when the user only confirms that they read something:

- `Понятно`
- `Хорошо`
- `Спасибо`

Check the dialogue:

- Product: `Мы приняли вашу заявку`
- User: `Хорошо, спасибо`

Avoid buttons that sound like product speech, a decorative reaction, or a mismatched joke.

## Heading + Button Syntax

Read the heading and the primary button without the body copy. If the pair is unclear, the screen is unclear.

Bad:

- Heading: `Какой вы Дед Мороз?`
- Button: `Бегу`

Better:

- Heading: `Какой вы Дед Мороз?`
- Button: `Узнать`

## Links

A link should explain where it leads. Do not use `тут`, `здесь`, `сюда`, or `подробнее` as the only linked text.

Bad: `Подробнее здесь`

Better: `Условия подписки`

Make the linked phrase short, usually 1-3 words.

## Inputs, Labels, Placeholders

Labels and placeholders name the data, not the act of typing.

Bad: `Введите адрес`

Better: `Адрес`

Bad: `Поиск по названию или ИНН`

Better: `Поставщик или ИНН`

Add a hint only when it explains why the data is needed, what format works, or what will happen next.

## Tooltips And Hints

Tooltips add optional context. Do not hide critical information in them.

Never hide these only in a tooltip:

- commission;
- legal consent;
- deadline;
- destructive result;
- privacy-sensitive explanation;
- core action.

## Alerts And Informers

Use alerts for important product states, risks, limits, status changes, and blockers.

A good alert says:

- what happened;
- why it matters;
- what the user can or should do.

Do not start with `Внимание!` when the heading can state the actual problem.

## Snackbars And Notifications

Snackbars and notifications disappear quickly. Keep them short enough to read at a glance.

Use them for:

- immediate feedback;
- short status changes;
- lightweight undo or details links.

Do not put long explanations or critical legal information in disappearing messages.

## Empty States

An empty state should explain why the area is empty and what happens next.

Bad: `Нет данных`

Better: `Здесь появятся ваши платежи. Добавьте первый платеж или вернитесь позже`

## Errors

An error is a recovery point, not a blame message.

Write:

- what happened;
- what the user can do;
- what to expect next, if known.

Bad: `Вы неправильно ввели пароль`

Better: `Пароль не подошел. Проверьте раскладку или восстановите доступ`

Bad: `Что-то пошло не так`

Better: `Не получилось загрузить данные. Проверьте интернет и попробуйте еще раз`

## Success States

Confirm the result without exaggerated excitement.

Bad: `Ура! Заявка отправлена!`

Better: `Заявка отправлена`

Add the next step when it matters:

`Заявка отправлена. Ответ придет в пуше или СМС`

## Legal UI Copy

Legal text inside a UI flow should remain accurate but still be readable.

When editing:

- do not remove legal conditions;
- keep document names and required links;
- add a plain-language explanation if the legal sentence cannot be simplified;
- mark meaning-changing edits as `needs legal review`.

## Typography

Use typography to reduce friction:

- format money as `1 250 ₽`;
- avoid ambiguous dates when timing matters;
- group codes and phone numbers for reading;
- keep short prepositions and conjunctions with the next word;
- use quotation marks, dashes, and punctuation consistently inside one product.
