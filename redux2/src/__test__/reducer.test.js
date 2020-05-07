import reducer from '../reducers';

describe('Reducer testing', () => {
    it('Should return intial state',()=>{
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('Reducer with actiion',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_ARTICLE'})

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })
    })
})


