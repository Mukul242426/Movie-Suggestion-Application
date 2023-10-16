import React from 'react'
import '../Styling/SubWidget.css'

function SubWidget({category}) {
  return (
    <div className='Sub-Widget'>
    <div className='indiviual-options'>{category}</div>
    </div>
  )
}

export default SubWidget
