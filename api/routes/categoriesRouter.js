const express = require('express');
const router = express.Router();
const getConnection = require('../libs/postgres');
const categoriesData = [
  'Sports',
  'Books',
  'Computing',
  'Consoles and Video games',
  'Beauty and Personal Care',
  'Children and Baby Toys',
]

router.get('/', async (req, res) => {
  // const categories = []
  // for (let i = 0; i < categoriesData.length; i++) {
  //   categories.push({
  //     categoryName: categoriesData[i],
  //   })
  // }
  // res.status(200).json(
  //   categories
  // )

  const client = getConnection();
  const rta = (await client).query('SELECT * FROM tasks');
  res.json(
    (await rta).rows
  )
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Created category",
    data: body,
  })
})

router.put('/:id', (req, res) => {
  const { body, params: { id } } = req;

  res.json({
    message: `Updated category with id: ${id}`,
    data: body,
    id
  })
})
router.patch('/:id', (req, res) => {
  const { body, params: { id } } = req;

  res.json({
    message: `Partial updated category with id: ${id}`,
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { params: { id } } = req;

  res.json({
    message: `Deleted category with id: ${id}`,
    id
  })
})


module.exports = router;
