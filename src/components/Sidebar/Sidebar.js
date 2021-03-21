
import { Avatar } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import background_linkedin from "../../assets/background_linkedin.jpeg";

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={background_linkedin} alt="" srcset=""/>
                <Avatar/>
                <h4>Indo Gusmas</h4>
                <h2>indo@gmail.com</h2>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">126</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">67</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('jobs')}
                {recentItem('fintech')}
                {recentItem('spaceX')}
                {recentItem('MongoDB')}
                <h4>Followed Hastags</h4>
                {recentItem('nodejs')}
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('business')}
                {recentItem('tech')}
            </div>
        </div>
    )
}

export default Sidebar
