import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({text, setText}) => {
  return (
    <div className='search'>
        <input
            type='text'
            className='search__input'
            placeholder='Search'
            value={text}
            onChange={e => setText(e.target.value)}
        />

<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} size='xl' className='search--icon'/>
    </div>
  )
}

export default SearchBar