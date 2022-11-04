<script>
import { useMarket } from "@/stores/market";
export default {
  data() {
    return {
      inputMarketValue: 0,
      inputCrystals: 0,
      inputCurrentGoldToCrystals: 0,
      result: null,
      baseUrl: "https://www.lostarkmarket.online/api/export-market-live/",
      server: "Europe%20Central",
      params: {
        params: {
          categories: "Currency Exchange",
        },
        withCredentials: false,
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      },
    };
  },
  mounted() {
    const store = useMarket();
    if (store.blueCrystalPrice > 0) {
      this.inputCurrentGoldToCrystals = store.blueCrystalPrice;
    } else {
      this.getCurrentCrystalPrice();
    }
  },
  methods: {
    getCurrentCrystalPrice() {
      const store = useMarket();
      this.axios.get(this.baseUrl + this.server, this.params).then((result) => {
        result.data.forEach((item) => {
          if (item.id == "blue-crystal-0") {
            this.inputCurrentGoldToCrystals = Math.round(item.avgPrice * 95);
            store.blueCrystalPrice = Math.round(item.avgPrice * 95);
          }
        });
      });
    },
    calculate() {
      const result =
        this.inputMarketValue -
        (this.inputCurrentGoldToCrystals / 95) * this.inputCrystals;

      this.result = result.toFixed();
    },
  },
};
</script>

<template>
  <form @change="calculate" @keyup="calculate">
    <div>
      <h1>
        Marie Shop Calculator
        <span style="font-size: 12px"
          >(Crystal Price from
          <a href="https://www.lostarkmarket.online/">LostArk Market</a>)
        </span>
      </h1>
      <br />
      <div class="form-group">
        <div class="row">
          <div class="col">
            <label class="form-label" for="inputMarketValue"
              >Market Value</label
            >
            <input
              v-model="inputMarketValue"
              type="number"
              class="form-control"
              id="inputMarketValue"
            />
          </div>
          <div class="col">
            <label class="form-label" for="inputMarketValue">Crystals</label>
            <input
              v-model="inputCrystals"
              type="number"
              id="inputCrystals"
              class="form-control"
            />
          </div>
          <div class="col">
            <label class="form-label" for="inputCurrentGoldToCrystals"
              >Crystal Price</label
            >
            <input
              v-model="inputCurrentGoldToCrystals"
              type="number"
              id="inputCurrentGoldToCrystals"
              class="form-control"
            />
          </div>
        </div>
        <br />
        <h1>Results</h1>
        <div class="row">
          <div class="col">
            <div v-if="this.result > 0">
              <p>Its worth buying on Marie's Shop.</p>
              <p>You save a total of: {{ result }} Gold</p>
            </div>
            <div v-if="this.result < 0">
              <p>Its not worth buying on Marie's Shop.</p>
              <p>You loose a total of: {{ result }} Gold per buy.</p>
            </div>
            <div v-if="this.result == 0">
              <p>Choose where you want to buy its equal in Price.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <!--
    <table class="table table-dark table-striped table-condensed">
      <thead>
        <tr>
          <th>Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    --></div>
  </form>
</template>

<style scoped></style>
