CREATE TABLE public.ad_categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    alias VARCHAR(255),
    parent_id INTEGER,
    image_url VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES ad_categories(id)
);

CREATE TABLE public.ad_items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    alias VARCHAR(255),
    category_id INTEGER,
    translation_key VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.ad_param_groups (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    param_id INTEGER REFERENCES ad_params(id),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.ad_params (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    data_type VARCHAR(255),
    parent_id INTEGER REFERENCES ad_params(id),
    group_id INTEGER REFERENCES ad_param_groups(id),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.ad_params_options (
    id SERIAL PRIMARY KEY,
    param_id INTEGER REFERENCES ad_params(id),
    value VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE public.ad_params_to_values (
    id SERIAL PRIMARY KEY,
    ad_id INTEGER REFERENCES ad_items(id),
    param_id INTEGER REFERENCES ad_params(id),
    option_id INTEGER REFERENCES ad_params_options(id),
    value VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.ad_params_to_category (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES ad_categories(id),
    param_id INTEGER REFERENCES ad_params(id),
    visible_in_filters BOOLEAN
);

CREATE TABLE public.ad_param_widgets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE public.widget_to_param (
    id SERIAL PRIMARY KEY,
    widget_id INTEGER REFERENCES ad_param_widgets(id),
    param_id INTEGER REFERENCES ad_params(id)
);

-- COPY
COPY ad_categories(id, title, alias, parent_id, image_url)
FROM '/docker-entrypoint-initdb.d/ad_categories.csv'
DELIMITER ','
CSV HEADER;

-- Rewrite PK Sequence start
SELECT setval('ad_categories_id_seq', (SELECT MAX(id) FROM ad_categories)+1);