import {Meteor} from 'meteor/meteor';

import Sequelize from 'sequelize';
import sql from  'mssql';

Meteor.methods({
    async getSequelizeData() {
        let sequelize = await new Sequelize('meteor', 'sa', 'Rabbit2017', {
            host: 'localhost',
            dialect: 'mssql',
        });

        let User = sequelize.define('users', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.DATE
            },
            role: {
                type: Sequelize.STRING
            }
        });

        const all = User.findAll();

        return all.map(element => {
            return element.toJSON();
        });
    },
    async getMssqlData(username = '') {
        let connection = await new sql.connect("mssql://sa:Rabbit2017@localhost/meteor");
        let request = new sql.Request(connection);

        return request.query(`select * from users where username='${username}'`);
        // return request.query(`select * from users`);
    }
});
