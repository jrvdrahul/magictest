import React from 'react';
import axios from 'axios';
import Success from './Success';
import '../App.css';

class Job extends React.Component {
  state = {
    details: '',
    apply: false,
  };

  componentDidMount() {
    var id = this.props.match.params.id;

    axios
      .get('https://jobs.github.com/positions/' + id + '.json')
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            details: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  apply = () => {
    this.setState({
      apply: true,
    });
  };

  render() {
    let detail = this.state.details;
    return (
      <>
        <div className="header">Welcome {this.state.user}</div>
        {!this.state.apply ? (
          <div className="container-fluid jobDetails">
            <div className="card">
              <div className="row col-md-12">
                <div className="col-md-2">
                  <h3>Job Details</h3>
                </div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.apply}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <hr />
              <div className="card-body">Company: {detail.company}</div>
              <div className="card-body">Url: {detail.company_url}</div>
              <div className="card-body">location: {detail.location}</div>
              <div className="card-body">Job Title: {detail.title}</div>
              <div className="card-body">Job Type: {detail.type}</div>
              <div className="card-body">Description: {detail.description}</div>
            </div>
          </div>
        ) : (
          <Success detail={detail} />
        )}
      </>
    );
  }
}

export default Job;
