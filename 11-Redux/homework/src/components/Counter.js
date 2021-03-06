import React, { Component } from "react";
import { connect } from 'react-redux';
// import { increment, decrement } from '../actions';
import * as TodasLasAccions from "../actions/index" // Importo lo mismo que arriba pero de otra forma: 
                                                    // :* significa importame todo. as: le da un nombre a ese todo.

class Counter extends Component {

    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
      this.props.count % 2 !== 0 ? this.props.increment() : null
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
        setTimeout(() => {
            this.props.increment()
        }, 1000);
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer click en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <p>
                Clickeado: {this.props.count} veces 
                {/* this.props.count: hace referencia a mi estado de Redux, que inicialmente esta en 0 */}
                <button onClick={ this.props.increment }> + {/* Incremeta */}</button>
                <button onClick={this.props.decrement}> - {/* Decrementa */}</button>

         
                <button onClick={this.incrementIfOdd}>Incrementa si es impar</button>
                <button onClick={this.incrementAsync}>Incrementa despues de un segundos</button>  
            </p>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
    return {
        count: state.count //state.count: Del state de Redux traeme count. Va a ser el valor de la props
    }; //count: como se va a llamar la props en mi componente
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
// Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.


export default connect(mapStateToProps, TodasLasAccions)(Counter);
// Conectame mi componente "Counter" con Redux. 
// Recibe dos argumentos:
//    1: mapStateToProps: Toma la parte del estado de Redux que quiero y lo retorna como props del componente
//    2: Actions que quiero tener disponible desde mi componente

