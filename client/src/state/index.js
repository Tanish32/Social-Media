import { createSlice } from "@reduxjs/toolkit" //he is not creaing a store...just a slice

const initialState = {
	mode: "light",
	user: null,
	token: null,
	posts: [],
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light"
		},
		setLogin: (state, action) => {
			state.user = action.payload.user
			state.token = action.payload.token
		},
		setLogout: (state) => {
			state.user = null
			state.token = null
		},
		setFriends: (state, action) => {
			//we are completly removing and add all friends instead of adding just one...why?
			if (state.user) {
				state.user.friends = action.payload.friends
			} else {
				console.error("user friends non-existent :(")
			}
		},
		setPosts: (state, action) => {
			//same issue as setFriends
			state.posts = action.payload.posts
		},
		setPost: (state, action) => {
			//to update a post
			const updatedPosts = state.posts.map((post) => {
				if (post._id === action.payload.post_id)
					return action.payload.post
				return post
			})
			state.posts = updatedPosts
		},
	},
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
	authSlice.actions

export default authSlice.reducer
