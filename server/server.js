const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/getUsers", async (req, res) => 
{
	try 
	{
		const results = await db.query("select * from users");
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: {
				users: results.rows,
			},
		});
	} catch (err) 
	{
		console.log(err);
	}
	
});
app.get("/api/getUsers/:id", async (req, res) =>	//check one
{
	console.log(req.params.id);
	try
	{
		const results = await db.query("select * from users where id = $1", [req.params.id]);

		res.status(200).json({
			status: "success",
			data: {
				user: results.rows[0],
			},
		});
	} catch (err)
	{
		console.log(err);
	}
});

app.post("/api/getUsers/addUser", async (req, res) => 		//insert
{
	console.log(req.body);
	try
	{
		const results = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) returning *", [req.body.username, req.body.password])
		console.log(results)
		res.status(201).json(
			{
				status: "SUCCESS",
				data: 
				{
					user: results.rows[0],
				}
			}
		)
	} catch (err)
	{
		console.log(err)
	}
})

app.put("/api/getUsers/updateUser/:id", async (req, res) =>	//replace
{
	try
	{
		const results = await db.query("UPDATE users SET username = $1, password = $2 where id = $3 returning *", [req.body.username, req.body.password, req.params.id])
		
		res.status(200).json({
			status: "success",
			data: {
				user: results.rows[0],
			},
		});
	} catch (err)
	{
		console.log(err);
	}
	console.log(req.params.id);
	console.log(req.body);
})

app.delete("/api/getUsers/deleteUser/:id", async (req, res) =>	//delete
{
	try
	{
		const result = db.query("DELETE FROM users where id = $1", [req.params.id])
		res.status(204).json({
			status: "success",
		});

	} catch (err)
	{
		console.log(err);
	}
})

const port = 3001;
app.listen(port, () => 
{
	console.log(`Server Port: ${port} Active`);
});