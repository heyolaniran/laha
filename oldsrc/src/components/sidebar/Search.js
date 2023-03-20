import React, { useRef, useState } from 'react'
import { MdSearch } from 'react-icons/md'

const Search = () => {
    const [showCleaner, setShowCleaner] = useState(false)
    const input = useRef('')
    const clearInput = ()=>{
        input.current.value = ''
        setShowCleaner(false)
    }
    const verifyContent =(e)=>{
        if(input.current.value.length == 0) setShowCleaner(false)
        else setShowCleaner(true)
    }
  return (
    <div className='search_sidebar row vcenter ' >
        <MdSearch id='search_button'  />
        <input  id="search_input" ref={input}  placeholder="Recherche" onChange={verifyContent}/>
        {showCleaner && (
            <div id='search_cleaner' onClick={clearInput} > &#10006; </div>
        )}
    </div>
  )
}

export default Search