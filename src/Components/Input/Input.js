import '../bootstrap/morph/bootstrap.min.css';

import React from 'react';

const Input = (props) =>{

    return (
        <div className="col-8 col-md-4 col-sm-6 form-floating mx-auto">
            <input type="text" className="form-control" placeholder="Bot-Name" onChange={props.inApp}/>
            <label htmlFor="Name">Name</label>
        </div>
    );
}

export default Input;