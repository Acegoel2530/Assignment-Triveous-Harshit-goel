app.get('/product/:productId', (req, res) => {
    const productId = req.params.productId;
    Product.findByPk(productId).then(product => {
      if (!product) {
        res.status(404).send('Product not found');
      } else {
        res.json(product);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  