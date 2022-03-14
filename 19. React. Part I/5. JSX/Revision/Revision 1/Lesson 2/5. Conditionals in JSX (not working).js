import React from 'react';
import ReactDOM from 'react-dom';
// the code below does not work because if statements can not be embedded in JSX because of compiling issues
const returnGreeting=(
    <h1>
        {
            if(order.complete){
            return 'thanks';
        }
            else {
                return "no thanks"
        }
        }
    </h1>
)