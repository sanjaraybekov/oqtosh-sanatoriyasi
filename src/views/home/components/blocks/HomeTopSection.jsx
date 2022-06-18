import React from "react";
import Header from "../../../../components/common/headers/header";

export default function HomeTopSection() {
    return <div className="home-top">
        <Header />
        <div className="top-section-body">
            <div className="body-content">
                <div className="social-links">
                    <p>Bizga qo'shiling</p>
                    <a href="  https://instagram.com/" rel="noreferrer" target="_blank"><img src="/assets/images/icons/instagram.svg" alt="instagram" /></a>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank"><img src="/assets/images/icons/twitter.svg" alt="twitter" /></a>
                </div>
                <div className="body-content-title">
                    <p><span>-------</span>A Hiking guide</p>
                    <h1>Be prepared for the Mountains and beyond!</h1>
                </div>
            </div>
        </div>
    </div>;
}
