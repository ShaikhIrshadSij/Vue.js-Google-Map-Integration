<template>
  <div>
    <div>
      <table>
        <tr>
          <th>Start Location</th>
          <th><GmapAutocomplete @place_changed="setPlace" /></th>
          <th><button @click="addMarker(0)">Add</button></th>
        </tr>
        <tr>
          <th>End Location</th>
          <th><GmapAutocomplete @place_changed="setPlace" /></th>
          <th><button @click="addMarker(1)">Add</button></th>
        </tr>
      </table>
    </div>
    <br />
    <GmapMap :zoom="7" :center="center" style="width: 100%; height: 400px">
      <DirectionsRenderer
        travelMode="DRIVING"
        :origin="startLocation"
        :destination="endLocation"
      />
    </GmapMap>
    <!-- <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        ref="mapRef"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      />
      <gmap-polyline
        v-bind:path.sync="path"
        v-bind:options="{ strokeColor: '#008000' }"
      ></gmap-polyline>
    </GmapMap> -->
  </div>
</template>

<script>
import DirectionsRenderer from "@/components/DirectionsRenderer";

export default {
  name: "GoogleMap",
  components: {
    DirectionsRenderer,
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
      startLocation: null,
      endLocation: null,
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker(index) {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng(),
      };
      if (index === 0) this.startLocation = marker;
      if (index === 1) this.endLocation = marker;
      this.center = marker;
    },
  },
};
</script>
