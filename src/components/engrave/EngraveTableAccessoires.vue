<script>
export default {
  data() {
    return {};
  },
  props: {
    internal_name: {
      type: String,
    },
    name: {
      type: String,
    },
    possible_values: {
      type: Array,
    },
  },
};
</script>
<template>
  <tr>
    <td>{{ this.$props.name }}</td>
    <td v-for="value in this.$props.possible_values" v-bind:key="value">
      <select
        class="form-control"
        v-bind:name="this.$props.internal_name + '-engraving-' + value + ''"
        v-bind:id="this.$props.internal_name + '-engraving-' + value + ''"
      >
        <option
          v-for="value in possible_values"
          v-bind:key="value"
          v-bind:value="value"
        >
          {{ "+" + value }}
        </option>
      </select>
    </td>
  </tr>
</template>
