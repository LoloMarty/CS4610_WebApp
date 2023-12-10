const {Pool} = require("pg");

const pool = new Pool({
	user: "postsdb_25m4_user",
	host: "dpg-clcl3g3mot1c73dhae70-a.oregon-postgres.render.com",
	database: "postsdb_25m4",
	password: "QXlBRlFIBtVYvzPg4QLaCNAQ22BqLpl7",
	port: 5432,
	ssl: true
});
module.exports = {
	query: (text, params) => pool.query(text, params),
};