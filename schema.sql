DROP DATABASE boba;

CREATE DATABASE boba;

USE boba;

CREATE TABLE stores (
  store_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price VARCHAR(255),
  location VARCHAR(255),
  image VARCHAR(255),
  likes INT,
  liked BOOLEAN,
  tea_quality DECIMAL(3,2),
  boba_quality DECIMAL(3,2),
  sweetness VARCHAR(255),
  ice VARCHAR(255),
  top_seller VARCHAR(255)
);

INSERT INTO stores (name, price, location, image, likes, liked, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Black Sugar', '$', 'San Francisco', 'https://static1.squarespace.com/static/5b7662b412b13fd6da95ffec/t/5b85f94d6d2a7347b4526e6e/1535506796107/Webp.net-resizeimage.png', 126, false, 5, 4, 'Medium', 'Low', 'Black Sugar Fresh Milk');

INSERT INTO stores (name, price, location, image, likes, liked, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Boba Guys', '$$$', 'San Francisco', 'https://cdn-images-1.medium.com/max/2000/1*MEh2RxbxZsfOrJZYx1SR6Q.png', 63, false, 5, 4.8, 'Light', 'High', 'Strawberry Matcha Latte');

INSERT INTO stores (name, price, location, image, likes, liked, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Asha Tea House', '$$', 'San Francisco', 'https://dev-staging-lw-attachments-paperclip-attachments.s3.amazonaws.com/000/354/512/original/e3be3e8157b45e26d803bb8f7bd537012976652c.?1486162053', 94, false, 4.6, 3.5, 'Light', 'Medium', 'Hong Kong Milk Tea');

INSERT INTO stores (name, price, location, image, likes, liked, tea_quality, boba_quality, sweetness, ice, top_seller) VALUES
('Sharetea', '$$', 'San Francisco', 'https://cdn.vox-cdn.com/thumbor/JDwfe0PYyFXbjEwBDOci319ACxg=/0x0:802x802/1200x800/filters:focal(351x271:479x399)/cdn.vox-cdn.com/uploads/chorus_image/image/58822231/sharetea.0.jpg', 32, false, 3.5, 3, 'High', 'High', 'Honey Milk Tea');

CREATE TABLE comments (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  comment TEXT,
  -- created_at TIMESTAMP,
  -- created_at DATE,
  store_id INT,
  FOREIGN KEY (store_id) REFERENCES stores (store_id)
);

INSERT INTO comments (name, comment, store_id) VALUES
('PadawanAlan', 'Gotta drink that bubble tea', 1);

INSERT INTO comments (name, comment, store_id) VALUES
('SenpaiJun', 'This place is awesome!', 1);

INSERT INTO comments (name, comment, store_id) VALUES
('TeetoSpence', 'I can dig it', 1);
