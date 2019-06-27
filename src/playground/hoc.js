// higher order component (hoc) - a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>

    </div>

);

const withAdminWarning = (WrappedComponent)=>{

    return (props) =>(
        <div>
            {props.isAdmin && <p> this is private info, please don't share</p>}
            <p>This is private info</p>
            <WrappedComponent {...props}/>

        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {

    return (props) => (
        <div>
            {props.isAuthentiction?(
                   <WrappedComponent {...props}/>
            ):(
                <p>please login</p>
            )}
        </div>

    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthentiction ={false} info= "Customer information" />, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin ={false} info= "Customer information" />, document.getElementById('app'));