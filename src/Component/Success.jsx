import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Success from './Success';
import '../App.css';

class ApplySuccess extends React.Component {
  state = { success: false };

  submit = () => {
    this.setState({
      success: true,
    });
  };

  render() {
    let { name, email, coverLetter } = this.state;
    let detail = this.props.detail;
    return (
      <>
        <div className="container-fluid success">
          {!this.state.success ? (
            <div className="card">
              <div className="card-body">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Cover letter note"
                    onChange={(event) =>
                      this.setState({ coverLetter: event.target.value })
                    }
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-body">
                <h2>You Have Successfully Applied for the job </h2>
                <div>Here are the details</div>
                <hr></hr>
                <div class="row">
                  <div className="col-md-6">
                    <div>Name: {name}</div>
                    <div>Email: {email}</div>
                    <div>Cover Letter: {coverLetter}</div>
                  </div>
                  <div className="col-md-6">
                    <div>Company: {detail.company}</div>
                    <div>Title: {detail.title}</div>
                    <div>Type: {detail.type}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ApplySuccess;
