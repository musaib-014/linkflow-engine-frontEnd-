import React from "react";

class DomainErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Failed to load Domains page.</h2>;
    }
    return this.props.children;
  }
}

export default DomainErrorBoundary;
