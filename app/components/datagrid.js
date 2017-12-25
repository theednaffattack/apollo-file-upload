import React from 'react'
const ReactDataGrid = require('react-data-grid')

class DataGrid extends React.Component {
  constructor(props, context) {
    super(props, context)
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'task',
        name: 'Title',
        editable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        editable: true
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        editable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        editable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        editable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        editable: true
      }
    ]

    this.state = { rows: this.createRows(1000) }
  }

  getRandomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toLocaleDateString()
  }

  createRows = numberOfRows => {
    let rows = []
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        task: 'Task ' + i,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ['Critical', 'High', 'Medium', 'Low'][
          Math.floor(Math.random() * 3 + 1)
        ],
        issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
          Math.floor(Math.random() * 3 + 1)
        ],
        startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
        completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
      })
    }
    return rows
  }

  rowGetter = i => {
    return this.state.rows[i]
  }

  handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    let rows = this.state.rows.slice()

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i]
      let updatedRow = update(rowToUpdate, { $merge: updated })
      rows[i] = updatedRow
    }

    this.setState({ rows })
  }

  componentDidMount() {
    // const { lng, lat, zoom } = this.state // pull a few objects out of state if we're sure it mounted
    // stick some fun stuff in here that needs initial state
  }

  render() {
    // const { lng, lat, zoom } = this.state // pull a few objects out of state

    return (
      <div>
        <h1>This is where all my fun stuff will happen.</h1>
        <ReactDataGrid
          enableCellSelect={true}
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
          onGridRowsUpdated={this.handleGridRowsUpdated}
        />
      </div>
    )
  }
}

export default DataGrid
