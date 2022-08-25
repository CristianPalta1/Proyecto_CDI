import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const ThankYou = ({}) => {

    const backGrounImage = 'assets/404_backGround.png'
    const logo = '/resourses/assets/logo.svg'

    const router = useRouter();
 


    const handleOnClick = () => {
        router.push('/');
    }
    return (
        <div className="notFound__container" >
            <div className='content__404'>
                <div className = "title__404">
                <h1>404 <span>oops! page not found</span></h1>
                </div>           

                <p className = "description">the resource requested could not be found on this server</p>
          
                <Link href= "/">
                    <a className = "button__404">back to home</a>

                </Link>
                <div className='logo__404'>
                    <Image priority={false} src={logo} alt="logo" title="logo" width="326.607" height="69.911"/>

                </div>
            </div>
        </div>

    );
};

export default ThankYou;
