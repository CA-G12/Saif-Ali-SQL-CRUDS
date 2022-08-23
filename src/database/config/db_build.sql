BEGIN;

Drop TABLE IF EXISTS sellers, items, categories CASCADE;

CREATE TABLE sellers (
    id serial primary key,
    name varchar(100) not null,
);

CREATE TABLE items (
    id serial primary key,
    name varchar(100) not null,
    price int not null , 
    -- seller_id FOREIGN KEY(seller_id) REFERENCES sellers(id), 
    seller_id integer REFERENCES sellers(id) ON UPDATE CASCADE ,

);

    -- CONSTRAINT FK_PersonId FOREIGN KEY(PersonId) REFERENCES Person(PersonId)


CREATE TABLE categories (
    id serial primary key,
    name varchar(100) not null,
);

CREATE TABLE item_category(
    id serial primary key ,
    item_id integer REFERENCES items(id) ON UPDATE CASCADE ,
    category_id integer REFERENCES categories(id) ON UPDATE CASCADE
    -- item_id FOREIGN KEY(id) REFERENCES items(id), 
    -- category_id FOREIGN KEY(id) REFERENCES categories(id) 
);















COMMIT;