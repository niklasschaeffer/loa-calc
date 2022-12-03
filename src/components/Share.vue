<script>
export default {
  data() {
    return {
      marketValue: 0,
      currentBid: 0,
      equalShare4: 0,
      equalShare8: 0,
      maxBid: 0,
      maxProfitBid8: 0,
      maxProfitBid4: 0,
      shareGold4: 0,
      shareGold8: 0,
      profit: 0,
    };
  },
  methods: {
    calculate() {
      const equalShare8 = this.marketValue * 0.95 * (1 - 1 / 8);
      const maxProfitBid8 = equalShare8 * 0.9 + 1;

      const shareGold4 = this.currentBid / 3;
      const shareGold8 = this.currentBid / 7;

      const equalShare4 = this.marketValue * 0.95 * (1 - 1 / 4);
      const maxProfitBid4 = equalShare4 * 0.9 + 1;

      this.maxProfitBid4 = maxProfitBid4.toFixed();
      this.maxProfitBid8 = maxProfitBid8.toFixed();
      this.shareGold4 = shareGold4.toFixed();
      this.shareGold8 = shareGold8.toFixed();

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
  <h1>Auction Calculator</h1>
  <br />
  <form @change="calculate" @keyup="calculate">
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label class="form-label" for="currentBid">Current Bid</label>
          <input
            type="number"
            class="form-control"
            id="currentBid"
            v-model="currentBid"
          />
        </div>
        <div class="col">
          <label class="form-label" for="marketValue">Market Value</label>
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
  <h3>Equal Share || Max Bid ( {{ maxBid }}g ) || Profit ( {{ profit }}g )</h3>
  <br />
  <table class="table table-dark table-striped table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>Players</th>
        <th>Max Profit Bid</th>
        <th>Equal Bid</th>
        <th>Share Gold</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#</td>
        <td>8</td>
        <td>{{ maxProfitBid8 }}g</td>
        <td>{{ equalShare8 }}g</td>
        <td>{{ shareGold8 }}g</td>
      </tr>
      <tr>
        <td>#</td>
        <td>4</td>
        <td>{{ maxProfitBid4 }}g</td>
        <td>{{ equalShare4 }}g</td>
        <td>{{ shareGold4 }}g</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
