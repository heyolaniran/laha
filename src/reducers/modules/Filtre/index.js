import axios from "axios"

export const getFiltre = (module,searchs,links="")=>{

    return (dispatch)=>{
        dispatch({type:'SET_'+module.toUpperCase()+'_IS_LOADING',payload:true})

      return axios.get(`${process.env.BACKEND_SOURCE}/${links!=""?links:module.toLowerCase()}?${searchs}`).then(({data})=>{
        
        dispatch({type:'SET_'+module.toUpperCase()+'_LIST_SEARCH_ITEMS',payload:data})
      })
    }
}