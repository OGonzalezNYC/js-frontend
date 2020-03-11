//This Prayers class is where the meat of the program will reside.
class Prayers {
  constructor() {
    this.prayers = [];
    this.adapter = new PrayersAdapter();
    // this.bindEventListeners();
    this.fetchAndLoadPrayers(); //with this "()", the instantiation of a new instance of the Prayers class doesn't merely ENDOW the instance with this function; it actually CALLS the function, fetchAndLoadPrayers, which is defined below.
  }



  fetchAndLoadPrayers() {
    this.adapter
      .getPrayers()
      .then(prayers => { // the calling of this fetchAndLoadPrayers function, which is triggered by the instantiation of an instance of the Prayers class, as described above, automatically calls the getPrayers function, as defined in the PrayersAdapter class, an instance of which is instantiated as an attribute of the Prayers instance that has been instantiated by the instantiation of an App instance, which was instantiated in index.js.
    //console.log(prayers); // The fact that this 1st console.log() works, means that that we're successfully getting the data from the API. Now we need to append that data to the DOM, for which we will define and call a "render" method, as defined below.

        //return console.log(prayers) // The fact that this 2nd console.log() works (after having replaced the 1st), again, means that that we're successfully getting the data from the API. (I think that the use of "return" somehow enables "prayers" to get passed along to the next ".then").
        prayers.forEach(prayer => this.prayers.push(prayer)) //"this.prayers" is the array of all prayers, as defined above.
    })
    .then(() => {
      this.render()
    })
  }

  render() {// We want to call this method after we get all the prayers.
    //console.log('rendering...')// The fact that this console.log() works, means
    const prayersContainer = document.getElementById("prayers-container");
    prayersContainer.innerHTML = 'my prayers here' // The fact that 'my prayers here' successfully populates the "prayers-container" div, means it's all working so far.
    console.log('my prayers are', this.prayers)// The fact that this console.log() is working means that the array of all prayers is reaching this far.
  }
}
