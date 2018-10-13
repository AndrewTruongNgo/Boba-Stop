CREATE DATABASE boba;

USE boba;

CREATE TABLE stores (
  store_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  location VARCHAR(255),
  image VARCHAR(255),
  thumbs_up INT,
  thumbs_down INT,
  tea_quality DECIMAL,
  boba_quality DECIMAL,
  sweetness VARCHAR(255),
  ice VARCHAR(255),
  top_seller VARCHAR(255)
)
