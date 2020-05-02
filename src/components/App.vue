<template>
  <div class="container">
    <h2>Hello, App</h2>
    <button @click="increment">Increment</button>
    <input type="text" v-model="vars.count" readonly="readonly" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  components: {},
  setup() {
    const vars = reactive({
      count: 0,
    });

    const increment = () => {
      ++vars.count;
    };

    return {
      vars,
      increment,
    };
  },
});
</script>
