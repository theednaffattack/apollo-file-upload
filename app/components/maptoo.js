// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

// // ES5
// var ReactMapboxGl = require("react-mapbox-gl");
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;

const Maptoo = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
})
;<Maptoo
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{ height: '100vh', width: '100vw' }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Maptoo>

export default Maptoo
