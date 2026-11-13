/* 
	? Validator
	* tool checking for completeness, correctness, or consistency
	* ensures we don't make expensive database calls unless we have required data
	* we use middleware chaining to keep it DRY and simple
	
	? Challenge
	* Build an email validator
	* it should use regex to check if an email is valid
	* if it is, continue, if it isn't, send a 400 response
	* apply it to the register/login endpoint and test
*/

const authValidator = function (req, res, next) {
	const { fullName, email, password, phone } = req.body	

	if (req.url === "/register") {
		if (!fullName || !email || !password || !phone ) {
			return res.status(400).json({
				message: "Malformed request"
			})
		}
	}
	
	if (req.url === "/login") {
		if (!email || !password) {
			return res.status(400).json({
				message: "Malformed request"
			})
		}
	}

	next()
}

const emailValidator = function (req, res, next) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const { email } = req.body;

	if (!email) {
		return res.status(400).json({
			message: "I require an email, Om nom nom nom"
		})
	}

	if (!emailRegex.test(email)) {
		return res.status(400).json({
			message: "You think me a fool????? I REJECT your email, sir!"
		})
	}

	next()
}

module.exports = { authValidator, emailValidator }