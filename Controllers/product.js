app.get('/products/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    Product.findAll({ where: { CategoryId: categoryId } }).then(products => {
      res.json(products);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });