import React from "react";
import "./portfolio.css";
import Booklastic from "../../assets/booklastic-blog.png";
import MemeGenerator from "../../assets/Meme-Generator.png";
import WeatherApp from "../../assets/weather-app.png";
import ShoppingList from "../../assets/shopping-list.png";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={Booklastic} alt="booklastic" />
                    </div>
                    <h3>Booklastic Blog Place</h3>
                    <p>
                        Built a full-stack application to bring community of
                        people who love to read. Users will be able to share
                        reviews of their favorite books as well as comment on
                        other people's post. Additionally, users will be able to
                        use the live chat feature to communicate in real time.
                        The app is developed using multiple npm packages
                        including nodemon, express, sequelize, bcrypt, dotenv,
                        connect-session-sequelize, express-handlebars,
                        express-session, and socket.io.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://fathomless-bastion-58602.herokuapp.com/"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Deployed
                        </a>
                        <a
                            href="https://github.com/JTreezy/booklastic-blog-place"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={MemeGenerator} alt="meme generator" />
                    </div>
                    <h3>Meme Generator</h3>
                    <p>
                        Created a meme generating web application for avid meme
                        fans to create a personalized meme. The web app is built
                        using Tailwind as a CSS framework along with HTML and
                        JavaScript (jQuery). Imgflip API is used to source the
                        meme content and icanhazdadjoke API is used to generate
                        a random joke on refresh.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://ryuandrew.github.io/Project-1-Team-13/"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Deployed
                        </a>
                        <a
                            href="https://ryuandrew.github.io/MemeGenerator/"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={WeatherApp} alt="weather app" />
                    </div>
                    <h3>Weather App</h3>
                    <p>
                        Developed a weather application using the OpenWeather
                        One Call API to retrieve weather data such as current
                        temperature, maximum temperature, and minimum
                        temperature for cities around the world. The website is
                        built using HTML, CSS, JavaScript, and React.js.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://ryu-weather-app.netlify.app/"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Deployed
                        </a>
                        <a
                            href="https://github.com/ryuandrew/ryu-weather-app-react"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ShoppingList} alt="shopping list" />
                    </div>
                    <h3>Shopping List</h3>
                    <p>
                        Built a shopping list app to use personally with local
                        storage and React hooks such as useState() and
                        useEffect(). Users can add an item, delete an item,
                        adjust the quantity of an item, checkmark the purchased
                        item, and clear the entire list of items.
                    </p>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://andrew-shopping-list.netlify.app"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Deployed
                        </a>
                        <a
                            href="https://github.com/ryuandrew/shopping-list-netlify"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
