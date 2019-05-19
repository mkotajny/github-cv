import React from 'react';
import axios from 'axios';


const withApiFetching = () => (WrappedComponent) =>
  class CvContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        data: null,
        isLoading: false,
        error: null
      }
    }

    async componentDidMount() {
      this.setState({ isLoading: true });

      try {
        const result = await axios.get(this.props.url);
        this.setState({
          data: result.data,
          isLoading: false
        });
      } catch (error) {
        this.setState ({
          error: true,
          isLoading: false
        });
      }
    }

    render() {
      if (this.state.data !== null)
        return <WrappedComponent { ...this.state } />;
      return null;
    }
  }

export default withApiFetching;