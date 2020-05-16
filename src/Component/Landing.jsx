import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Landing extends React.Component {
  state = { submit: false };

  render() {
    return (
      <div className="container-fluid" id="landing">
        <div className="card">
          <div className="card-body">
            <div className="heading">
              what programming language you’re looking for a job in.
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter language"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
