<template>
<div class="container">
    <div class="row align-items-center profile-header">
        <div class="col-md-4 mb-5">

          <h4>{{name}}</h4>
          <p>Start Time: {{startTime}}</p>
          <p>End Time: {{endTime}}</p>

          <p v-if="distance > 0">Distance: {{distance}} KM</p>
          <p v-if="elevation > 0">Elevation: {{elevation}} M</p>
          <p v-if="heartrate > 0">Avg Heartrate: {{heartrate}}</p>
          <p v-if="temp > 0">Avg Temp: {{temp}} </p>
          <p v-if="elevationLoss > 0">Verticle Skiied: {{elevationLoss}} M</p>
          <p v-if="averageSpeed > 0">Avg Speed: {{averageSpeed}} KM/H</p>
          <p v-if="totalTime !=0 ">Moving Time: {{totalTime}}</p>

        </div>

        <div style="col-md-8 mb-7 width:100%; height: 900px;"  >
          <div style="height:100% overflow: auto;">
            <p style="width:600px"></p>
            <!-- <button @click="showLongText">
              Toggle long popup
            </button> -->
          </div>
          <l-map ref="myMap"
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 80%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
          >
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            />
            <l-marker :lat-lng="withPopup">
              <l-popup>
                <div @click="innerClick">
                  I am a popup
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                    Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-popup>
            </l-marker>
            <l-marker :lat-lng="withTooltip">
              <l-tooltip :options="{ permanent: true, interactive: true }">
                <div @click="innerClick">
                  I am a tooltip
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                    Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
</template>

<script>
import { latLng } from "leaflet";
import 'leaflet-gpx';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      //initializeGPXData//
      elevation: 0, 
      heartrate: 0,
      temp: 0,
      zoom: 12,
      evevationGain:0,
      elevationLoss:0,
      averageSpeed:0,
      totalTime:0,
      startTime:0,
      endTime:0,
      distance:0,
      name:"",

      //buildMap//
      center: latLng(47.491922127082944,-121.63982578553259),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.491922127082944,-121.63982578553259),
      withTooltip: latLng(47.491922127082944,-121.63982578553259),
      currentZoom: 11.5,
      currentCenter: latLng(47.491922127082944,-121.63982578553259),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  mounted(){
    let mapObject = this.$refs.myMap.mapObject
    var self = this
    const track = new L.GPX('activity-1.gpx', 
    { async: true,
        polyline_options: {
        color: 'red',
        opacity: 0.55,
        weight: 4,
        lineCap: 'round'
      },
      marker_options: {
        wptIconUrls: {
            '': 'icons/map/005-pin-1.png',
            'Geocache Found': 'img/gpx/geocache.png',
            'Park': 'img/gpx/tree.png'
          },
        startIconUrl: 'icons/map/005-pin-1.png',
        endIconUrl: 'icons/map/024-flag.png',
        shadowUrl: ''
      }
    },

    ).on('loaded', function (e) {
    var gpx = e.target;
    mapObject.fitBounds(gpx.getBounds());
    self.name= gpx.get_name()
    self.elevation = gpx.get_elevation_max().toFixed(0)
    self.heartrate= gpx.get_average_hr().toFixed(2)
    self.temp= gpx.get_average_temp().toFixed(2)
    self.elevationLoss= gpx.get_elevation_loss().toFixed(0)
    self.averageSpeed= gpx.get_moving_speed().toFixed(2)
    self.totalTime= gpx.get_duration_string_iso(gpx.get_total_time())
    self.startTime= gpx.get_start_time();
    self.endTime= gpx.get_end_time();
    self.distance = gpx.get_distance().toFixed(2)
  }).addTo(mapObject)
    //mapObject.setView(L.latLng(48.8619760,-121.6539630),15)
  }
};
</script>