import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Landing extends React.Component {
  state = { submit: false, jobs: '' };

  search = () => {
    var data = this.state.lang;
    axios
      .get('https://jobs.github.com/positions.json?description=' + data)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          this.setState({
            jobs: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid" id="landing">
        <div className="row">
          <div className="card search">
            <div className="card-body">
              <div className="heading">
                what programming language you’re looking for a job in.
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter language"
                  onChange={(event) =>
                    this.setState({ lang: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={!this.state.lang}
                  onClick={this.search}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.jobs ? (
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {this.state.jobs.map((data, index) => (
                    <div className="jobList col-md-4">
                      <Link to={job / id}>
                        <div className="card">
                          <div className="card-body">
                            <div>{data.company}</div>
                            <div>{data.location}</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="card noJobs">
              <div class="card-body">No Jobs Available</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Landing;
