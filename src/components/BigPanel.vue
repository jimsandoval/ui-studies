<template>
  <b-card>
    <b-card-title :title="title" class="big-title"/>
      <b-card-body>
        <slot>
        </slot>
      </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: ['title']
}
</script>
