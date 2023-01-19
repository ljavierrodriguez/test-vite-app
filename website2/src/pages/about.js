import { AppContext } from '@/store/appContext'
import React, { useContext } from 'react'

function about() {
    const { store, actions } = useContext(AppContext);
  return (
    <div>about {store.name}</div>
  )
}

export default about