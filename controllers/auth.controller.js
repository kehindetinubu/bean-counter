const register = function (req, res) {
	const { fullName, email, password, phone } = req.body;

	res.status(201).json({});
};

const login = function (req, res) {
	const { email, password } = req.body;

	res.status(200).json({});
};

module.exports = { register, login };
