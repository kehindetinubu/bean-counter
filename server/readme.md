# Bean Counter Server

This server built using node, express, jwt, bcrypt, and sequelize will perform CRUD operation on coffee data.

It needs basic authentication for now of register and login routes.

Stretch goal: add 2FA, SSO, and password reset

## Routes & Data Modeling

- `api/auth` route
	- `/register`
		- fullName
		- email
		- password
		- phone
	- `/login`
		- email
		- password
- `api/` route (full CRUD)
	- GET `/` home
	- GET `/all` show all data
	- GET `/:id` show specific coffee
	- GET `/filter` show specific coffee using filter criteria
	- POST `/add` coffee data
		- coffee name
		- roaster
		- origin
		- roast level
		- brew method
		- grinder
		- grind size
		- dose in
		- dose out
		- time
	- PUT `/:id` update coffee data
	- DELETE `/:id` delete coffee data