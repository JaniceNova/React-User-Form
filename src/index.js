import React from 'react';
import ReactDOM from 'react-dom';
    
    class App extends React.Component {
         UserForm() {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }
        render(){
     
     return( 
        <div>{this.UserForm()}</div>
     );
    
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);