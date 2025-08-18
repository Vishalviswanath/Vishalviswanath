import React from 'react'

const Aboutme = () => {
    return (
        <>
            <div
                style={{ textAlign: 'center' }}
            >
                <p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        marginBottom: '1rem',
                    }}
                >
                    I’m a Full-Stack Developer specializing in the{' '}
                    <strong style={{ color: 'var(--color3)' }}>
                        MERN stack (MongoDB, Express.js, React.js, Node.js)
                    </strong>
                    , crafting modern, scalable, and visually appealing web applications from
                    concept to deployment. With a strong eye for design and a passion for
                    clean, maintainable code, I ensure every project I build is functional,
                    user-friendly, and future-ready.
                </p>

                <p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        marginBottom: '1rem',
                    }}
                >
                    My expertise spans both frontend and backend development — from designing
                    intuitive user interfaces to writing robust server logic and deploying
                    applications to production. I’m well-versed in technologies like{' '}
                    <strong style={{ color: 'var(--color3)' }}>
                        ReactJS, Redux, REST APIs, GitHub, Express.js, MongoDB, Tailwind CSS, and
                        Material UI
                    </strong>
                    .
                </p>

                <p
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        marginBottom: '2rem',
                    }}
                >
                    Whether it’s collaborating with startups, entrepreneurs, or established
                    businesses, I deliver custom digital solutions that stand out. I’m always
                    exploring new tools and best practices to keep my work at the cutting edge.
                    Let’s work together to turn your ideas into reality!
                </p>
            </div>


            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.5rem",
                    width: "100%",
                }}
            >
                {[
                    {
                        title: "UI/UX Design",
                        desc: "I design responsive, intuitive, and modern interfaces tailored to your audience — using Figma and modern CSS frameworks.",
                    },
                    {
                        title: "Frontend Development",
                        desc: "Using React.js, I build fast, interactive UIs that deliver seamless user experiences across all devices.",
                    },
                    {
                        title: "Backend Development",
                        desc: "I develop secure, scalable server-side applications with Node.js, Express, and MongoDB.",
                    },
                    {
                        title: "Full Deployment",
                        desc: "From domain setup to CI/CD and server configuration — I manage production-grade deployments using VPS, cloud, or PaaS.",
                    },
                    {
                        title: "Deployment & Domain Hosting",
                        desc: "I handle everything from domain purchase, DNS configuration, SSL setup, and hosting — ensuring your site is live and secure.",
                    },
                    {
                        title: "Freelance Projects",
                        desc: "Need a custom web solution? I offer freelance development services tailored to your unique needs and timeline.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#fff",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            textAlign: "center",
                            alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px)";
                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "1rem",
                                marginBottom: "0.75rem",
                                color: "#007bff",
                                textAlign: "center",
                            }}
                        >
                            {item.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "1rem",
                                marginBottom: "0",
                                lineHeight: "1.6",
                                textWrap: "wrap",
                                color: "#555",
                            }}
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Aboutme