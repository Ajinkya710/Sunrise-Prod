import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { UserAuth } from '../context/AuthContext';
import { FileManager } from './FileManager/FileManager';
import { Box } from '@mui/material';
// const { initializeApp } = require("firebase/app");
const { getStorage } = require("@firebase/storage");

const MemberSection = () => {
    useEffect(() => {
        document.title = "Member Access"
        // getFiles();
    }, []);

    const { user, logout } = UserAuth();

    return (
        <>
            <div className="member" style={{ paddingTop: '6.8%' }}>
                <Header />
                <h1 style={{ color: '#494b4d', position: 'fixed', textAlign: 'center', width: '100%', paddingTop: '7px', paddingBottom: '7px', background: 'white', borderBottom: '1px solid #828487', zIndex: '10' }}>Member Access</h1>
                <div style={{ width: '75%', margin: 'auto', paddingTop: '4%' }}>
                    <Box display='flex'>
                        <h2 style={{ textAlign: 'start', color: '#f05f54' }}>Welcome, </h2><p style={{ marginLeft: '10px', marginTop: '7px', fontWeight: 'bold', color: '#494b4d' }}>{user.email}</p>
                    </Box>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h2 style={{ color: '#10609e' }}><FileCopyIcon style={{ marginBottom: '-4px', marginRight: '5px', color: '#10609e' }} />All Documents</h2>
                    <p>&nbsp;</p>
                    <Box mb={6}>
                        <FileManager />
                    </Box>
                    <h2 style={{ color: '#10609e' }}><VideoLibraryIcon style={{ marginBottom: '-4px', marginRight: '5px', color: '#10609e' }} />Videos</h2>
                    <ul style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '5%', listStyleType: 'none' }}>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Balance</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nJ5rCD4yZy4"
                                title="Balance SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Height Measurements</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/65Cia28zgEs"
                                title="Height Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Standing Long Jump</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/WTgdZoVmpRg"
                                title="Standing Long Jump SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>S-TUG</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/GwFhnh643mI"
                                title="S-TUG SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Weight Measurements</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/7nrvAsnm7J4"
                                title="Weight Measurements SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>9 Hole Peg Board</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FdgAPgu7vsk"
                                title="9 Hole Peg Board SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Plume Air Quality App</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/FgQtR8orOVg"
                                title="Plume Air Quality App SUNRISE 2020" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Hand Strength Grip Dynamometer</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/VcjTVD3jW0w"
                                title="Hand Strength Grip Dynamometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>Accelerometer</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/nE8UH_Dupq0"
                                title="Accelerometer SUNRISE" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>iPad App Training 1 - Overview</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/JgYGcUpjhdk"
                                title="iPad App Training 1 - Overview" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>iPad App Training 2 - Mr Ant</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
                                src="https://www.youtube.com/embed/C5fGBxQmqVg"
                                title="iPad App Training 2 - Mr Ant" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </li>
                        <li style={{ marginTop: '2%', marginBottom: '5%' }}>
                            <p style={{ marginBottom: '3%', color: '#f05f54', fontWeight: 'bold', fontSize: '16px' }}>iPad App Training 3 Go/NoGo</p>
                            <iframe style={{ width: "fit-content", height: "185px", borderStyle: 'solid', borderRadius: '.5em' }}
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
