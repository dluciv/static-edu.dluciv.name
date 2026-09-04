+++
insert_anchor_links = "left"
title = "Распределённая обработка данных и NoSQL БД"
+++

<!-- 7 семестр Технологии программирования -->

## Связь

* [Чатик](https://srr.ru/) <!-- https://t.me/+2yN52JbVoN40YTBi -->
* [Вебинар](https://srr.ru/) <!-- https://webinar.spbu.ru/2687/256647705 -->

## Программа семинара

### Программа 2.0

А 1.0 — ниже.

{% details(summary="5 Разделов по несколько докладов") %}

#### 1. Общие подходы к решению распределённых задач

**1.1 Протоколы распределённого консенсуса (Raft)**
* **Популярная:** [Распределенное KV-хранилище на базе etcd](https://habr.com/ru/articles/1025994/) (Habr) – доступное объяснение принципов Raft на практике.
* **Научная:** [In Search of an Understandable Consensus Algorithm](https://ramcloud.stanford.edu/raft.pdf) (Diego Ongaro, John Ousterhout, Stanford) – оригинальная академическая публикация протокола.

**1.2 Распределённые хэш-таблицы (DHT) и P2P-архитектуры**
* **Популярная:** [P2P-архитектура: принципы, протоколы и будущее](https://sky.pro/wiki/javascript/odnorangovaya-p2p-arhitektura/) (Skypro) – раздел, детально разбирающий работу DHT.
* **Научная:** [Маршрутизация в пиринговых сетях](https://network-journal.mpei.ac.ru/ru/14/4/1/article.htm) (Вестник МЭИ) – анализ алгоритмов DHT в P2P.

**1.3 Event Sourcing и Stream Processing (Kafka, CQRS)**
* **Популярная:** [Лучшие практики для событийно-ориентированной архитектуры](https://habr.com/ru/articles/982564/) (Habr).
* **Научная/Аналитическая:** [Архитектура данных в Event Sourcing: где хранить события?](https://bigdataschool.ru/blog/data-stores-for-event-sourcing/) (BigData School) – исчерпывающий разбор компромиссов между Kafka и ACID-хранилищами.

**1.4 Архитектура типичных криптовалют (UTXO, консенсус)**
* **Популярная:** [Децентрализованные цифровые валюты. Часть 2. UTXO](https://habr.com/ru/articles/405907/) (Habr).
* **Научная:** [HBTBD: A Heterogeneous Bitcoin Transaction Behavior Detection](https://www.mdpi.com/2076-3417/13/15/8766) (MDPI Applied Sciences). DOI: [10.3390/app13158766](https://doi.org/10.3390/app13158766) – научное описание UTXO как графовой структуры.

#### 2. Нереляционные парадигмы и модели данных

**2.1 Эволюция от MapReduce к современным распределённым движкам (Spark, Flink)**
* **Популярная:** [The Evolution of Big Data Processing: From Hadoop to Spark to Flink](https://minimaldevops.com/the-evolution-of-big-data-processing-from-hadoop-to-spark-to-flink-fb2c8616da63) (Medium).
* **Научная:** [Spark versus Flink: Understanding Performance in Big Data Analytics](https://inria.hal.science/hal-01347638/file/clusterFS.pdf) (INRIA HAL).

**2.2 Графовые БД и Knowledge Graphs (GraphRAG)**
* **Популярная:** [Улучшаем RAG с помощью графов знаний (GraphRAG)](https://habr.com/ru/articles/871700/) (Habr).
* **Научная:** [Graph-RAG: гибридный поиск с графовой структурой...](https://cyberleninka.ru/article/n/graph-rag-gibridnyy-poisk-s-grafovoy-strukturoy-dlya-obespecheniya-polnoty-i-soglasovannosti-pri-analize-normativno-tehnicheskih) (КиберЛенинка).

**2.3 Векторные модели хранения как новая NoSQL-парадигма**
* **Популярная:** [Выбираем векторную БД для AI-агентов и RAG: большой обзор](https://habr.com/ru/articles/961088/) (Habr).
* **Научная:** [Векторные базы данных: принципы работы и применение](https://econom-inform-journal.ru/index.php/journal/article/download/390/401/1416) (Вестник экономики и информатики).

**2.4 Мультимодельные СУБД (документы + графы + ключ-значение)**
* **Популярная:** [Мультимодельные СУБД — основа современных информационных систем](https://habr.com/ru/articles/462493/) (Habr).
* **Научная:** Специализированных статей именно по мультимодельности в открытых российских журналах мало, поэтому рекомендуется исчерпывающий аналитический материал: [Бывают ли мультимодельные базы данных и как они работают](https://bigdataschool.ru/blog/multimodel-databases-overview/).

#### 3. Дискуссионные вопросы

**3.1 Теорема CAP и её современная интерпретация (PACELC)**
* **Популярная:** [Недостатки и альтернативы CAP-теоремы для NoSQL и Big Data: BASE и PACELC](https://bigdataschool.ru/blog/cap-alternatives-for-nosql-and-big-data/) (BigData School).
* **Научная:** Оригинальная работа Эрика Брюера упоминается в статье выше. Для академической ссылки: [Консистентность и ACID-гарантии в распределенных системах](https://habr.com/ru/companies/gridgain/articles/430852/) (содержит строгий разбор теоремы).

**3.2 NoSQL vs NewSQL vs PostgreSQL: конец эпохи «войн баз данных»**
* **Популярная:** [Майкл Стоунбрейкер: Всё новое это хорошо забытое старое](https://postgrespro.ru/materials/item/5971220) (Postgres Professional).
* **Научная:** [Сравнение реляционного подхода с нереляционными (NoSQL) и масштабируемыми реляционными (NewSQL) решениями](https://www.vestcyber.ru/jour/article/download/740/443) (Вестник кибернетики). DOI: 10.35266/1999-7604.

**3.3 Data Lakehouse: мост между Data Lake и Data Warehouse**
* **Популярная:** [Data Warehouses vs. Data Lakes vs. Data Lakehouses](https://www.ibm.com/think/topics/data-warehouse-vs-data-lake-vs-data-lakehouse) (IBM).
* **Научная:** [Data Lake vs. Warehouse vs. Lakehouse](https://www.onehouse.ai/blog/data-lake-vs-warehouse-vs-lakehouse) (Onehouse.ai, архитектурный whitepaper, де-факто являющийся академическим стандартом описания парадигмы).

**3.4 RAG vs Fine-Tuning: архитектурный выбор хранения контекста**
* **Популярная:** [Смерть fine-tuning? Почему RAG и промпт-инженерия вытесняют дообучение](https://habr.com/ru/companies/cloud_ru/articles/940868/) (Habr).
* **Научная:** [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) (arXiv). DOI: [10.48550/arXiv.2005.11401](https://doi.org/10.48550/arXiv.2005.11401).


#### 4. Конкретные системы

**4.1 Яндекс ClickHouse (и современные колоночные OLAP)**
* **Популярная:** [Глубокое сравнение StarRocks и ClickHouse в задачах аналитики](https://habr.com/ru/articles/967214/) (Habr).
* **Научная:** [Сравнение возможностей NoSQL колоночной базы данных ClickHouse](https://vestnik.alt.edu.kz/index.php/journal/article/view/1703) (Вестник Алматинского университета).

**4.2 Apache Cassandra / ScyllaDB (Wide-Column Store)**
* **Популярная:** [Как Discord хранит триллионы сообщений: переход с Cassandra на ScyllaDB](https://habr.com/ru/articles/722124/) (Habr).
* **Научная:** Классических статей мало из-за коммерческой природы оптимизаций, но исчерпывающим источником является [официальный Whitepaper ScyllaDB](https://www.scylladb.com/resource/scylladb-whitepaper/) или [Наш опыт с Cassandra и ScyllaDB](https://habr.com/ru/companies/ru_mts/articles/935896/).

**4.3 Векторные СУБД: Qdrant / Milvus**
* **Популярная:** [Что могут векторные СУБД — open source инструменты](https://habr.com/ru/companies/mws/articles/826642/) (Habr).
* **Научная:** [Vector Database Comparison in 2026: Nine Systems by Cost, Scale](https://news.hamidun.com/en/news/9519/vector-database-comparison-in-2026-nine-systems-by-cost-scal) (сравнительный анализ архитектур).

**4.4 YTsaurus: платформа распределённого хранения и обработки**
* **Популярная:** [YTsaurus: основная система для хранения и обработки данных Яндекса](https://habr.com/ru/companies/yandex/articles/721526/) (Habr).
* **Научная:** Поскольку это open-source проект Яндекса, рецензируемых статей в журналах практически нет. Рекомендуется использовать [официальные доклады и публикации](https://ytsaurus.tech/docs/en/other/video-posts) как первичный академический источник по архитектуре системы.

**4.5 PostgreSQL + pgvector как универсальный комбайн**
* **Популярная:** [Что умеет и где может пригодиться pgvector](https://habr.com/ru/companies/selectel/articles/920824/) (Habr).
* **Научная:** [How we implemented vector search in Postgres Pro](https://habr.com/en/companies/postgrespro/articles/923816/) (технический отчет Postgres Professional, описывающий алгоритмические основы).

#### 5. Баттл (Дебаты)

**5.1 Qdrant/Milvus vs PostgreSQL + pgvector**
* **Популярная/Аналитическая:** [Выбираем векторную БД для AI-агентов и RAG: большой обзор](https://habr.com/ru/articles/961088/) (Habr) – содержит прямое сравнение всех трех систем, их индексов (HNSW, IVF) и сценариев применения.

**5.2 Data Lakehouse (Apache Iceberg) vs Монолитный OLAP (ClickHouse)**
* **Популярная:** [Инфраструктура для Data-Engineer: Apache Iceberg и ClickHouse](https://habr.com/ru/articles/850674/) (Habr).
* **Аналитическая:** [Lakehouse 2026: Iceberg + Trino + ClickHouse для DWH](https://zasqlpython.ru/blog/lakehouse-iceberg-trino-clickhouse-arhitektura-2026) – разбор архитектурных компромиссов.

**5.3 Event Sourcing (Kafka) vs Традиционные реляционные транзакции (ACID)**
* **Популярная:** [Распределённые транзакции в микросервисах: от SAGA до ACID](https://habr.com/ru/articles/906484/) (Habr).
* **Аналитическая:** [Архитектура данных в Event Sourcing: где хранить события?](https://bigdataschool.ru/blog/data-stores-for-event-sourcing/) – детальный разбор того, почему Kafka не заменяет ACID, а дополняет его, и где проходят границы применимости.

{% end %}

### Программа 1.0

В таблице [по ссылке](https://disk.yandex.ru/i/LKUMslqJNzn3vg/preview) — собственно доклады и их статус.
Предпросмотр (обновляется раз в ~15 минут):

{{ ext_table(src="https://vision.spb.ru/uxls/Успеваемость.pub/СПбГУ/Бакалавриат/NoSQL/2026-Темы_вопросы_успехи.html", collapse=true) }}
<!-- было iframe=true, height="1000px" -->

##  Правила

### Доклады

Можно (и даже хорошо) использовать свои источники и предлагать свои темы, но их надо предварительно утверждать.
Если человек докладывает какую-то информацию, которую сам не в достаточной степени интерпретирует, доклад может быть не засчитан.
По расписанию — лучше ориентироваться на два доклада (не забудьте про вопросы) в день.

### Что нужно на зачёт?

Участник семинара:

* делает миниум 1 доклад из любого раздела
* присутствует, причём учитывается:
  * форма присутсвия (дистанционное участие считается только с начала занятия)
  * содержательное участие в дискуссии

Нарушение условий без уважительных причин ⇒ осуждение, порицание и меньше баллов для зачёта.
Программа зачёта для тех, кому не хватило — содержание состоявшихся докладов семинара.

{% alert(note=true) %}
[Эта страница доступна на старом сайте](https://sites.google.com/view/edu2018-dluciv-name/Home/distrinfproc?utm_source=edu.dluciv.name&utm_campaign=dluciv.name_domain)
{% end %}
