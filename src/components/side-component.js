import React from 'react';

function Side(){
    return ( 
        <div>
            <p><strong>Sizes:</strong></p>

            <button class="btn btn-default xs" type="submit">XS</button>
            <button class="btn btn-default s" type="submit">S</button>
            <button class="btn btn-default m" type="submit">M</button>
            <button class="btn btn-default ml" type="submit">ML</button>
            <button class="btn btn-default l" type="submit">L</button>
            <button class="btn btn-default xl" type="submit">XL</button>
            <button class="btn btn-default xxl" type="submit">XXL</button>

            <p class="side-text">Leave a Star on Github if this repository was useful ;)</p>

            <p>
                <button type="button" class="btn-default">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                </button>
            </p>

        </div>
     );
}


export default Side;