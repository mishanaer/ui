# Component Patterns

## Headings

Purpose: orient the user in a screen or state.

Pattern:
- noun phrase, short statement, or useful question;
- no period at the end of short headings;
- subheading may complete the heading's thought.

Avoid:
- vague headings: "Важно", "Информация", "Внимание";
- decorative excitement;
- repeating the same noun in heading and subheading.

## Buttons

Purpose: express the user's action and set an expectation.

Pattern:
- action verb: "Сохранить", "Удалить", "Продолжить";
- state-changing action first;
- destructive action must be explicit.

Avoid:
- "Хочу ...";
- system present tense: "Сохраняю", "Удаляем";
- "Я понял";
- "ОК" when "Понятно", "Хорошо", or a concrete action is clearer;
- long explanations inside the button.

## Links

Purpose: navigate to a specific object, explanation, or action.

Pattern:
- name the destination: "Подробнее о тарифе", "Условия акции";
- avoid "здесь", "тут", "по ссылке" as the only link text.

## Labels And Placeholders

Purpose: identify what data belongs in a field.

Pattern:
- label: noun phrase, usually "Номер телефона", "Комментарий", "Дата рождения";
- optional field: "Отчество, если есть";
- placeholder: example or format hint only when it helps avoid an error.

Avoid:
- "Введите", "Напишите", "Начните писать";
- placeholder that duplicates a visible label;
- mandatory instruction hidden only in placeholder.

## Tooltips And Hints

Purpose: add secondary explanation.

Pattern:
- one concise clarification;
- no required condition hidden in tooltip;
- put mandatory, legal, or risk information on the screen.

## Alerts

Purpose: interrupt or update the user when something changed or needs attention.

Pattern:
- title: what happened;
- body: what it means or what to do;
- action: concrete next step.

Avoid:
- generic "Внимание";
- emotional language;
- technical internals unless user can act on them.

## Toggles

Purpose: turn a setting on or off.

Pattern:
- label names the setting, not the action: "Уведомления", "Автоплатеж";
- helper text explains consequence if needed.

Avoid:
- labels that change meaning between on and off;
- double negatives.

## Legal Copy In UI

Purpose: meet legal or compliance constraints inside an interface.

Pattern:
- preserve legal meaning;
- improve readability only when meaning stays intact;
- mark risky edits as `needs legal review`.

Avoid:
- deleting conditions;
- replacing legal terms with casual analogues;
- applying style rules as hard bans.

## Empty States

Purpose: explain why content is absent and what can happen next.

Pattern:
- what is empty;
- how to create, connect, retry, or wait if relevant.

Avoid:
- jokes;
- blaming the user;
- empty optimism without action.

## Loading States

Purpose: reduce uncertainty while the user waits.

Pattern:
- describe the current operation if it matters;
- give time estimate only when reliable.

Avoid:
- false precision;
- long text that will flash briefly.

## Code Entry Screen

Purpose: help the user enter a verification code.

Pattern:
- say where the code was sent;
- keep resend and change-contact actions clear;
- explain wait time for resend if known.

Avoid:
- exposing security internals;
- ambiguous "код подтверждения" without context when several codes may exist.
