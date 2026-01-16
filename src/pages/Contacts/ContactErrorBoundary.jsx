import React from "react";

class ContactErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Contacts page crashed.</h2>;
    }
    return this.props.children;
  }
}

export default ContactErrorBoundary;
