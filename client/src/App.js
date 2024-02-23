import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import HomePage from "scenes/homePage"
import LoginPage from "scenes/loginPage"
import ProfilePage from "scenes/profilePage"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import { themeSettings } from "theme"
import Navbar from "scenes/navbar"
function App() {
	const mode = useSelector((state) => state.mode)
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					{/**Default colors are determined by defualt theme object. 
	Since we are rewriting the themeObject itself we dont have to change the colors of individual components */}
					<CssBaseline />
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/navbar" element={<Navbar />} />
						// For Now
						<Route
							path="/profile/:userId"
							element={<ProfilePage />}
						/>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
