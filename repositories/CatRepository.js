const resource = 'images'
export default ($axios) => ({
  getRandom() {
    return $axios.get(`${resource}/search?format=jpg`, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    })
  },
})
