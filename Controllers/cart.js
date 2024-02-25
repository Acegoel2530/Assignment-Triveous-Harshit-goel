// Add product to user's cart
app.post('/cart/add', authenticateToken, (req, res) => {
    const { productId, quantity } = req.body;
    Cart.findOrCreate({
      where: { UserId: req.user.id, ProductId: productId },
      defaults: { quantity: quantity }
    }).then(([cartItem, created]) => {
      if (!created) {
        cartItem.quantity += quantity;
        cartItem.save();
      }
      res.sendStatus(200);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  
  // View user's cart
  app.get('/cart/view', authenticateToken, (req, res) => {
    Cart.findAll({ where: { UserId: req.user.id }, include: Product }).then(cartItems => {
      res.json(cartItems);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  
  // Update product quantity in user's cart
  app.put('/cart/update', authenticateToken, (req, res) => {
    const { productId, quantity } = req.body;
    Cart.findOne({ where: { UserId: req.user.id, ProductId: productId } }).then(cartItem => {
      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.save();
      }
      res.sendStatus(200);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  
  // Remove product from user's cart
  app.delete('/cart/remove', authenticateToken, (req, res) => {
    const { productId } = req.body;
    Cart.destroy({ where: { UserId: req.user.id, ProductId: productId } }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  