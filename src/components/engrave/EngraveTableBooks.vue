<script>
export default {
  data() {
    return {
      accumulatedValue: 0,
    };
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
    possible_values_books: {
      type: Array,
    },
  },
  methods: {
    accumulateValues() {},
  },
};
</script>
<template>
  <tr>
    <td>{{ this.$props.name }}</td>
    <td v-for="value in this.$props.possible_values" v-bind:key="value">
      <select
        @change="accumulateValues(this)"
        class="form-control"
        v-bind:name="this.$props.internal_name + '-engraving-' + value + ''"
        v-bind:id="this.$props.internal_name + '-engraving-' + value + ''"
      >
        <option
          v-for="value in this.$props.possible_values_books"
          v-bind:key="value"
          v-bind:value="value"
        >
          {{ "+" + value }}
        </option>
      </select>
    </td>
  </tr>
</template>
