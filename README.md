Это исходный код сайта [https://edu.dluciv.name/](https://edu.dluciv.name/?utm_source=github_site_sources&utm_campaign=social_links).

Если вы нашли на сайте неточность, можете
[писать Issue](https://github.com/dluciv/static-edu.dluciv.name/issues).
А если вы ещё и знаете, как её исправить — буду признателен
за [Pull request](https://github.com/dluciv/static-edu.dluciv.name/pulls).

## Технические замечания

1. ~~BigPickle~~ **Готово**: Zola 0.23.5+ починил `text_direction()`, duckquill на main переведён на Tera 2. Было сделано 23.09.2026:
   - Субмодуль `duckquill` поднят до `main` (5b0c3fc, v6.3.0 → post-migration).
   - Zola поднят до 0.23.6 (CI — `shalzz/zola-deploy-action@v0.23.6`, локально — 0.23.6).
   - Шорткоды сайта перенесены на компоненты: `{% <alert …> %}`, `{% <details …> %}`, `{{ <ext_table … /> }}`, `{% <crt> %}`. Старая папка `templates/shortcodes/` удалена; созданы локальные компоненты `details.html` и `ext_table.html` в `templates/components/`.
   - Исправлен шаблон `missing_translation.html` для совместимости с Tera 2 (переменная `page` больше не передаётся при рендеринге разделов; используется `page is defined`).
