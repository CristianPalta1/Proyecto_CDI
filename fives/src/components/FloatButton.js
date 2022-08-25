import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useToggle } from 'hooks/useToggle'


//Services
import { getDataChatBot } from 'services/chatBot'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'utils';
import Image from 'next/image';




const FloatButtonChat = () => {

  const router = useRouter();
  const chatURL = `/api/chatBot?locale=${router.locale}`;
  const { data: chatData } = useSWR(chatURL, fetcher);
 


  const imgChatGeneral = "/resourses/assets/float-button-icon.svg"
  const imgChatFbMessenger = "/resourses/assets/mg.svg"
  const imgChatMessenger = "/resourses/assets/ms.svg"
  const imgChatWhatsapp = "/resourses/assets/wt.svg"




  const [visible, setVisible] = useToggle()
  const [activeChat, setActiveChat] = useState(false)

  const handleClick = () => {
  
    setVisible()

  }
  // const handleChatVisible = (e) => {
  //   e.preventDefault();
  //   var chat = document.getElementById("calixta-chat-872746017522335");

  //   if (activeChat) {
  //     setActiveChat(false)
  //     if (chat.style.display === 'none' && activeChat) {
  //       chat.style.display = "block"
  //       setActiveChat(false)

  //     } else {
  //       chat.style.display = "none"
  //       setActiveChat(true)
  //     }

  //   } else {
  //     setActiveChat(true)
  //     chat.style.display = "block"
  //   }

  // }
 
  if(!chatData) return <p>Loading</p>
  return (
    <div className={`float-button_chats ${visible ? "active" : " "}`} onClick={() => { handleClick() }}>
      <div className="chats" >
        <div className="dots__chat">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className={`messenger_fb  ${visible ? "active" : " "}`} dangerouslySetInnerHTML={{ __html: chatData ? chatData[0]?.messenger: ""}} />
        <div className={`whatsapp ${visible ? "active" : " "}`} dangerouslySetInnerHTML={{ __html: chatData ? chatData[0]?.whatsapp : ""}} />
        {/* <div className={`messenger2 ${visible ? "active" : " "}`} onClick={(e) => { handleChatVisible(e) }} dangerouslySetInnerHTML={{ __html: chatData ? chatData[0]?.chat_box : ""}} />        */}
        
        <div className='generalChats' >

          <div className='container_float-button_generals'>
            <Image  width="45.141" height="45" className='float-button_generals' src={imgChatGeneral} alt="general_chat" />
          </div>

        </div>
      </div>
    </div >
  )
}



export default FloatButtonChat