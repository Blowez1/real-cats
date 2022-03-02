const resource = '/api/images'
export default ($axios) => ({
  getRandom() {
    return $axios.get(`${resource}/search?mime_types=jpg`, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    })
  },
})
