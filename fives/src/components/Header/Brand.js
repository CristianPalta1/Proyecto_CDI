import React from 'react'
import Link from 'next/link'

const Brand = () => {
  return (
    <>
        <Link href="/">
          <a className="navbar-brand">
            <img
              loading="lazy"
              src="/resourses/assets/logo.svg"
              className="navbar-brand-logo"
              title="logo"
              alt="logo"
            />
          </a>
        </Link>
    </>
  )
}

export default Brand