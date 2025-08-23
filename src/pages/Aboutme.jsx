import React from 'react'
import { LiaFileDownloadSolid } from 'react-icons/lia'

const Aboutme = () => {
    return (
        <>

            <div
                style={{ padding: "2rem", textIndent: "5em", }}
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

            <div style={{ width: "100%", textAlign: "right", paddingRight: "2rem" }}>

                <button style={{
                    boxShadow: "none", padding: "10px 20px", marginBottom: "40px"

                }}> <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 3 }}>

                        <LiaFileDownloadSolid />
                        HIRE ME
                    </div>
                </button>
            </div>


        </>
    )
}

export default Aboutme