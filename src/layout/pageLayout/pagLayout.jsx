import React from 'react'
import NavBar from '../NavBar/navBar'

export default function PagLayout({children}) {
  return (
    <section>
        <NavBar></NavBar>
        <section>{children}</section>
    </section>
  )
}
