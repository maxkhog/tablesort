import React from 'react'
const SortableHeader = (props) => {
    const { head, onClick } = props;
  
    return(
      <thead>
      <tr>
        {head.map((element, index) =>
          <th
            key={index}
            onClick={() => onClick(index, element.sort)}
          >
            {element.label}
          </th>
        )}
      </tr>
      </thead>
    );
  }
export default SortableHeader;
