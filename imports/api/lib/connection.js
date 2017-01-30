// Ms SQL Connection
import Sequelize from 'sequelize';
import sql from 'mssql';

export const sqlConnection = new sql.connect("mssql://sa:Rabbit2017@localhost/meteor");
export const sqlRequest = new sql.Request(sqlConnection);

export const seqConnect = new Sequelize('meteor', 'sa', 'Rabbit2017', {
    host: 'localhost',
    dialect: 'mssql',
});
