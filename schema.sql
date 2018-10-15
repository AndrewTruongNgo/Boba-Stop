DROP DATABASE boba;

CREATE DATABASE boba;

USE boba;

CREATE TABLE stores (
  store_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price VARCHAR(255),
  location VARCHAR(255),
  image VARCHAR(255),
  thumbs_up INT,
  thumbs_down INT,
  tea_quality DECIMAL(3,2),
  boba_quality DECIMAL(3,2),
  sweetness VARCHAR(255),
  ice VARCHAR(255),
  top_seller VARCHAR(255)
);

INSERT INTO stores (name, price, location, image, thumbs_up, thumbs_down, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Black Sugar', '$', 'San Francisco', 'https://static1.squarespace.com/static/5b7662b412b13fd6da95ffec/t/5b85f94d6d2a7347b4526e6e/1535506796107/Webp.net-resizeimage.png', 105, 0, 5, 4, 'Medium', 'Medium', 'Black Sugar Fresh Milk');

INSERT INTO stores (name, price, location, image, thumbs_up, thumbs_down, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Asha Tea House', '$$', 'San Francisco', 'https://dev-staging-lw-attachments-paperclip-attachments.s3.amazonaws.com/000/354/512/original/e3be3e8157b45e26d803bb8f7bd537012976652c.?1486162053', 256, 46, 4.6, 3.5, 'Light', 'High', 'Hong Kong Milk Tea');

INSERT INTO stores (name, price, location, image, thumbs_up, thumbs_down, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Boba Guys', '$$$', 'San Francisco', 'https://cdn-images-1.medium.com/max/2000/1*MEh2RxbxZsfOrJZYx1SR6Q.png', 876, 52, 5, 4.8, 'Light', 'High', 'Strawberry Matcha Latte');
