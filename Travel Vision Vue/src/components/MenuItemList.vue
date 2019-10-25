<template>
  <div>
    <ol v-bind:key="album.id" v-for="(album, i) in albums">
      <h3>
        <li>{{ ++i }}. {{ album.albumName }} - {{ album.artist }} - {{ album.notes }}</li>
      <hr>
      </h3>
    </ol>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="albumNamelabel"
                    label="Album Title"
                    label-for="albumName"
                    description="Enter New Album Title">
        <b-form-input id="albumTitle"
                      type="text"
                      v-model="form.albumName"
                      required
                      placeholder="Enter Album Title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="artistLabel"
                    label="Name of Album Artist"
                    label-for="artist">
        <b-form-input id="artist"
                      type="text"
                      v-model="form.artist"
                      required
                      placeholder="Enter Name of Artist">
        </b-form-input>
      </b-form-group>
      <b-form-group id="notesLabel"
                    label="Enter some notes for the Album"
                    label-for="notes">
        <b-form-input id="notes"
                      type="text"
                      v-model="form.notes"
                      required
                      placeholder="Enter some notes">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'albumslist',
  data () {
    return {
      form: {
        albumName: '',
        artist: '',
        notes: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      albums: {},
      show: true
    }
  },
  methods: {
    init () {
      axios
      .get('/api/Albums', { crossdomain: true })
      .then(response => (this.albums = response.data))
      .then(() => console.log(this.albums))
      .catch(error => console.log(error))
    },
    postAlbum () {
      axios
        .post('/api/Albums',
        JSON.stringify(this.form),
        { crossdomain: true,
          withCredentials: true,
          responseType: 'json',
          mode: 'cors',
          headers:
          {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
          }
        })
        .then(response => console.log(response))
        .then(() => this.init())
        .then(() => this.clearForm())
        .catch(error => console.log(error))
    },
    clearForm () {
      /* Reset our form values */
      this.form.albumName = ''
      this.form.artist = ''
      this.form.notes = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.postAlbum()
    },
    onReset (evt) {
      evt.preventDefault()
      this.clearForm()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
