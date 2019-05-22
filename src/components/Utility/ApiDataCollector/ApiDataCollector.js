import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ApiDataCollector extends Component {

  async componentDidMount() {
      try {
        const result = await axios.get(this.props.url);
        this.props.onApiResponse({
          data: result.data,
          dataCategory: this.props.dataCategory
        });
      } catch (error) {
        this.props.onApiResponse({
          error: error
        });
      }
    }

    render() {
      return null;
    }
}

ApiDataCollector.propTypes = { onApiResponse: PropTypes.func.isRequired};

export default ApiDataCollector;