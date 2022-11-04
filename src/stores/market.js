import { defineStore } from "pinia";

export const useMarket = defineStore("market", {
  state: () => {
    return {
      blueCrystalPrice: 0,
    };
  },
});
