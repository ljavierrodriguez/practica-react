import React from 'react';


class AppClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Luis Rodriguez',
            mostrar: false,
            notas: [10, 23, 43, 12, 8, 27, 19]
        }
        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }

    componentDidMount() {
        console.log("Mounted Component...");
    }

    componentWillUnmount() {
        console.log("Unmounted Component...");
    }

    cambiarMostrar() {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }

    render() {

        const lists = this.state.notas.map((nota, index) => <li key={index}>{nota}</li>)

        return (
            <>
                <h1>Hola desde un Component de Clase</h1>
                <p>{this.state.name}</p>

                {
                    this.state.mostrar ?
                        (
                            <h3>Primer Contenido</h3>
                        ) : (
                            <h3>Segundo Contenido</h3>
                        )
                }

                <button onClick={this.cambiarMostrar}>
                    {
                        this.state.mostrar ?
                            (
                                <h3>Mostrar Segundo Contenido</h3>
                            ) : (
                                <h3>Mostrar Primer Contenido</h3>
                            )
                    }
                </button>

                <ul>
                    {lists}
                </ul>
            </>
        )
    }
}

export default AppClass;