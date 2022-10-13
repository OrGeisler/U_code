USE sql_intro; -- lets VS code know which DB to use

-- CREATE TABLE customer(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     city VARCHAR(20),
--     gender INT
-- );

-- CREATE TABLE company(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     industry VARCHAR(20),
--     employees INT
-- );

CREATE TABLE transaction(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    
    item_purchased VARCHAR(20),
    amount INT,
    discount FLOAT DEFAULT 0, 
   
    customer_id INT,
    company_id INT,
    FOREIGN KEY(customer_id) REFERENCES customer(id),
    FOREIGN KEY(company_id) REFERENCES company(id)
);