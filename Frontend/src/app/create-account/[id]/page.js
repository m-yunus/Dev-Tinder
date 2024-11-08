import React from 'react'

const ID = ({params}) => {
    console.log(params?.id)
  return (<div className='h-100'>
 <h1 className='text-3xl'>fgjkdjjjjjjjjjjjjifjjndfkgnnfgiojijfdoijdfijgID: {params.id}</h1>
  </div>

   
  )
}

export default ID