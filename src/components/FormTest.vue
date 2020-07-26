<template>
<b-container>
  <b-row>
    <b-col cols="2">
    </b-col>
    <b-col>
      <big-panel title="Form Example">
        <example-form/>
       </big-panel>
    </b-col>
    <b-col cols="2">
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import BigPanel from '@/components/BigPanel'
import ExampleForm from '@/components/ExampleForm'
export default {
  components: {
    BigPanel, ExampleForm
  }
}
</script>
