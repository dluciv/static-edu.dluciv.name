Это исходный код сайта [https://edu.dluciv.name/](https://edu.dluciv.name/?utm_source=github_site_sources&utm_campaign=social_links).

Если вы нашли на сайте неточность, можете
[писать Issue](https://github.com/dluciv/static-edu.dluciv.name/issues).
А если вы ещё и знаете, как её исправить — буду признателен
за [Pull request](https://github.com/dluciv/static-edu.dluciv.name/pulls).

## Технические замечания

1. BigPickle: **Когда в Zola починят баг `text_direction()`, можно обновить тему duckquill с v6.3.0 до main и перейти на Zola ≥ 0.23.**
   Сейчас сайт зафиксирован на Zola 0.22.1 (в CI — пин `shalzz/zola-deploy-action@v0.22.1`) и теме duckquill v6.3.0 (Tera 1). Тема на main переведена на Zola ≥ 0.23 (Tera 2) и в `base.html` вызывает `text_direction()`, но во всех релизах 0.23.x эта функция не зарегистрирована к моменту валидации шаблонов — сборка падает с `error: Unknown function`. Баг известен upstream: [getzola/zola#3262](https://github.com/getzola/zola/issues/3262).
   Когда выйдет релиз Zola с фиксом: поднять субмодуль duckquill до main или новой актуальной версии, поднять версию Zola в CI и локально, перенести шорткоды сайта на компоненты (`{% <alert …> %}`, `{% <details …> %}`, `{{ <ext_table … /> }}`, `{% <crt> %}`). Такая миграция уже делалась и проверялась, так что это механическая работа.
