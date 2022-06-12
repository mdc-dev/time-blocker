import { Sequelize } from 'sequelize'

const db = new Sequelize('auth_db', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;