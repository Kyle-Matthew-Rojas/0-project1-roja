import React from 'react';

export default class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return(
            <tr style={{fontWeight: 'bold', textAlign: 'center'}}>
                {category}
            </tr>
        );
    };
}