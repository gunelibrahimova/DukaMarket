import React from 'react'
import { useParams } from 'react-router-dom'
import Description from '../components/Description/Description'
import Details from '../components/Details/Detail'

function Detail() {

  const {id} = useParams()
  return (
    <div>
      <Details/>
    </div>
  )
}

export default Detail