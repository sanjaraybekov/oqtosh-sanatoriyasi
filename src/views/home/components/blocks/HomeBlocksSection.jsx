import React from "react";
import Header from "../../../../components/common/headers/header";

const blocksInfo = [
    {
        miniTitle: "Get Started",
        title: "What level of  hiker are you?",
        content: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
        image: "/assets/images/blocks/block1.png",
        link: "/",
    },
    {
        miniTitle: "Get Started",
        title: "What level of  hiker are you?",
        content: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
        image: "/assets/images/blocks/block2.png",
        link: "/",
    },
    {
        miniTitle: "Get Started",
        title: "What level of  hiker are you?",
        content: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
        image: "/assets/images/blocks/block3.png",
        link: "/",
    },
]

export default function HomeBlocksSection() {
    return <div className="home-blocks containers">
        {blocksInfo.map((item, index) => (
            <div className="row home-block">
                <div className="col-1 home-block__index">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="col-5 me-5 order-3">
                    <div className="home-block__mini-title with-pre-line">{item.miniTitle}</div>
                    <div className="home-block__title">{item.title}</div>
                    <div className="home-block__content">{item.content}</div>
                </div>
                <div className="col-4 order-4 home-block__image">
                    <img className="w-100" src={item.image} alt={item.image}/>
                </div>
            </div>
        ))}
        <div className="top-section-body">
            <div className="body-content">
                <div className="social-links">
                    <p>Bizga qo'shiling</p>
                    <a href="  https://instagram.com/" rel="noreferrer" target="_blank"><img
                        src="/assets/images/icons/instagram.svg" alt="instagram"/></a>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank"><img
                        src="/assets/images/icons/twitter.svg" alt="twitter"/></a>
                </div>
                <div className="body-content-title">
                    <p><span>-------</span>A Hiking guide</p>
                    <h1>Be prepared for the Mountains and beyond!</h1>
                </div>
            </div>
        </div>
    </div>;
}
