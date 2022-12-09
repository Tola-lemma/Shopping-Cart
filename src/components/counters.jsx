import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() { 
        //object destructuring
 const {onReset,counters,onDelete,onIncrement} =this.props;

        return (
            <div>
             <button 
              onClick={onReset}
              className="btn btn-primary btn-sm m-2">Reset
             </button>
               {counters.map(counter => (
               <Counter 
               key={counter.id} //used internally by react
               onIncrement={onIncrement}
               onDelete={onDelete} 
               counter={counter} //carry all the data about counters
               />
                ))}
            </div>
        )
    }
}
 
export default Counters;