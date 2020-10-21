import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places,drawing,visualization'
  },
 
  // If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // you might need to turn this on.
  // autobindAllEvents: false,
 
  // If you want to manually install components, e.g.
  // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then disable the following:
  // installComponents: true,
})

// Vue.use(VueGoogleMaps, {
//     load: {
//       key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
//       v: '3.26',
//     },
//     // Demonstrating how we can customize the name of the components
//     installComponents: false,
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     Vue.component('google-map', VueGoogleMaps.Map);
//     Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
//       mappedProps: {
//         'opacity': {}
//       },
//       props: {
//         'source': {type: String},
//         'bounds': {type: Object},
//       },
//       events: ['click', 'dblclick'],
//       name: 'groundOverlay',
//       ctr: () => google.maps.GroundOverlay,
//       ctrArgs: (options, {source, bounds}) => [source, bounds, options],
//     }));

//     new Vue({
//       el: '#root',
//       data: {
//         place: '',
//       },
//     });
//   });

createApp(App).mount('#app')
