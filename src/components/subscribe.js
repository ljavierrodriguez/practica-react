import React, { useState } from 'react';

const Subscribe = props => {
    const [state, setState] = useState({
        email: '',
        password: '',
        error: null
    });

    //const [email, setEmail] = useState("");
    //const [error, setError] = useState(null);


    const handleChange = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        //setEmail(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (state.email === "") {
            setState({
                ...state,
                error: "Debe ingresar email"
            })
            e.target.email.placeholder = "Debe Ingresar email"
        }

    }

    return (
        <div className="subscribe" id="subscribe">
            <div className="container">
                <div className="sub-content">
                    <h3>Subscribe Here for Updates</h3>
                    <form role="form" onSubmit={handleSubmit} method="post">
                        <div className="input-group">
                            <input type="email" className="form-control" name="email" placeholder="Email..." value={state.email}
                                onChange={handleChange} />
                            <small>{!!state.error && state.error}</small>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">Subscribe</button>
                            </span>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;