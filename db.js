const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mid_exam", "your_database_name", "your_username", "your_password", {
    host: "localhost",
    dialect: "mysql",
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
})();

module.exports = sequelize;
