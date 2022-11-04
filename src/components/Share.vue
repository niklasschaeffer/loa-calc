<script>
export default {
  data() {
    return {
      marketValue: 0,
      currentBid: 0,
      equalShare4: 0,
      equalShare8: 0,
      maxBid: 0,
      profit: 0,
    };
  },
  methods: {
    calculate() {
      const equalShare8 = this.marketValue * 0.95 * (1 - 1 / 8);
      const equalShare4 = this.marketValue * 0.95 * (1 - 1 / 4);

      this.equalShare4 = equalShare4.toFixed();
      this.equalShare8 = equalShare8.toFixed();

      const maxBid = this.marketValue * 0.95;
      this.maxBid = maxBid.toFixed();
      const profit = this.marketValue * 0.95 - this.currentBid;
      this.profit = profit.toFixed();
    },
  },
};
</script>

<template>
  <h1>Market Value & Equal Share Calculator</h1>
  <br />
  <h2>Inputs</h2>

  <form @change="calculate" @keyup="calculate">
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label for="currentBid">Current Bid</label>
          <input
            type="number"
            class="form-control"
            id="currentBid"
            v-model="currentBid"
          />
        </div>
        <div class="col">
          <label for="marketValue">Market Value</label>
          <input
            type="number"
            class="form-control"
            id="marketValue"
            v-model="marketValue"
          />
        </div>
      </div>
    </div>
  </form>

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
