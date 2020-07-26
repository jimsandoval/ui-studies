<template>
<b-container>
  <b-row>
    <b-col>
      <h2>Colors</h2>
      <p>
        This is an example of customizing bootstrap theme colors and using a
        couple custom components to make laying out forms easier and more consistent
      </p>
    </b-col>
  </b-row>
  <b-row>
    <b-col>
      <div>
        <form-test/>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import FormTest from '@/components/FormTest.vue'

export default {
  name: 'Home',
  components: {
    FormTest
  }
}
</script>
