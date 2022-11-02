<script>
import EngraveTableAccessoires from "./engrave/EngraveTableAccessoires.vue";
import EngraveTableBooks from "./engrave/EngraveTableBooks.vue";

export default {
  data() {
    return {
      values_accessoires: [0, 1, 2, 3, 4, 5],
      values_books: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  components: { EngraveTableAccessoires, EngraveTableBooks },
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
        <tr>
          <td>Engraving Name</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
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
