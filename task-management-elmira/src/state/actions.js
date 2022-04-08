const setUser = (newUser) => (state) => ({
	user: newUser,
	isLoggedIn: true,
})

export { setUser };