class Prayers {
  constructor() {
    this.prayers = [];
    this.adapter = new PrayersAdapter();
    // this.bindEventListeners();
    this.fetchAndLoadPrayers();
  }



  fetchAndLoadPrayers() {
    this.adapter.getPrayers().then(Prayers => {
    console.log(prayers);
    })
  }
}
