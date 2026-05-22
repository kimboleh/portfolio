import { Button } from '../components/Button/Button';
import { HeaderNav } from '../components/HeaderNav/HeaderNav';

export default function Home() {
    return (
        <div>
            <HeaderNav
                logo='/favicon.ico'
                siteTitle={''}
                button={<Button primary rounded={false} link={`/connect`} label='Contact Me' />}
            />
            { /* TOP HERO */}
            <section id="main-hero" aria-label="introduction">
                <div id="hero-left">
                    <div id="hero-title">
                        <h1>Hey there.</h1>
                        <h1>I'm Kimberly, <br /><span id="description-tags"><span id="webdev">web developer</span>, <span id="swe">software engineer</span>, & <span id="uxd">WordPress wizard</span>.</span></h1>
                    </div>
                </div>
                <div id="hero-right">
                    <img src="/assets/img/hero-image.webp" alt="Kimberly, a white woman with curly red hair, stands in a forest next to a trailhead sign. She is looking to the left, and she is wearing a green beanie, black rain jacket, black jeans, and a graphic t-shirt." />
                    <div id="photo-credit" aria-label="photo credit">&#169; Blaine Greenway 2024</div>
                </div>
            </section>
            { /* ABOUT ME HERO */}
            <section id="about-me" aria-label="About Me">
                <div id="about-left">
                    <div id="about-text">
                        <h2>a little about me</h2>
                        <p>Nice to meet you - I'm Kimberly, a developer in Portland, OR who's passionate about building things for the web that are fun, functional, and user-friendly!</p>
                        <p>One of my prized possessions is a small book titled "Make Your Own Web Page! A Guide For Kids"; it's where, at the age of six, I first learned the basics of HTML and web design.</p>
                        <p>I've come a long way since my 90s HTML page days, but digital tools that are both functional and visually appealing have been what I've loved coming back to work on most. From <a href="https://www.graphicalanalysis.app/">science classroom software</a> to <a href="https://www.meatandright.com/">handy web tools</a>, I love working on projects that serve people & look good doing it. </p>
                    </div>
                </div>
                <div id="about-right">
                    <div id="skill-lists">
                        <h2>what I'm good at</h2>
                        <div id="list-container">
                            <ul id="list-1" className="active-list">
                                <li>JavaScript & TypeScript</li>
                                <li>React.js</li>
                                <li>Node</li>
                                <li>WordPress Development</li><br />

                                <li>HTML/CSS</li>
                                <li>SCSS & SASS</li>
                                <li>PHP</li>
                                <li>Web Content Accessibility Guidelines (WCAG)</li><br />

                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>C/C++</li>
                                <li>Python</li>
                            </ul>
                            <ul id="list-2" className="inactive-list">
                                <li>Git & SVN</li>
                                <li>GitHub</li>
                                <li>Bitbucket</li><br />

                                <li>Storybook</li>
                                <li>Figma</li>
                                <li>AdobeXD</li><br />

                                <li>User Experience Design</li>
                                <li>Design Systems</li><br />

                                <li>Public Speaking & Presenting</li>
                                <li>Communicating to Diverse Audiences</li>
                                <li>Documentation & Technical Writing</li>
                            </ul>
                        </div>
                    </div>
                    <div id="trees">
                        <img src="assets/img/tree-fill.svg" alt="taller silhouette of a pine tree" id="tree-1" /><img src="assets/img/tree-fill.svg" alt="shorter silhouette of a pine tree" id="tree-2" />
                    </div>
                </div>
            </section>
            { /* PROJECTS */}
            <section id="projects-section" aria-label="My Projects">
                <h2>projects I've worked on!</h2>
                <div id="project-cards">
                    { /* Cards added in via JS function */}
                </div>
            </section>
            <footer id="footer">
                <div className="icon-bar">
                    <a href="https://github.com/kimboleh"><img src="assets/img/icons/github.png" alt="github logo icon" /></a>
                    <a href="mailto:hello@kimberlynachbur.dev"><img src="assets/img/icons/email.png" alt="email envelope icon" /></a>
                </div>
                <p className="credits">Coded by hand with HTML, CSS, & JavaScript.</p>
                <p className="credits">&#169; K.N. 2026</p>
            </footer>
        </div>
    );
}