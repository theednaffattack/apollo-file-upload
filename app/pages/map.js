import dynamic from 'next/dynamic'
import Page from '../components/page'
import SingleUploader from '../components/single-uploader'
import MultipleUploader from '../components/multiple-uploader'
import UploadList from '../components/upload-list'
import withData from '../providers/with-data'
// import Map from '../components/map'
const DynamicComponentWithNoSSR = dynamic(import('../components/map'), {
  ssr: false
})

const HomePage = () => (
  <Page title="Map Example">
    <h2>Map Test</h2>
    <DynamicComponentWithNoSSR />
  </Page>
)

export default HomePage
// export default withData(HomePage)
