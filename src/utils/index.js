export const findById = (list,id)=>{
    return list.find((one)=>one.id == id)
}
export const findList = (list,key,value)=>{
    return list.find((one)=>one[key] == value)
}

export const filterList = (list,key,value)=>{
    return list.filter((one)=>one[key] ==  value)
}


export const containList = (list,key,value)=>{
    return list.filter((one)=>one[key].toLowerCase().includes(value.toLowerCase()))
}