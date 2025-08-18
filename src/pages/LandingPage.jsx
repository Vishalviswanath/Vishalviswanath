import { useNavigate } from 'react-router-dom'
import SplitText from '../common/SplitText'

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div
            className='contact-form'
            style={{
                width: '100%',
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 1rem',
            }}
        >
            <h1 key='headline' style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 'bold',
                marginBottom: '1rem',
            }}>
                <SplitText
                    text=" Hi, I'm Vishal 👋"
                    delay={150}
                    duration={0.9}
                    ease="elastic.out(1,0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />

            </h1>
            <p key='subheadline' style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: "1.6", maxWidth: "600px" }}>
                <SplitText
                    text="A Full-Stack Developer crafting modern web applications with React and Node.js — turning ideas into scalable digital experiences."
                    delay={250}
                    duration={0.9}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />

            </p>

            <div key='cta' style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => navigate('/projects')}>View My Work</button>
                <button onClick={() => navigate('/contactme')}>Let’s Work Together</button>
            </div>
        </div>
    )
}

export default LandingPage