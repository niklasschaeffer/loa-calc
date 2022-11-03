<script>
export default {
  data() {
    return {
      inputMarketValue: 0,
      inputCrystals: 0,
      inputCurrentGoldToCrystals: 0,
      result: null,
    };
  },
  mounted() {
    this.getCurrentCrystalPrice();
  },
  methods: {
    getCurrentCrystalPrice() {
      this.axios
        .get(
          "https://www.lostarkmarket.online/api/export-market-live/Europe%20Central",
          {
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
          }
        )
        .then((result) => {
          result.data.forEach((item) => {
            if (item.id == "blue-crystal-0") {
              this.inputCurrentGoldToCrystals = item.avgPrice * 95;
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
  <div>
    <h1>Marie Shop Calculator</h1>
    <br />
    <h3>
      Inputs
      <span style="font-size: 14px"
        >(Crystal Price from
        <a href="https://www.lostarkmarket.online/">LostArk Market</a>)
      </span>
    </h3>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label for="inputMarketValue">Market Value</label>
          <input
            v-model="inputMarketValue"
            type="number"
            class="form-control"
            id="inputMarketValue"
          />
        </div>
        <div class="col">
          <label for="inputMarketValue">Crystals</label>
          <input
            v-model="inputCrystals"
            type="number"
            id="inputCrystals"
            class="form-control"
          />
        </div>
        <div class="col">
          <label for="inputCurrentGoldToCrystals">Crystal Price</label>
          <input
            v-model="inputCurrentGoldToCrystals"
            type="number"
            id="inputCurrentGoldToCrystals"
            class="form-control"
          />
        </div>
      </div>
      <br />
      <div class="row align-items-center">
        <div class="col">
          <button type="button" class="btn btn-success" @click="calculate">
            Calculate
          </button>
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
  </div>
</template>

<style scoped></style>
