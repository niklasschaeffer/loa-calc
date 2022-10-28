<script setup>
import { db } from "@/firebase/firebase";
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { onMounted, ref } from "vue";
import RapportTable from "./rapport/RapportTable.vue";

const npcs = ref([]);
const rethramis = ref([]);
const annika = ref([]);
const tortoyk = ref([]);

onMounted(async () => {
  onSnapshot(collection(db, "rapport"), (querySnapshot) => {
    let rapports = [];

    querySnapshot.forEach((item) => {
      const rapport = {
        id: item.id,
        name: item.data().name,
        location: item.data().location,
        continent: item.data().continent,
        max_rapport: item.data().max_rapport,
        rapport_per_day: item.data().rapport_per_day,
        dt_created: item.data().dt_created,
      };

      rapports.push(rapport);
    });
    rapports = rapports.sort(
      (a, b) => Date.parse(b.dt_created) - Date.parse(a.dt_created)
    );
    npcs.value = rapports;

    rethramis.value = npcs.value.filter(function (npc) {
      return npc.continent == "Rethramis";
    });

    annika.value = npcs.value.filter(function (npc) {
      return npc.continent == "Annika";
    });

    tortoyk.value = npcs.value.filter(function (npc) {
      return npc.continent == "Tortoyk";
    });
  });
});

/*
function updateCurrentRapport(id) {
  const index = npcs.value.findIndex((npc) => npc.id === id);
  updateDoc(doc(db, "rapport", id), {
    current_rapport: npcs.value[index].current_rapport,
  });
}
*/
</script>

<template>
  <RapportTable :continent="rethramis" :tablename="'Rethramis'" />
  <br />
  <RapportTable :continent="annika" :tablename="'Annika'" />
  <br />
  <RapportTable :continent="tortoyk" :tablename="'Tortoyk'" />
  <br />
</template>

<style scoped></style>
