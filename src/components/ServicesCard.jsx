import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./MyServices.css";

const ServiceCard = ({ title, desc, image }) => {
    return (
        <div className="card">
            <h6 className="card-title">{title}</h6>

            <div className="image-wrapper">
                <img src={image} alt={title} className="card-img" />
                <div className="overlay"></div>
            </div>
            <div className="card-desc">
                <p>{desc}</p>
            </div>
            <div className="arrow-btn">
                <GoArrowUpRight size={18} />
            </div>
        </div>
    );
};

export default ServiceCard;
