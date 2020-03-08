// This is what will talk to the backend API.
class PrayersAdapter {
  // An instance of PrayersAdapter will make a fetch request to the backend (api/v1/prayers) and jsonify the response.
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/prayers';
  }

  getPrayers() {
    return fetch(this.baseUrl).then(res => res.json());
  }
}

// Eventually, we'll write:
// let adapter = new PrayersAdapter()
//and
// adapter.getPrayers()
