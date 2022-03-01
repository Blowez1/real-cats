const resource = 'images/search'
export default ($axios) => ({
  getRandom(limit) {
    return $axios.get(`${resource}?limit=${limit}`)
  },
})