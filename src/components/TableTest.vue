<template>
<div>
  <b-row>
    <b-col lg="1">
    </b-col>
    <b-col>
      <b-table :items="items" :fields="fields" class="bg-white">
      </b-table>
    </b-col>
    <b-col lg="1">
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      As the screen gets smaller, Book first then Animal, and Band columns should disappear
    </b-col>
  </b-row>
</div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      fields: [
        { key: 'name' },
        { key: 'book', class: 'd-none d-lg-table-cell' },
        { key: 'animal', class: 'd-none d-md-table-cell' },
        { key: 'pasta' },
        { key: 'band', class: 'd-none d-md-table-cell' },
        { key: 'sport' },
        { key: 'fruit' }
      ],
      items: [
        { name: 'Barry', book: 'Confederacy of Dunces', animal: 'porcupine', pasta: 'ziti', band: 'Eagles', sport: 'badminton', fruit: 'apple' },
        { name: 'Larry', book: 'Remembrance of Things Past', animal: 'pika', pasta: 'linguini', band: 'Minutemen', sport: 'cycling', fruit: 'pomegranite' },
        { name: 'Harry', book: 'Essentials of Woodworking', animal: 'rhinoceros', pasta: 'farfalle', band: 'Abba', sport: 'golf', fruit: 'banana' },
        { name: 'Mary', book: 'Confederacy of Dunces', animal: 'porcupine', pasta: 'ziti', band: 'Eagles', sport: 'badminton', fruit: 'apple' },
        { name: 'Terry', book: 'Remembrance of Things Past', animal: 'pika', pasta: 'linguini', band: 'Minutemen', sport: 'cycling', fruit: 'pomegranite' },
        { name: 'Harry', book: 'Essentials of Woodworking', animal: 'rhinoceros', pasta: 'farfalle', band: 'Abba', sport: 'golf', fruit: 'banana' },
        { name: 'Gary', book: 'Confederacy of Dunces', animal: 'porcupine', pasta: 'ziti', band: 'Eagles', sport: 'badminton', fruit: 'apple' },
        { name: 'Teri', book: 'Remembrance of Things Past', animal: 'pika', pasta: 'linguini', band: 'Minutemen', sport: 'cycling', fruit: 'pomegranite' },
        { name: 'Jerry', book: 'Essentials of Woodworking', animal: 'rhinoceros', pasta: 'farfalle', band: 'Abba', sport: 'golf', fruit: 'banana' },
        { name: 'Gerrie', book: 'Confederacy of Dunces', animal: 'porcupine', pasta: 'ziti', band: 'Eagles', sport: 'badminton', fruit: 'apple' },
        { name: 'Carrie', book: 'Remembrance of Things Past', animal: 'pika', pasta: 'linguini', band: 'Minutemen', sport: 'cycling', fruit: 'pomegranite' },
        { name: 'Perry', book: 'Essentials of Woodworking', animal: 'rhinoceros', pasta: 'farfalle', band: 'Abba', sport: 'golf', fruit: 'banana' }
      ]
    }
  }
}
</script>
