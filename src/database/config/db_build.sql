BEGIN;

Drop TABLE IF EXISTS sellers, items, categories, item_category CASCADE;

CREATE TABLE sellers (
    id serial primary key,
    seller_name varchar(100) not null
);

CREATE TABLE items (
    id serial primary key,
    item_name varchar(100) not null,
    price int not null , 
    -- FOREIGN KEY (seller_id) REFERENCES sellers(id) 
    seller_id integer REFERENCES sellers(id) ON UPDATE CASCADE 


);



CREATE TABLE categories (
    id serial primary key,
    name varchar(100) not null
);

CREATE TABLE item_category(
    id serial primary key ,
    item_id integer REFERENCES items(id) ON UPDATE CASCADE ,
    category_id integer REFERENCES categories(id) ON UPDATE CASCADE 
    -- FOREIGN KEY (item_id) REFERENCES items(id),
    -- FOREIGN KEY (category_id) REFERENCES categories(id)
);



-- Insert sellers 
INSERT INTO sellers (seller_name) values ('Ali') , ('Saif') , ('Mostafa');

-- Insert cateogries 
INSERT INTO categories (name) values ('Mobile') , ('Laptop') , ('Tablet') , ('Samsung') , ('Apple') , ('Asus') , ('Msi');


-- Insert static items 
INSERT INTO items (item_name, price, seller_id) values ('iPhone 12',2000,1) , ('Asus 10', 1500, 1) , ('ipad 12',1200,2);


-- Insert item_category 
Insert INTO  item_category (item_id, category_id) values (1, 1), (1, 5), (2,2) , (2,6) , (3,3) ,(3,5);





COMMIT;