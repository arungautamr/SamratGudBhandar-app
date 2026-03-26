import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="container">
            <div className="error-content">
              <h1>Oops! Something went wrong</h1>
              <p>We're sorry, but something unexpected happened.</p>
              <button onClick={this.resetError} className="btn btn-primary">
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
