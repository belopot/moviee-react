import React from 'react';

export class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><a href="http://www.luigibenvenuti.com/" target="_blank" rel="noopener noreferrer">Made by Luigi Benvenuti</a></li>
          <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">API: The Movie Database</a></li>
        </ul>
      </nav>
    );
  }
}
