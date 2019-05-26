import React from 'react'
import MaterialTable from 'material-table'

function TreeList () {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id', type: 'numeric' },
      { title: 'Birthday', field: 'birthDay' },
      { title: 'Location', field: 'location' },
      {
        title: 'Alive',
        field: 'alive',
        lookup: { 0: 'Alive', 1: 'Dead' }
      },
      {
        title: 'Missing',
        field: 'missing',
        lookup: { 0: '', 1: 'Missing' }
      }
    ],
    data: [
      { id: 211, birthDay: '12/12/1990', location: '13.22, -144.99', alive: 0, missing: 1 },
      { id: 21111, birthDay: '12/12/2018', location: '23.22, -144.99', alive: 0, missing: 1 }
    ]
  })

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                const data = [...state.data]
                data.push(newData)
                setState({ ...state, data })
              }, 600)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                const data = [...state.data]
                data[data.indexOf(oldData)] = newData
                setState({ ...state, data })
              }, 600)
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                const data = [...state.data]
                data.splice(data.indexOf(oldData), 1)
                setState({ ...state, data })
              }, 600)
            })
        }}
      />
    </div>
  )
}

export default TreeList
