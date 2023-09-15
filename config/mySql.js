const Sequelize = require("sequelize");

const sequelize = new Sequelize('quadb', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port:'3306',
    logging: true
  });

  //authenticating the DB connection
sequelize.authenticate()
.then(() =>{
    console.log('connected...');
})
.catch(err => {
    console.log('Error while connecting to DB' , err);
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db; 