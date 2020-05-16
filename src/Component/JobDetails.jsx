import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Job extends React.Component {
  state = {};

  search = () => {
    var id = this.state.lang;
    axios
      .get('https://jobs.github.com/positions/' + id)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          //   this.setState({
          //     jobs: response.data,
          //   });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <div>details</div>;
  }
}

export default Job;
