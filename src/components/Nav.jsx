import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
      <div className="font">
        <div>
          <Link to='/'>
            <span className="weater">App Clima</span>
          </Link>
        </div>
          <SearchBar
            onSearch={onSearch}
          />
        <div>
          <Link to='/about'>
            <span className="about">About</span>
          </Link>
        </div>
      </div>
    
  );
};

export default Nav;
