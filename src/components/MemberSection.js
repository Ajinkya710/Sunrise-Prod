import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/sunrise-logo.png';
import headerimg from '../images/CI_Images/CI_header.jpg';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// const { initializeApp } = require("firebase/app");
const { getStorage, ref, listAll } = require("@firebase/storage");

const MemberSection = () => {
    useEffect(() => {
        document.title = "Member Access"
    }, []);
    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, 'common/Infographics');

    // Find all the prefixes and items.
    listAll(listRef)
        .then((res) => {
            console.log("in storage");
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef

            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error)
        });

    const { user, logout } = UserAuth();
    const navigate = useNavigate ();

    const handleLogout = async () => {
        try {
            await logout();
            navigate.push('/');
            // console.log('You are logged out')
        } catch (e) {
            // console.log(e.message);
        }
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="member" >
                <img id='updatesheader' src={headerimg} alt="headerimg" />
                <div className='getinvolvedheadernav'>
                    <div>
                        <Link to="/">
                            <img id='logo' src={logo} height="120px" width="330px" alt="Sunrise" />
                        </Link>
                    </div>
                    <div>
                        <h1 style={{ color: '#fff' }}>Member Access</h1>
                    </div>
                    <div>
                        <div style={{ boxSizing: 'border-box', background:'#32a852', padding: '20px', border:'1px solid black', borderRadius:'5px' }}>
                            <p style={{ color: '#fff', marginBottom:'10px' }}><strong>User:</strong> {user && user.email}</p>
                            <button style={{background:'#c73e3c', color:'#fff',padding:'6px'}} onClick={handleLogout} className='border px-6 py-2 my-4'>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* <p>Logged In Email: {user && user.email}</p>
                <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                    Logout
                </button> */}
                <div style={{ width: '80%', margin: 'auto' }}>
                    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none' }}>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Balance</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nJ5rCD4yZy4"
                                title="Balance SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Height Measurements</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/65Cia28zgEs"
                                title="Height Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Standing Long Jump</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/WTgdZoVmpRg"
                                title="Standing Long Jump SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>S-TUG</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/GwFhnh643mI"
                                title="S-TUG SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Weight Measurements</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/7nrvAsnm7J4"
                                title="Weight Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>9 Hole Peg Board</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FdgAPgu7vsk"
                                title="9 Hole Peg Board SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Plume Air Quality App</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FgQtR8orOVg"
                                title="Plume Air Quality App SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Hand Strength Grip Dynamometer</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/VcjTVD3jW0w"
                                title="Hand Strength Grip Dynamometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>Accelerometer</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nE8UH_Dupq0"
                                title="Accelerometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 1 - Overview</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/JgYGcUpjhdk"
                                title="iPad App Training 1 - Overview" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%' }}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 2 - Mr Ant</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/C5fGBxQmqVg"
                                title="iPad App Training 2 - Mr Ant" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ paddingTop: '3%', paddingRight: '3%', marginBottom: '5%' }}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 3 Go/NoGo</p>
                            <iframe style={{ width: "fit-content", height: "170px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/e1RDer0-KcM"
                                title="iPad App Training 3 Go/NoGo" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MemberSection;
