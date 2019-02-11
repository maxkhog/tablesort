import React from 'react'


export default (props) => {
    return (
        <tbody>
            {props.data.map((data,index) => 
            <tr key={index}>{ data.map((td,index) => <td key={index}>{td}</td>)}</tr>)}
        </tbody>
    )
}
