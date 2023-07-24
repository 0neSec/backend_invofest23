import {Sequelize} from "sequelize";

const db = new Sequelize('invofest', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;