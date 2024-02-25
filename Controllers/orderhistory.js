app.get('/order/history', authenticateToken, (req, res) => {
    Order.findAll({ where: { UserId: req.user.id }, include: Product }).then(orders => {
      res.json(orders);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });
  
