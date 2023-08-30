import React from 'react'
import uuid from 'react-uuid'

const getUniqueID = () => {
    let id = uuid()
  return id;
}

export  {getUniqueID};