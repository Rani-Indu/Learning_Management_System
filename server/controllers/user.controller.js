const register = (req, res) => {
	const { fullname, email, password} = req.body;

	if (!fullName || !email  || !password){}
        
};


const login = (req, res) => {};


const getProfile = (req, res) => {};


const logout = (req, res) => {};



export {
	register,
	login,
	logout,
	getProfile
}