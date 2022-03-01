export const state = () => ({
   cat : {}
})

export const actions = {
    async get_cat({commit}) {
        const res = await this.$repositories.cat.getRandom()

        const { status,data } = res

        if (status === 200) {
            const cat = data[0]
            commit('SET_CAT', cat)
        }

        else {
            console.log('Error')
        }
    }
}

export const mutations = {
    SET_CAT(state, cat) {
        state.cat = cat
    }
}


export const getters = {
    getCat(state) {
        return state.cat
    }
    
}
