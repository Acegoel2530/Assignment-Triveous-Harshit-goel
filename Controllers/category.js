app.get('/categories', (req, res) => {
    Category.findAll().then(categories => {
      res.json(categories);
    }).catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  });