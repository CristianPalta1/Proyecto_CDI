import React, { useState } from 'react';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'utils';

function AccountUsers({ visible }) {
  const [listActive, setListActive] = useState('0');

  const router = useRouter();
  const sponsorsURL = `/api/loginManage?locale=${router.locale}`;
  const { data: LoyaltiAccount } = useSWR(sponsorsURL, fetcher);


  if(!LoyaltiAccount) return (<p>loading ...</p>)
  var userAccounts = [
    {
      id: '0',
      title: `${LoyaltiAccount?.paragraph_tabs_export[0].title_tab}`,
      accounts: [
        {
          login: 'Login',
          register: 'Register',
        },
      ],
    },
    {
      id: '1',
      title: `${LoyaltiAccount?.paragraph_tabs_export[1].title_tab}`,
      accounts: [
        {
          login: 'Login Agencies',
          register: 'Register Agencies',
        },
      ],
    },
    {
      id: '2',
      title: `${LoyaltiAccount?.paragraph_tabs_export[2].title_tab}`,
      accounts: [
        {
          login: 'Login Companies',
          register: 'Register Companies',
        },
      ],
    },
  ];

  const handleLoginLoyalty= () =>{
 
  
    document.querySelector(".loyalty-icon").click();
  }

  const ListItem = ({ id }) => {
    switch (id) {
      case '0':
        return (
          <div className="social__acount">
            <p className="login__acount" onClick={()=>{handleLoginLoyalty()}}>             
                {`${LoyaltiAccount?.paragraph_tabs_export[0].link_tab[0].text}`}          
            </p>
          </div>
        );
      case '1':
        return (
          <div className="social__acount">
            <p className="login__acount">
              <a
                href={LoyaltiAccount?.paragraph_tabs_export[1].link_tab[0].url}
                target="_blank"
                rel="noreferrer"
              >
                {`${LoyaltiAccount?.paragraph_tabs_export[1].link_tab[0].text}`} 
              </a>
            </p>
            <p className="register__acount">
              <a
                href={LoyaltiAccount?.paragraph_tabs_export[1].link_tab[1].url}
                target="_blank"
                rel="noreferrer"
              >
                   {`${LoyaltiAccount?.paragraph_tabs_export[1].link_tab[1].text}`}  
              </a>
            </p>
          </div>
        );
      case '2':
        return (
          <div className="social__acount">
            <p className="login__acount">
              <a
                href={LoyaltiAccount?.paragraph_tabs_export[2].link_tab[0].url}
                target="_blank"
                rel="noreferrer"
              >
               {`${LoyaltiAccount?.paragraph_tabs_export[2].link_tab[0].text}`} 
              </a>
            </p>
            <p className="register__acount">
              <a
                href={LoyaltiAccount?.paragraph_tabs_export[2].link_tab[1].url}
                target="_blank"
                rel="noreferrer"
              >
                {`${LoyaltiAccount?.paragraph_tabs_export[2].link_tab[1].text}`}  
              </a>
            </p>
          </div>
        );
      default:
        return <div>No hay items disponibles</div>;
    }
  };

  return (
    <div className={`user__acount ${visible ? 'active' : ''}`}>
      <ul className="tab__acount">
        {userAccounts.map((itemAccount, i) => (
          <li
            className={`list__acount ${listActive === itemAccount.id ? 'active' : ''
              }`}
            onClick={() => {
              setListActive(itemAccount.id);
            }}
            key={`list_account ${i}`}
          >
            {itemAccount.title}
          </li>
        ))}
      </ul>

      <ListItem id={listActive} />
    </div>
  );
}

export default AccountUsers;
