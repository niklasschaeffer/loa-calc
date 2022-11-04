<script>
export default {
  data() {
    return {
      selected: [0, 0, 0, 0, 0, 0],
    };
  },
  props: {
    internal_name: {
      type: String,
    },
    name: {
      type: String,
    },
    engravings: {
      type: Array,
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
    <td
      v-for="(index, value) in this.$props.possible_values"
      v-bind:key="value"
    >
      <select
        class="form-control"
        v-bind:name="this.$props.internal_name + '-engraving-' + value + ''"
        v-bind:id="this.$props.internal_name + '-engraving-' + value + ''"
        v-model="this.selected[index]"
      >
        <option
          v-for="value in this.$props.engravings"
          v-bind:key="value"
          v-bind:value="value"
        >
          {{ value }}
        </option>
      </select>
    </td>
  </tr>
</template>
