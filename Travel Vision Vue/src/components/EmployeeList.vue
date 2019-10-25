<template>
  <div>
    <ol v-bind:key="employee.id" v-for="(employee, i) in employees">
      <h3>
        <li>{{ ++i }}. {{ employee.fName }} - {{ employee.lName }} - {{ employee.notes }}</li>
      <hr>
      </h3>
    </ol>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="lblFirstName"
                    label="First Name"
                    label-for="fname"
                    description="Enter New Employee First Name">
        <b-form-input id="fname"
                      type="text"
                      v-model="form.fName"
                      required
                      placeholder="Enter New Employee First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lblLastName"
                    label="Last Name"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter New Employee Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lblCity"
                    label="City"
                    label-for="lname">
        <b-form-input id="city"
                      type="text"
                      v-model="form.city"
                      required
                      placeholder="Enter Employee City">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lblState"
                    label="State"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter Employee State">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lnamelabel"
                    label="Zip"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter New Employee Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lnamelabel"
                    label="Phone"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter New Employee Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lnamelabel"
                    label="Email"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter New Employee Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lnamelabel"
                    label="Last Name"
                    label-for="lname">
        <b-form-input id="lname"
                      type="text"
                      v-model="form.lName"
                      required
                      placeholder="Enter New Employee Last Name">
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
        fName: '',
        lName: '',
        notes: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      employees: {},
      show: true
    }
  },
  methods: {
    init () {
      axios
      .get('/api/Employees', { crossdomain: true })
      .then(response => (this.employees = response.data))
      .then(() => console.log(this.employees))
      .catch(error => console.log(error))
    },
    postEmployee () {
      axios
        .post('/api/Employees',
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
      this.form.fName = ''
      this.form.lName = ''
      this.form.notes = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.postEmployee()
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
