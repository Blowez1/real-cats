import CatRepository from "./CatRepository";

export default ($axios) => ({
    cat: CatRepository($axios)
})