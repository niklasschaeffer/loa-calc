<script>
export default {
  props: {
    continent: {
      type: Array,
    },
    tablename: {
      type: String,
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ this.$props.tablename }}</h1>
    <table class="table-dark table table-stripped table-condensed">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Rapport per Day</th>
          <th>Maximum Rapport</th>
          <th>Days Required</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(npc, counter) in continent"
          v-bind:key="npc.id"
          v-bind:id="npc.id"
        >
          <td>{{ counter++ }}</td>
          <td>{{ npc.name }}</td>
          <td>{{ npc.location }}</td>
          <td>{{ npc.rapport_per_day }}</td>
          <td>{{ npc.max_rapport }}</td>
          <td>
            {{ Math.round(npc.max_rapport / npc.rapport_per_day, 1) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
