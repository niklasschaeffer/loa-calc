<script>
export default {
  data() {
    return {
      inputMarketValue: 0,
      inputBid: 0,
      equalShare4: 0,
      equalShare8: 0,
      maxBid: 0,
      profit: 0,
    };
  },
  methods: {
    calculateNumbers() {
      const equalShare8 = this.inputMarketValue * 0.95 * (1 - 1 / 8);
      const equalShare4 = this.inputMarketValue * 0.95 * (1 - 1 / 4);

      this.equalShare4 = equalShare4.toFixed();
      this.equalShare8 = equalShare8.toFixed();

      const maxBid = this.inputMarketValue * 0.95;
      const profit = this.inputMarketValue * 0.95 - this.inputBid;

      this.maxBid = maxBid.toFixed();
      this.profit = profit.toFixed();
    },
  },
};
</script>

<template>
  <h1>Market Value & Equal Share Calculator</h1>
  <br />
  <h2>Inputs</h2>

  <div class="form-group">
    <div class="row">
      <div class="col">
        <label for="inputBid">Current Bid</label>
        <input
          type="text"
          class="form-control"
          id="inputBid"
          v-model="inputBid"
        />
      </div>
      <div class="col">
        <label for="inputMarketValue">Market Value</label>
        <input
          type="text"
          class="form-control"
          id="inputMarketValue"
          v-model="inputMarketValue"
        />
      </div>
    </div>
    <br />
    <div class="row align-items-center">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="calculateNumbers">
          Calculate
        </button>
      </div>
    </div>
  </div>

  <br />

  <h1>Results</h1>
  <br />
  <h3>Equal Share</h3>
  <br />
  <table class="table table-dark table-striped table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>Players</th>
        <th>Gold</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#</td>
        <td>8</td>
        <td>{{ equalShare8 }}</td>
      </tr>
      <tr>
        <td>#</td>
        <td>4</td>
        <td>{{ equalShare4 }}</td>
      </tr>
    </tbody>
  </table>

  <br />

  <h3>Bidding</h3>
  <br />
  <table class="table table-dark table-striped table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>Maximum Bid</th>
        <th>Market Profit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#</td>
        <td>{{ maxBid }}</td>
        <td>{{ profit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
