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
  methods: {
    calculate() {
      const result =
        this.inputMarketValue -
        (this.inputCurrentGoldToCrystals / 90) * this.inputCrystals;

      this.result = result.toFixed();
    },
  },
};
</script>

<template>
  <div>
    <h1>Marie Shop Calculator</h1>
    <br />
    <h3>Inputs</h3>
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
          <button type="button" class="btn btn-primary" @click="calculate">
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
  </div>
</template>

<style scoped></style>
