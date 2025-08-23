// MyServices.jsx
import React from "react";
import ServiceCard from "../components/ServicesCard";
import "../components/MyServices.css";

const services = [
    {
        title: "UI/UX Design",
        desc: "I design responsive, intuitive, and modern interfaces tailored to your audience — using Figma and modern CSS frameworks.",
        image: "/uiux.jpg",
    },
    {
        title: "Frontend Development",
        desc: "Using React.js, I build fast, interactive UIs that deliver seamless user experiences across all devices.",
        image: "/fe.jpg",
    },
    {
        title: "Backend Development",
        desc: "I develop secure, scalable server-side applications with Node.js, Express, and MongoDB.",
        image: "/be.jpg",
    },
    {
        title: "Full Deployment",
        desc: "From domain setup to CI/CD and server configuration — I manage production-grade deployments using VPS, cloud, or PaaS.",
        image: "/full.png",
    },
    {
        title: "Deployment & Domain Hosting",
        desc: "I handle everything from domain purchase, DNS configuration, SSL setup, and hosting — ensuring your site is live and secure.",
        image: "/cloud.png",
    },
    {
        title: "Freelance Projects",
        desc: "Need a custom web solution? I offer freelance development services tailored to your unique needs and timeline.",
        image: "/fl.png",
    },
];

const MyServices = () => {
    return (
        <div className="services-section">
            {/* <h1>My Services</h1>
            <hr /> */}
            <div className="services-grid" style={{
                height: "100%"
            }}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        desc={service.desc}
                        image={service.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyServices;
