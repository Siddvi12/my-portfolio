import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import girl from "../../../images/girl.png"
import { BsAwardFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa"
const IntroContent = () => {

    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="icon"
                                />
                            </span>
                            <span className="text">, Hello</span>
                        </span>
                        <span className="big-text">Hey Vikash here</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Totam perferendis minima ratione! Aut placeat
                        omnis libero minima nulla accusantium magni maxime error
                        magnam. Dolorem, neque a! Adipisci voluptate iure optio?
                    </p>
                    <CallToAction text="Contact me"/>
                </div>
                <div className="right-col">
                    <img src={girl} alt="vikash singh" />
                    <div className="highlights horizontal ">
                        <div className="icon">
                            <BsAwardFill/>
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights verticale">
                        <div className="icon">
                            <FaUser/>
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Coustmers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
