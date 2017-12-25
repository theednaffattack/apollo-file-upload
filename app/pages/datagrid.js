import Page from '../components/page'
import DataGridTwo from '../components/datagridtwo'
// const DynamicComponentWithNoSSR = dynamic(import('../components/datagrid'), {
//   ssr: false
// })

// <DynamicComponentWithNoSSR />

const DataGridPage = () => (
  <Page title="Datagrid Example">
    <h2>Datagrid Test</h2>
    <div style={{ width: '900px' }}>
      <DataGridTwo />
    </div>
  </Page>
)

export default DataGridPage
