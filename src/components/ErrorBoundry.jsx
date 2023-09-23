import { Component } from 'react';

class ErrorBoundary extends Component {


componentDidCatch (error) { 

}
render () {
return this.props. children;
}
}

export default ErrorBoundary;


//class based component fir error handling 

//throw error and get in life cycle method componentDidCatch() method