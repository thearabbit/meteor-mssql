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
            name: {
                type: Sequelize.STRING
            },
            dob: {
                type: Sequelize.DATE
            },
            role: {
                type: Sequelize.STRING
            }
        });

        const all = User.findAll();

        return all.map(element => {
            console.log(element);

            return element.toJSON();
        });
    },
    async getMssqlData() {
        let connection = await new sql.connect("mssql://sa:Rabbit2017@localhost/meteor");
        let request = new sql.Request(connection);

        return request.query('select * from users');
    }
});
