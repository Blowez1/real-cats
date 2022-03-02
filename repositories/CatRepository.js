const resource = '/api/images'
export default ($axios) => ({
  getRandom() {
    return $axios.get(`${resource}/getRandom`,)
  },
})
