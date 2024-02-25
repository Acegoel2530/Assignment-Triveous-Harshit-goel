app.post('/order/place', authenticateToken, (req, res) => {
    const { products } = req.body;
    Order.create({ UserId: req.user.id }).then(order => {
      order.addProducts(products.map(product => product.id), { through: { quantity: product.quantity } });
      res.sendStatus(200);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  