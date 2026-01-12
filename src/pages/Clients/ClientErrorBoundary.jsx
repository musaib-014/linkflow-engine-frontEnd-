import React from "react";

class ClientErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Client Page failed to load</h2>;
    }
    return this.props.children;
  }
}

export default ClientErrorBoundary;
