import express from "express";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// dummy data
const DUMMY_ITEMS = [
  {
    id: 1,
    name: 'item 1',
    description: 'This is the first item'
  },
  {
    id: 2,
    name: 'item 2',
    description: 'This is the second item'
  },
  {
    id: 3,
    name: 'item 3',
    description: 'This is the third item'
  },
];

// Validation middleware
const validateItem = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }
  next();
};

// GET all items
app.get('/items', (req, res) => {
  res.json(DUMMY_ITEMS);
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
  const item = DUMMY_ITEMS.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// POST a new item
app.post('/items', validateItem, (req, res) => {
  const newItem = {
    id: DUMMY_ITEMS.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  DUMMY_ITEMS.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item by ID
app.put('/items/:id', validateItem, (req, res) => {
  const item = DUMMY_ITEMS.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });

  item.name = req.body.name;
  item.description = req.body.description;
  res.json(item);
});

// DELETE an item by ID
app.delete('/items/:id', (req, res) => {
  const itemIndex = DUMMY_ITEMS.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });

  DUMMY_ITEMS.splice(itemIndex, 1);
  res.status(204).send();
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})