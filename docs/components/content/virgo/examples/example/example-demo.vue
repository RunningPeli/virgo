<script setup lang="ts">
import { VirgoButton } from '@runningpeli/virgo'
import { ref } from 'vue'

// State
const count = ref(0)

// Actions
function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter-example">
    <h3>Counter Example</h3>
    <p>Current count: {{ count }}</p>
    <div class="buttons space-x-3">
      <virgo-button text="Virgo Button here!" @click="increment" />
      <ui-button @click="increment">
        Increment
      </ui-button>
      <ui-button @click="decrement">
        Decrement
      </ui-button>
      <ui-button @click="reset">
        Reset
      </ui-button>
    </div>
  </div>
</template>
