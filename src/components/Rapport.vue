<script setup>
import { db } from "@/firebase/firebase";
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { onMounted, ref } from "vue";

const npcs = ref([]);

onMounted(async () => {
  onSnapshot(collection(db, "rapport"), (querySnapshot) => {
    let rapports = [];

    querySnapshot.forEach((item) => {
      const rapport = {
        id: item.id,
        name: item.data().name,
        max: item.data().max,
        current_rapport: item.data().current_rapport,
        current_lvl: item.data().current_lvl,
        max_rapport_per_day: item.data().max_rapport_per_day,
        dt_created: item.data().dt_created,
        location: item.data().location,
      };

      rapports.push(rapport);
    });
    rapports = rapports.sort(
      (a, b) => Date.parse(b.dt_created) - Date.parse(a.dt_created)
    );
    npcs.value = rapports;
  });
});

function updateCurrentRapport(id) {
  const index = npcs.value.findIndex((npc) => npc.id === id);
  updateDoc(doc(db, "rapport", id), {
    current_rapport: npcs.value[index].current_rapport,
  });
}
</script>

<template>
  <table class="table-dark table table-stripped table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Location</th>
        <th>Current Level</th>
        <th>Current Rapport</th>
        <th>Maximum Rapport</th>
        <th>Days Required</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(npc, counter) in npcs" v-bind:key="npc.id" v-bind:id="npc.id">
        <td>{{ counter++ }}</td>
        <td>{{ npc.name }}</td>
        <td>{{ npc.location }}</td>
        <td>{{ npc.current_lvl }}</td>
        <td>
          <input
            v-model="npc.current_rapport"
            @change="updateCurrentRapport(npc.id)"
            class="form-control"
          />
        </td>
        <td>{{ npc.max }}</td>
        <td>
          {{
            Math.round(
              (npc.max - npc.current_rapport) / npc.max_rapport_per_day,
              1
            )
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
