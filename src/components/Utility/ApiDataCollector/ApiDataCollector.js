import { Component } from 'react';
import axios from 'axios';

class ApiDataCollector extends Component {

  async componentDidMount() {
      try {
        const result = await axios.get(this.props.url);
        this.props.OnApiResponse({
          data: result.data,
          dataCategory: this.props.dataCategory
        });
      } catch (error) {
        this.props.OnApiResponse({
          error: error
        });
      }
    }

    render() {
      return null;
    }
}


export default ApiDataCollector;