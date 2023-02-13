import React, { useEffect, useState } from 'react';
import {Header} from './Header';

import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { FileManager } from './FileManager/FileManager';
import { Box } from '@mui/material';
// const { initializeApp } = require("firebase/app");
const { getStorage, ref, listAll, getDownloadURL } = require("@firebase/storage");

const MemberSection = () => {
    useEffect(() => {
        document.title = "Member Access"
        // getFiles();
    }, []);
    const storage = getStorage();
    const [activeTab, setActiveTab] = useState('images');

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

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

    // const [value, setValue] = React.useState('1');

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    return (
        <>
            <div className="member" style={{paddingTop:'10%'}}>
                <Header/>
                <div style={{ width: '80%', margin: 'auto' }}>

                    <Box mb={6}>
                        <FileManager />
                    </Box>

                    <ul style={{ display: 'flex', justifyContent:'flex-start',flexWrap: 'wrap', gap:'7%',listStyleType: 'none' }}>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Balance</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nJ5rCD4yZy4"
                                title="Balance SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Height Measurements</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/65Cia28zgEs"
                                title="Height Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li  style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Standing Long Jump</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/WTgdZoVmpRg"
                                title="Standing Long Jump SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>S-TUG</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/GwFhnh643mI"
                                title="S-TUG SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Weight Measurements</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/7nrvAsnm7J4"
                                title="Weight Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>9 Hole Peg Board</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FdgAPgu7vsk"
                                title="9 Hole Peg Board SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Plume Air Quality App</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FgQtR8orOVg"
                                title="Plume Air Quality App SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Hand Strength Grip Dynamometer</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/VcjTVD3jW0w"
                                title="Hand Strength Grip Dynamometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>Accelerometer</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nE8UH_Dupq0"
                                title="Accelerometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 1 - Overview</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/JgYGcUpjhdk"
                                title="iPad App Training 1 - Overview" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 2 - Mr Ant</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/C5fGBxQmqVg"
                                title="iPad App Training 2 - Mr Ant" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{marginTop:'3%',marginBottom:'3%'}}>
                            <p style={{ marginBottom: '1%' }}>iPad App Training 3 Go/NoGo</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/e1RDer0-KcM"
                                title="iPad App Training 3 Go/NoGo" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default MemberSection;
