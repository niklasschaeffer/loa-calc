<script>
import EngraveTableAccessoires from "./engrave/EngraveTableAccessoires.vue";
import EngraveTableBooks from "./engrave/EngraveTableBooks.vue";
import EngraveTableEngravings from "./engrave/EngraveTableEngravings.vue";
import EngraveTableStone from "./engrave/EngraveTableStone.vue";

export default {
  data() {
    return {
      accumulatedValues: {
        books: [],
        stone: [],
        accessoires: [0, 0, 0, 0, 0, 0],
      },
      values_accessoires: [0, 1, 2, 3, 4, 5],
      values_books: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      values_stone: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      engravings: [
        "",
        "Adrenaline",
        "All-Out Attack",
        "Ambush Master",
        "Awakening",
        "Barricade",
        "Broken Bone",
        "Contender",
        "Crisis Evasion",
        "Crushing Fist",
        "Disrespect",
        "Divine Protection",
        "Drops of Ether",
        "Emergency Rescue",
        "Enhanced Shield",
        "Ether Predator",
        "Expert",
        "Explosive Expert",
        "Fortitude",
        "Heavy Armor",
        "Hit Master",
        "Keen Blunt Weapon",
        "Lightning Fury",
        "Magick Stream",
        "Mass Increase",
        "Master Brawler",
        "Master of Escape",
        "Master's Tenacity",
        "Max MP Increase",
        "MP Efficiency Increase",
        "Necromancy",
        "Precise Dagger",
        "Preemptive Strike",
        "Propulsion",
        "Raid Captain",
        "Shield Piercing",
        "Sight Focus",
        "Spirit Absorption",
        "Stabilized Status",
        "Strong Will",
        "Super Charge",
        "Vital Point Hit",
        "Remaining Energy",
        "Surge",
        "Demonic Impulse",
        "Perfect Suppression",
        "Barrage Enhancement",
        "Firepower Enhancement",
        "Enhanced Weapon",
        "Pistoleer",
        "Peacemaker",
        "Time to Hunt",
        "Arthetinean Skill",
        "Evolutionary Legacy",
        "Death Strike",
        "Loyal Companion",
        "Empress's Grace",
        "Order of the Emperor",
        "Desperate Salvation",
        "True Courage",
        "Igniter",
        "Reflux",
        "Control",
        "Pinnacle",
        "Shock Training",
        "Ultimate Skill: Taijutsu",
        "Energy Overflow",
        "Robust Spirit",
        "Deathblow",
        "Esoteric Flurry",
        "Esoteric Skill Enhancement",
        "First Intention",
        "Berserker's Technique",
        "Mayhem",
        "Gravity Training",
        "Rage Hammer",
        "Combat Readiness",
        "Lone Knight",
        "Blessed Aura",
        "Judgment",
      ],
    };
  },
  components: {
    EngraveTableAccessoires,
    EngraveTableBooks,
    EngraveTableEngravings,
    EngraveTableStone,
  },
  methods: {
    accumulateValues() {
      for (let i = 0; i < 6; i++) {
        this.accumulatedValues.accessoires[i] =
          this.$refs.earring_1_details.$data.selected[i] +
          this.$refs.earring_2_details.$data.selected[i] +
          this.$refs.ring_1_details.$data.selected[i] +
          this.$refs.necklace_details.$data.selected[i] +
          this.$refs.ring_2_details.$data.selected[i] +
          this.$refs.stone_details.$data.selected[i] +
          this.$refs.books_details.$data.selected[i];
      }
    },
  },
};
</script>
<template>
  <div>
    <form @change="accumulateValues" @keyup="accumulateValues">
      <table class="table table-dark table-bordered table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th align="center">Engraving 1</th>
            <th align="center">Engraving 2</th>
            <th align="center">Engraving 3</th>
            <th align="center">Engraving 4</th>
            <th align="center">Engraving 5</th>
            <th align="center">Engraving 6</th>
          </tr>
        </thead>
        <tbody>
          <EngraveTableEngravings
            :name="'Engraving'"
            :internal_name="'engraving'"
            :possible_values="values_accessoires"
            :engravings="engravings"
            ref="engraving_details"
          />
          <EngraveTableAccessoires
            :name="'Necklace'"
            :internal_name="'necklace'"
            :possible_values="values_accessoires"
            ref="necklace_details"
          />
          <EngraveTableAccessoires
            :name="'Earring 1'"
            :internal_name="'earring_1'"
            :possible_values="values_accessoires"
            ref="earring_1_details"
          />
          <EngraveTableAccessoires
            :name="'Earring 2'"
            :internal_name="'earring_2'"
            :possible_values="values_accessoires"
            ref="earring_2_details"
          />
          <EngraveTableAccessoires
            :name="'Ring 1'"
            :internal_name="'ring_1'"
            :possible_values="values_accessoires"
            ref="ring_1_details"
          />
          <EngraveTableAccessoires
            :name="'Ring 2'"
            :internal_name="'ring_2'"
            :possible_values="values_accessoires"
            ref="ring_2_details"
          />
          <EngraveTableStone
            :name="'Stone'"
            :internal_name="'stone'"
            :possible_values="values_accessoires"
            :possible_values_stone="values_stone"
            ref="stone_details"
          />
          <EngraveTableBooks
            :name="'Books'"
            :internal_name="'books'"
            :possible_values="values_accessoires"
            :possible_values_books="values_books"
            ref="books_details"
          />
          <tr>
            <td colspan="7"></td>
          </tr>
          <tr>
            <td>Values</td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[0]"
            >
              {{ this.accumulatedValues.accessoires[0] }}
            </td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[1]"
            >
              {{ this.accumulatedValues.accessoires[1] }}
            </td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[2]"
            >
              {{ this.accumulatedValues.accessoires[2] }}
            </td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[3]"
            >
              {{ this.accumulatedValues.accessoires[3] }}
            </td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[4]"
            >
              {{ this.accumulatedValues.accessoires[4] }}
            </td>
            <td
              align="center"
              v-bind:value="this.accumulatedValues.accessoires[5]"
            >
              {{ this.accumulatedValues.accessoires[5] }}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>
