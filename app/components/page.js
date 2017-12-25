import Head from 'next/head'

const Page = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#22a699" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="icon" sizes="192x192" href="/static/apollo-icon.png" />
      <link rel="apple-touch-icon" href="/static/apollo-launcher-icon.png" />
      <link rel="stylesheet" href="/static/mapbox-gl.css" />
      <link rel="stylesheet" href="/static/react-table.css" />
    </Head>
    {children}
    <style jsx global>{`
      html {
        font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        color: white;
        background-color: #22a699;
        min-height: 100vh;
      }
      body {
        margin: 2em;
      }
      .mapboxgl-canvas-container {
        height: 800px;
      }
    `}</style>
  </div>
)

export default Page
