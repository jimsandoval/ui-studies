<template>
  <div class="small-panel">
    <b-card-title :title="title" class="small-title"/>
      <div>
        <slot>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
