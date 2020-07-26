<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-left">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
      <b-form-select
        id="input-3"
        v-model="form.food"
        :options="foods"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        <b-form-checkbox value="me">Check me out</b-form-checkbox>
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <small-panel title= "Individual radios">
        <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
    </small-panel>

    <div class="button-bar">
      <b-button type="submit" variant="primary">Primary</b-button>
      <b-button type="submit" variant="secondary">Secondary</b-button>
      <b-button type="submit" variant="secondary" disabled>Disabled</b-button>
      <b-button type="reset" variant="outline-danger">Danger</b-button>
      <b-button type="reset" variant="accent">Accent</b-button>
    </div>
  </b-form>
</template>

<script>
import SmallPanel from '@/components/SmallPanel'
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  components: {
    SmallPanel
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
