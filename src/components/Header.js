import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HttpsIcon from '@mui/icons-material/Https';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../images/sunrise-logo.png";
import '../styles/App.css'
import { UserAuth } from "../context/AuthContext";
import { Box } from "@mui/material";

export const Header = () => {
	const [currentUrl, setCurrentUrl] = useState(window.location.href);
	const [navbarOptions, setNavbarOptions] = useState([]);
	useEffect(() => {
		if (currentUrl.endsWith("chiefinvestigators") || currentUrl.endsWith("getinvolved") || currentUrl.endsWith("updates") || currentUrl.endsWith("publications")) {
			console.log(currentUrl);
		} else if (currentUrl.endsWith("login") || currentUrl.endsWith("signup")) {
			setNavbarOptions([
				{ name: "Home", link: "#" },
				{ name: "About", link: "#" }
			]);
		} else if (currentUrl.endsWith("memberaccess")) {
			setNavbarOptions([
				{ name: "Home", link: "#" }
			]);
		} else {
			setNavbarOptions([
				{ name: "Home", link: "#home" },
				{ name: "About", link: "#about" },
				{ name: "Countries", link: "#countries" },
				{ name: "Universe", link: "#universe" },
				{ name: "Team", link: "#meetteam" },
				{ name: "FAQ's", link: "#faq" }
			]);
		}
	}, [currentUrl]);
	// console.log(navbarOptions.length);
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			// console.log('You are logged out')
		} catch (e) {
			// console.log(e.message);
		}
	};

	return (
		<>
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link smooth to="/#home">
							<img src={logo} style={{ paddingTop: '5%' }} height="105px" width="260px" alt="Sunrise" />
						</Link>
						{/* <button
							type="button"
							className="nav-btn"
							onClick={this.handleToggle}
						><FaAlignRight className="nav-icon" />
						</button> */}
					</div>
					{navbarOptions.length === 6 ?
						<>
							<ul className="nav-links show-nav">
								{navbarOptions.map(option => (
									<li><Link smooth to={option.link}>{option.name}</Link></li>
									// <a key={option.link} href={option.link}>{option.name}</a>
								))}
							</ul>
							<Box alignSelf='center'>
								{user?.email ?
									<>
										<Link to="/memberaccess" target='_blank' style={{ color: 'white', textDecoration: 'none', backgroundColor: '#4287f5', padding: '8.5px', borderRadius: '5px' }}>
											<DashboardIcon fontSize="medium" sx={{ marginBottom: '-5px', mr: '5px' }} />Dashboard
										</Link>
										<Button variant="contained" className="loginicon" color="error" onClick={handleLogout} style={{ marginLeft: '20px' }}>
											<LogoutIcon fontSize="medium" sx={{ mr: '5px' }} />Logout
										</Button>
									</>
									:
									<Link to={'/login'} target='_blank' style={{ textDecoration: 'none', top: '50%' }}>
										<Button variant="contained" className="loginicon" color="success"><HttpsIcon fontSize="small" sx={{ mr: '5px' }} />
											Log In
										</Button>
									</Link>
								}
							</Box>
						</>
						: navbarOptions.length === 1 ?
							<>
								<Box alignSelf='center' ml='50%' alignContent='flex-end'>
									{user?.email ?
										<Button variant="contained" className="loginicon" color="error" onClick={handleLogout} style={{ marginLeft: '20px' }}>
											<LogoutIcon fontSize="medium" sx={{ mr: '5px' }} />Logout
										</Button>
										:
										<Link to={'/login'} target='_blank' style={{ textDecoration: 'none', top: '50%' }}>
											<Button variant="contained" className="loginicon" color="success"><HttpsIcon fontSize="small" sx={{ mr: '5px' }} />
												Log In
											</Button>
										</Link>
									}
								</Box>
								<Box style={{ display: 'flex', alignSelf: 'center' }}>
									<a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
										<YouTubeIcon style={{ color: 'rgb(233, 49, 49)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
									<a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
										<TwitterIcon style={{ color: 'rgb(49, 168, 232)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
									<a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
										<InstagramIcon style={{ color: 'rgb(243, 119, 42)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
								</Box>
							</>
							: navbarOptions.length === 2 ?
								<Box style={{ display: 'flex', alignSelf: 'center' }}>
									<a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
										<YouTubeIcon style={{ color: 'rgb(233, 49, 49)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
									<a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
										<TwitterIcon style={{ color: 'rgb(49, 168, 232)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
									<a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
										<InstagramIcon style={{ color: 'rgb(243, 119, 42)', marginTop: '1rem', height: '50px', width: '80px' }} />
									</a>
								</Box>
								:
								<>
									{/* <ul className="nav-links show-nav" style={{padding:'2.5rem 5rem'}}> */}
									{/* {navbarOptions.map(option => (
									<li><Link smooth to={option.link}>{option.name}</Link></li>
									// <a key={option.link} href={option.link}>{option.name}</a>
								))} */}
									<Box alignSelf='center' ml='50%' alignContent='flex-end'>
										{user?.email ?
											<Link to="/memberaccess" target='_blank' style={{ color: 'white', textDecoration: 'none', backgroundColor: '#4287f5', padding: '8.5px', borderRadius: '5px' }}>
												<DashboardIcon fontSize="medium" sx={{ marginBottom: '-5px', mr: '5px' }} />Dashboard
											</Link>
											:
											<Link to={'/login'} target='_blank' style={{ textDecoration: 'none', top: '50%' }}>
												<Button variant="contained" className="loginicon" color="success"><HttpsIcon fontSize="small" sx={{ mr: '5px' }} />
													Log In
												</Button>
											</Link>
										}
									</Box>
									<Box style={{ display: 'flex', alignSelf: 'center' }}>
										<a href="https://www.youtube.com/channel/UCUgmfAGHO1qW7HV73vDVSLw" target="_blank" rel="noreferrer">
											<YouTubeIcon style={{ color: 'rgb(233, 49, 49)', marginTop: '1rem', height: '50px', width: '80px' }} />
										</a>
										<a href="https://twitter.com/StudySunrise" target="_blank" rel="noreferrer">
											<TwitterIcon style={{ color: 'rgb(49, 168, 232)', marginTop: '1rem', height: '50px', width: '80px' }} />
										</a>
										<a href="https://www.instagram.com/_sunrise.study/" target="_blank" rel="noreferrer">
											<InstagramIcon style={{ color: 'rgb(243, 119, 42)', marginTop: '1rem', height: '50px', width: '80px' }} />
										</a>
									</Box>
									{/* </ul> */}

								</>
					}
					{/* <ul className="nav-links show-nav">
						<li><Link smooth to="#home">Home</Link></li>
						<li><Link smooth to="#about">About</Link></li>
						<li><Link smooth to="#countries">Countries</Link></li>
						<li><Link smooth to="#universe">Universe</Link></li>
						<li><Link smooth to="#meetteam">Team</Link></li>
						<li><Link smooth to="#faq">FAQ's</Link></li>
						{navbarOptions.map(option => (
							<li><Link smooth to={option.link}>{option.name}</Link></li>
							<a key={option.link} href={option.link}>{option.name}</a>
						))}
					</ul> */}
					{/* <Box alignSelf='center'>
						{user?.email ?
							<>
								<Link to="/memberaccess" target='_blank' style={{ color: 'white',textDecoration: 'none', backgroundColor: '#4287f5', padding: '8.5px', borderRadius: '5px' }}>
									Dashboard
								</Link>
								<Button variant="contained" className="loginicon" color="error" onClick={handleLogout}>
									Logout
								</Button>
							</>
							:
							<Link to={'/login'} target='_blank' style={{ textDecoration: 'none', top: '50%' }}>
								<Button variant="contained" className="loginicon" color="success">
									Log In
								</Button>
							</Link>
						}
					</Box> */}
				</div>
			</nav>
		</>
	);
}
