<template>
<b-container>
  <b-row>
    <b-col>
      <h2>Responsive Tables</h2>
      <p>
        This is an example of using bootstrap layout to create responsve tables that present well on a range of devices. It uses column hiding to drop certain columns as the breakpoints get smaller. Use dev tools (F12) to simulate different devices.
      </p>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <div>
        <table-test/>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import TableTest from '@/components/TableTest.vue'

export default {
  name: 'ResponsiveTables',
  components: {
    TableTest
  }
}
</script>
