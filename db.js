// db.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'myusername',
  password: 'mypassword',
  database: 'ecommerce_db',
});

const Category = sequelize.define('Category', {
  name: DataTypes.STRING,
});


Category.hasMany(Product);
Product.belongsTo(Category);

User.hasOne(Cart);
Cart.belongsTo(User);

Order.belongsTo(User);
Order.belongsToMany(Product, { through: 'OrderProducts' });
Product.belongsToMany(Order, { through: 'OrderProducts' });

module.exports = { sequelize, Category, Product, User, Cart, Order };
