import React from 'react';

class SelectButton extends React.Component{
    
    handleClick(e){
        this.props.action()
        
    }

    render(){        
        const name = this.props.name;
        
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>{name}</button>
            </div>
        )
    }
}

export default SelectButton;