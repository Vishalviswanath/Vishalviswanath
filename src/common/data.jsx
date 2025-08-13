import { Navigate, NavLink, useNavigate } from "react-router-dom";

export const navPages = [
  { path: '/', label: '' },
  { path: 'aboutme', label: 'About' },
  { path: 'projects', label: 'Projects' },
  { path: 'contactme', label: 'Contact' },
  // { path: 'techbee', label: 'TechBee' },
];


export const pages = [

  {
    label: '',
    path: '/',
    description: [
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
        <h1
          key='headline'
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Turning Ideas into Reality with Code & Creativity
        </h1>
        <p
          key='subheadline'
          style={{
            fontSize: '1rem',
            marginBottom: '1.5rem',
            lineHeight: '1.6',
            textWrap: 'wrap',
            justifySelf: 'center',
          }}
        >
          I'm a Full-Stack Developer crafting modern, scalable web experiences
          using the MERN stack — from concept to deployment.
        </p>
        <div key='cta' style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => NavLink('/projects')}>View My Work</button>
          <button onClick={() => Navigate('/contactme')}>Let’s Work Together</button>
        </div>
      </div>,
    ],
  },
  {
    label: 'about',
    path: 'aboutme',
    description: [
      // <>
      //   <p
      //     style={{
      //       fontSize: '1.1rem',
      //       lineHeight: '1.7',
      //       marginBottom: '1rem',
      //     }}
      //   >
      //     I’m a Full-Stack Developer specializing in the{' '}
      //     <strong style={{ color: 'var(--color3)' }}>
      //       MERN stack (MongoDB, Express.js, React.js, Node.js)
      //     </strong>
      //     , crafting modern, scalable, and visually appealing web applications from
      //     concept to deployment. With a strong eye for design and a passion for
      //     clean, maintainable code, I ensure every project I build is functional,
      //     user-friendly, and future-ready.
      //   </p>

      //   <p
      //     style={{
      //       fontSize: '1.1rem',
      //       lineHeight: '1.7',
      //       marginBottom: '1rem',
      //     }}
      //   >
      //     My expertise spans both frontend and backend development — from designing
      //     intuitive user interfaces to writing robust server logic and deploying
      //     applications to production. I’m well-versed in technologies like{' '}
      //     <strong style={{ color: 'var(--color3)' }}>
      //       ReactJS, Redux, REST APIs, GitHub, Express.js, MongoDB, Tailwind CSS, and
      //       Material UI
      //     </strong>
      //     .
      //   </p>

      //   <p
      //     style={{
      //       fontSize: '1.1rem',
      //       lineHeight: '1.7',
      //       marginBottom: '2rem',
      //     }}
      //   >
      //     Whether it’s collaborating with startups, entrepreneurs, or established
      //     businesses, I deliver custom digital solutions that stand out. I’m always
      //     exploring new tools and best practices to keep my work at the cutting edge.
      //     Let’s work together to turn your ideas into reality!
      //   </p>

      //   <h2
      //     style={{
      //       fontSize: '1.5rem',
      //       marginBottom: '1rem',
      //       fontWeight: 'bold',
      //       color: 'var(--color4)',
      //     }}
      //   >
      //     What I Do
      //   </h2>

      //   <div
      //     style={{
      //       display: 'grid',
      //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      //       gap: '20px',
      //       zIndex: -1
      //     }}
      //   >
      //     {[
      //       {
      //         title: 'UI/UX Design',
      //         text: 'I design responsive, intuitive, and modern interfaces tailored to your audience — using Figma and modern CSS frameworks.',
      //       },
      //       {
      //         title: 'Frontend Development',
      //         text: 'Using React.js, I build fast, interactive UIs that deliver seamless user experiences across all devices.',
      //       },
      //       {
      //         title: 'Backend Development',
      //         text: 'I develop secure, scalable server-side applications with Node.js, Express, and MongoDB.',
      //       },
      //       {
      //         title: 'Full Deployment',
      //         text: 'From domain setup to CI/CD and server configuration — I manage production-grade deployments using VPS, cloud, or PaaS.',
      //       },
      //       {
      //         title: 'Freelance Projects',
      //         text: 'Need a custom web solution? I offer freelance development services tailored to your unique needs and timeline.',
      //       },
      //     ].map((item, index) => (
      //       <div
      //         key={index}
      //         style={{
      //           padding: '20px',
      //           background: 'var(--color8)',
      //           borderRadius: '12px',
      //           boxShadow:
      //             'inset 14px 14px 28px #49190c, inset -14px -14px 28px #6d2512',
      //           color: 'var(--color4)',
      //           transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      //         }}
      //         onMouseEnter={(e) => {
      //           e.currentTarget.style.transform = 'translateY(-5px)';
      //         }}
      //         onMouseLeave={(e) => {
      //           e.currentTarget.style.transform = 'translateY(0)';
      //         }}
      //       >
      //         <h3
      //           style={{
      //             fontSize: '1.2rem',
      //             marginBottom: '0.5rem',
      //             color: 'var(--color3)',
      //           }}
      //         >
      //           {item.title}
      //         </h3>
      //         <p
      //           style={{
      //             fontSize: '1rem',
      //             lineHeight: '1.5',
      //           }}
      //         >
      //           {item.text}
      //         </p>
      //       </div>
      //     ))}
      //   </div>
      // </>
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

    ],
  },
  {
    label: 'projects',
    path: 'projects',
    description: ['My Projects', "Here's a list of my projects."],
  },
  {
    label: 'contact',
    path: 'contactme',
    description: [
      <div className='contact-wrapper'>
        <div className='leftside-card'>
          Contact Me
          <br />
          You can contact me here.
          <div className='google-maps'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.65703178784!2d78.35557808624752!3d17.521488561694785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dff28839e11%3A0x30e1ac4d7d83c8af!2sNizampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718812993540!5m2!1sen!2sin'
              style={{
                border: 0,
                maxWidth: '100%',
                borderRadius: '20px',
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy=''
            ></iframe>
          </div>
        </div>

        <div className='rightside-card contact-container'>
          <form className='contact-form'>
            <input type='text' placeholder='Full Name' />
            <input type='number' placeholder='Mobile Number' />
            <input type='email' placeholder="What's your email?" />
            <textarea placeholder='Your questions...'></textarea>
            <button type='submit'>SEND MESSAGE</button>
          </form>
        </div>
      </div>,
    ],
  },
  {
    label: 'techbee',
    path: 'techbee',
    description: ['Contact Me', 'You can contact me here.'],
  },
];
