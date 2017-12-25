import React from 'react'
import { makeData, Logo, Tips } from '../helpers/Utils'

// Import React Table
import ReactTable from 'react-table'

// style={{ backgroundColor: '#fafafa' }}

class DataGridTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      data: makeData()
    }
    this.renderEditable = this.renderEditable.bind(this)
  }
  renderEditable(cellInfo) {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data]
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
          this.setState({ data })
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    )
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <Tips />
        <br />
        <ReactTable
          data={data}
          columns={[
            {
              Header: 'First Name',
              accessor: 'firstName',
              Cell: this.renderEditable
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
              Cell: this.renderEditable
            },
            {
              Header: 'Full Name',
              id: 'full',
              accessor: d => (
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + ' ' + d.lastName
                  }}
                />
              )
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    )
  }
}

export default DataGridTwo
