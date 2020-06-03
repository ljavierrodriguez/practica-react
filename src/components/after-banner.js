import React, { useState, useEffect } from 'react';


const AfterBanner = props => {

    const [info, setInfo] = useState([
        { titulo: 'Focus on Systems', descripcion: `While our prices are competitive, it's the value that's unmatched.`, enlace: { titulo: 'Read More', url: '/#' } },
        { titulo: 'Plan of Action', descripcion: `While our prices are competitive, it's the value that's unmatched.`, enlace: { titulo: 'Read More', url: '/#' } },
        { titulo: 'Quality Compliance', descripcion: `While our prices are competitive, it's the value that's unmatched.`, enlace: { titulo: 'Read More', url: '/#' } },
    ])

    useEffect(() => {
        // componentDidMount

        console.log("mounted component");

        /* let newItems = []


        for (let i = 0; i < 5; i++) {
            newItems.push({
                titulo: 'Item Added',
                descripcion: `While our prices are competitive, it's the value that's unmatched.`,
                enlace: {
                    titulo: 'Read More',
                    url: '/#'
                }
            })
        }

        setInfo(info.concat(newItems)); */

        return () => {
            // componentWillUnmount
            console.log("Unmounted Component");
        }
    }, [])

    function insertInfo() {
        setInfo(info.concat({
            titulo: 'Item Added',
            descripcion: `While our prices are competitive, it's the value that's unmatched.`,
            enlace: {
                titulo: 'Read More',
                url: '/#'
            }
        }));
    }

    return (
        <div className="after-banner">
            <button className="btn btn-primary btn-sm" onClick={(e) => {
                //e.preventDefault();

                /* setInfo([...info, { 
                    titulo: 'Item Added', 
                    descripcion: `While our prices are competitive, it's the value that's unmatched.`, 
                    enlace: { 
                        titulo: 'Read More', 
                        url: '/#' 
                    } 
                }]); */

                /* setInfo(info.concat({ 
                    titulo: 'Item Added', 
                    descripcion: `While our prices are competitive, it's the value that's unmatched.`, 
                    enlace: { 
                        titulo: 'Read More', 
                        url: '/#' 
                    } 
                })); */

                insertInfo()

            }}>Add info</button>
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-4 col-sm-4">
                        <div className="ab-item">
                            <h3>Focus on Systems</h3>
                            <p>While our prices are competitive, it's the value that's unmatched.</p>
                            <br />
                            <a href="/#">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="ab-item">
                            <h3>Plan of Action</h3>
                            <p>While our prices are competitive, it's the value that's unmatched.</p>
                            <br />
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="ab-item">
                            <h3>Quality Compliance</h3>
                            <p>While our prices are competitive, it's the value that's unmatched.</p>
                            <br />
                            <a href="#">Read More</a>
                        </div>
                    </div> */}

                    {
                        info.length > 0 &&
                        info.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-4" key={index}>
                                    <div className="ab-item">
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descripcion}</p>
                                        <br />
                                        <a href={item.enlace.url}>{item.enlace.titulo}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AfterBanner;