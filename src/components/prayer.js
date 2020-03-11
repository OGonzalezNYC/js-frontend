class Prayer {
  constructor(prayerJSON) {
    this.id = prayerJSON.id;
    this.title = prayerJSON.title;
    this.body = prayerJSON.body;
    this.outcome = prayerJSON.outcome;
    this.amens = prayerJSON.amens;
    this.user_id = prayerJSON.user_id;
  }
}
