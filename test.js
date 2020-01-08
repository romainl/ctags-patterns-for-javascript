class Api {
  constructor(auth) {
    this._credentials = auth
  }
  
  // NOT WORKING
  getConfig =  async (method, body) => {
    const config = { method, body: JSON.stringify(body) }
    config["headers"] = {
      ...headers,
      ...this._credentials,
    }
    return config
  }
  
  //  WORKING
  getLocations = async ({ flags = [""] }) => {
     // some code
  }

  // NOT WORKING
  set params(obj) {
    const { latitude, longitude, page = 1, per_page = 3 } = obj
    this._coordinates = { latitude, longitude }
    this._page = page
    this._per_page = per_page
  }
 
  // NOT WORKING
  get latitude() {
    const { latitude } = this._coordinates
    return `latitude=${latitude}`
  }
}
