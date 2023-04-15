import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import SearchBar from '../../../components/searchBar/SearchBar'



//* SIDE BAR ICON
const SideBarIcon = ({isOpen, onClick}) => {
    return <div 
            className={
                `sidebar__icon 
                ${isOpen && 'sidebar__icon--open'}`} 
            onClick={onClick}>
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </div>
}



//* LIST OF ALL CHAT ROOMS
const ChatList = ({isOpen, initialChats, chats, setChats}) => {

    const [searchText, setSearchText] = useState('') //* STATE FOR SEARCH INPUT

    //* FILTER THE LIST OF CHAT ROOMS
    const handleSearch = (text) => {  
        setSearchText(text);
        if(text){
            const searchList = initialChats.filter(item => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) !==  -1;
            })

            setChats(searchList)
        }
        else {
            setChats(initialChats)
        }
    }

    return <div className={`sidebar__list ${isOpen && 'sidebar__list--open' }`}>
        <div className={`sidebar__content ${isOpen && 'sidebar__content--open'}`}>
            <SearchBar text={searchText} setText={(text) => handleSearch(text)}/>
            <div className='sidebar__list--container'>
                <div className='sidebar__list--title'>
                    <p>Active Channels</p>
                    <FontAwesomeIcon icon={faChevronDown} style={{color: "#fcfcfc",}} />
                </div>

                <div className='sidebar__list--items'>
                {
                chats && chats.length > 0 &&
                chats.map((item, index) => {
                    return <div key={index} className='sidebar__list--item' onClick={() => alert(`${item.name} clicked....`)}>
                        <p>{item.name}</p>
                    </div>
                })
            }
                </div>
                
            
            </div>
        </div>
    </div>
}



//* SIDEBAR COMPONENT
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false) //* STATE FOR OPENING AND CLOASING SIDEBAR MENU
    const initialChats = [  //* INITIAL VALUES OF CHAT ROOMS
        {
            name: 'CP',
        },
        {
            name: 'DPD',
        },
        {
            name: 'SWAT',
        },
        {
            name: 'All SWAT',
        },
        {
            name: 'Gang',
        },
    ]

    const [chats, setChats] = useState(initialChats) //* STATE FOR LIST OF CHAT ROOMS
  return (
    <div className='sidebar'>
        <SideBarIcon isOpen = {isOpen} onClick = {() => setIsOpen(!isOpen)}/>
        <ChatList isOpen = {isOpen} initialChats = {initialChats} chats = {chats} setChats={setChats}/>
    </div>
  )
}

export default SideBar