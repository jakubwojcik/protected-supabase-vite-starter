CREATE TABLE test_objects (
  id BIGINT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO test_objects (id, name, description)
VALUES
  (1, 'Red Cube', 'A vibrant red cube with smooth edges, perfect for stacking or display.'),
  (2, 'Blue Sphere', 'A calming blue sphere that fits comfortably in the palm of your hand.'),
  (3, 'Green Pyramid', 'An emerald green pyramid with a slightly textured surface for enhanced grip.'),
  (4, 'Yellow Cylinder', 'A cheerful yellow cylinder that can stand upright or roll with ease.'),
  (5, 'Purple Star', 'A whimsical purple star with five points, ideal for decorative purposes.');