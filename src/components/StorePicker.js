import React from 'react';

class StorePicker extends React.Component{
    render(){
        return (             
            <form className="store-selector">
                <h2>Please select store</h2>
                <input type="text" requred placeholder="Store Name" />
                <button type="submit" >Visit store</button>
         
            </form>
        )
    }
}

export default StorePicker;
