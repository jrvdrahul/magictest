import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';

class Login extends React.Component {
  state = { login: false };

  submit = () => {
    if (this.state.email === 'screen' && this.state.password === 'magic') {
      localStorage.setItem('userEmail', this.state.email);
      this.setState({
        login: true,
      });
    } else {
      alert('Invalid Credentails');
    }
  };

  render() {
    if (this.state.login) {
      return <Redirect to="/landing" />;
    }
    return (
      <div className="login">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submit}
            disabled={!this.state.email || !this.state.password}
          >
            Log In
          </button>
        </div>
        <div>
          Not have an Account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Login;
