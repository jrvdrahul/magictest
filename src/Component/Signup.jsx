import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

class Signup extends React.Component {
  state = { login: false };

  submit = () => {
    if (this.state.password == this.state.confirmPassword) {
      localStorage.setItem('userEmail', this.state.email);
      this.setState({
        login: true,
      });
    } else {
      alert("Password don't match");
    }
  };

  render() {
    if (this.state.login) {
      return <Redirect to="/landing" />;
    }
    return (
      <div className="login">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Enter Password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            onChange={(event) =>
              this.setState({ confirmPassword: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            class="btn btn-primary"
            disabled={
              !this.state.email ||
              !this.state.password ||
              !this.state.confirmPassword
            }
            onClick={this.submit}
          >
            Sign Up
          </button>
        </div>
        <div>
          Already have an Account! <Link to="/">Login</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
