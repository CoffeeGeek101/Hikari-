import { nav_btns } from '@/utils/navbar/navbar_helper'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-bg2 absolute bottom-0 h-[80px] rounded-t-3xl flex items-center justify-around'>
        {
            nav_btns.map((btn, idx) => {
                return (
                    <div key={idx}>
                        <btn.logo color='#C3B1E1' strokeWidth={1}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Navbar