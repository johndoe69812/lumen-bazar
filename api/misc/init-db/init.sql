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

COPY ad_categories(id, title, alias, parent_id, image_url)
FROM '/docker-entrypoint-initdb.d/ad_categories.csv'
DELIMITER ','
CSV HEADER;
