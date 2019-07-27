import React from 'react';

function Landing(props) {
  return (
    <div className="container">
      <h1 className="display-4">Welcome to my Todo Application</h1>
      <p className="display-6">
        This is a application made in the MERN stack, because this was made as a
        demo app meant to show off my skills to future employers, i've put a
        feature the automaticly deletes "todos" after 8 seconds.
        <br />
        <button>Let's make some "Todos"</button>
      </p>
      <br />
      <p className="display-6">
        If you want to check the code, please click on GitHub at the navbar.
      </p>
    </div>
  );
}

export default Landing;
