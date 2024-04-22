import React from 'react'
import heroImg from "../assets/images/image-web-3-desktop.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <main className="hero">
            <section className="hero_description">
                <img src={heroImg} alt="hero image" />
                <div className="hero-text">
                    <h1 className='font-bold'> The Bright Future of Web 3.0?</h1>
                    <div className="call-out">
                        <p>
                            {" "}
                            We dive into the next evolution of the web that claims to put the
                            power of the platforms back into the hands of the people. But is it
                            really fulfilling its promise?
                        </p>
                        <Link to={"/"} className="button">
                            Read more
                        </Link>
                    </div>
                </div>
            </section>
            <aside className="new-article">
                <h1 className="heading">New</h1>
                <article className="article">
                    <Link to={"/"}> Hydrogen VS Electric Cars</Link>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </article>
                <hr />
                <article className="article">
                    <Link to={"/"}>The Downsides of AI Artistry</Link>
                    <p>
                        What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </article>
                <hr />
                <article className="article">
                    <Link to={"/"}>Is VC Funding Drying Up?</Link>
                    <p>
                        Private funding by VC firms is down 50% YOY. We take a look at what that
                        means.
                    </p>
                </article>
            </aside>
        </main>

    )
}

export default Hero