import rickMortyApi from '@/api/rickMortyApi.js'

describe('rickMortyApi',()=>{
    test('axios trae la url de rick and morty ', () => {
        expect(rickMortyApi.defaults.baseURL).toBe('https://rickandmortyapi.com/api')
    })
})