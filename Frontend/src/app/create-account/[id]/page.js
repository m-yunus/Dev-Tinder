import React from 'react'

const ID = ({params}) => {
    console.log(params?.id)
  return (
    <h1>ID: {params.id}</h1>
  )
}

export default ID