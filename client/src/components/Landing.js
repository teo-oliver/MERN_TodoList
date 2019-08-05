import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/john-fowler-bgGr1eKlYNw-unsplash.jpg';

function Landing() {
  useEffect(() => {
    // document.body.style.backgroundImage = `url(${Image})`;
  }, []);

  return (
    <div className="container ">
      <br />
      <section className="black-background">
        <br />
        <h1 className="lead display-4 text-center">Todo List </h1>
        <br />
        <div className="col-8 mx-auto">
          <p className="text-center">
            This application is a simple Todo List webapp.
          </p>
          <h3 class="font-weight-bold mb-2">Tools:</h3>

          <p>- MERN stack</p>
          <p>- Bootstrap modified with custom CSS</p>
          <p>- 'ReactTransitionGroup' for the transitions.</p>
          <p>- MongoDb Atlas for the MongoDb database.</p>

          <div className="text-center">
            <Link to="/app" className="btn btn-primary mt-2">
              Send me to the app...
            </Link>
          </div>

          <p>
            Obs: I've made feature the automaticly deletes "todos" after 8
            seconds to keep the app clean for newcomers to test.
          </p>
          <br />

          <br />
        </div>
      </section>
    </div>
  );
}

export default Landing;
