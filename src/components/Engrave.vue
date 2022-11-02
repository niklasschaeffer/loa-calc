<script>
import EngraveTableAccessoires from "./engrave/EngraveTableAccessoires.vue";
import EngraveTableBooks from "./engrave/EngraveTableBooks.vue";
import EngraveTableEngravings from "./engrave/EngraveTableEngravings.vue";

export default {
  data() {
    return {
      values_accessoires: [0, 1, 2, 3, 4, 5],
      values_books: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
  },
};
</script>
<template>
  <div>
    <table class="table table-dark table-bordered table-condensed">
      <thead>
        <tr>
          <th>#</th>
          <th>Engraving 1</th>
          <th>Engraving 2</th>
          <th>Engraving 3</th>
          <th>Engraving 4</th>
          <th>Engraving 5</th>
          <th>Engraving 6</th>
        </tr>
      </thead>
      <tbody>
        <EngraveTableEngravings
          :name="'Engraving'"
          :internal_name="'engraving'"
          :possible_values="values_accessoires"
          :engravings="engravings"
        />
        <EngraveTableAccessoires
          :name="'Stone'"
          :internal_name="'stone'"
          :possible_values="values_accessoires"
        />
        <EngraveTableAccessoires
          :name="'Necklace'"
          :internal_name="'necklace'"
          :possible_values="values_accessoires"
        />
        <EngraveTableAccessoires
          :name="'Earring 1'"
          :internal_name="'earring_1'"
          :possible_values="values_accessoires"
        />
        <EngraveTableAccessoires
          :name="'Earring 2'"
          :internal_name="'earring_2'"
          :possible_values="values_accessoires"
        />
        <EngraveTableAccessoires
          :name="'Ring 1'"
          :internal_name="'ring_1'"
          :possible_values="values_accessoires"
        />
        <EngraveTableAccessoires
          :name="'Ring 2'"
          :internal_name="'ring_2'"
          :possible_values="values_accessoires"
        />
        <EngraveTableBooks
          :name="'Books'"
          :internal_name="'books'"
          :possible_values="values_accessoires"
          :possible_values_books="values_books"
        />
        <tr>
          <td colspan="7"></td>
        </tr>
        <tr>
          <td>Values</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
