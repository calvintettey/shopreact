import React from 'react';

function Header() {
    return (
    <div>
        <div class="row">

            <div class="col-md-7 prod-found">
                <p>16 Product(s) found</p>
            </div>

            <div class="col-md-5">
                <label class="order-by" style={{float: 'right', textAlign: 'left'}}>Order by
                    <select>
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                        <option>Select</option>
                    </select>
                </label>

                
            </div>
        </div>
    </div>
    );
}

export default Header;