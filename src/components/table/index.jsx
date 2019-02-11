import React, { Component } from 'react';
import HeadTable from './tableHead';
import BodyTable from './tableBody';
import Table from 'react-bootstrap/Table'
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       columns: [{label: 'name',
                  sort: 'default',},
                {label: 'age',
                sort: 'default',}],
       data: [['Taler','20'],
              ['Teler','21'],
              ['Tiler','22'],
              ['Tyler','23']],
    }
  };
  render() {
    const { data, columns } = this.state;
    return (
      <div>
        <header>
          <button>{'<'}</button>
          <select></select>
          <button>{'>'}</button>
        </header>
        <Table>
          <HeadTable head={columns} onClick={this.sortTableFunc}/>
          <BodyTable  data={data}/>
        </Table>
      </div>
    )
  }
  sortTableFunc = (id, sortMethod) => {
    const { data, columns } = this.state;
  
    let currentSortMethod = 'default';
  
    switch (sortMethod) {
      case 'default':
        currentSortMethod = 'asc';
        break;
      case 'asc':
        currentSortMethod = 'desc';
        break;
      case 'desc':
        currentSortMethod = 'asc';
        break;
      default:
        currentSortMethod = 'asc';
    }
  
    const changeColumn = columns.map((e, i) =>
      ({ ...e, sort: i == id ? currentSortMethod : 'default' })
    );
  
    const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);
  
    this.setState({
      data: sortData,
      columns: changeColumn,
    });
  }


}
