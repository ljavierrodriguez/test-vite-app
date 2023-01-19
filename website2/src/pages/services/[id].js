import React from 'react'

function ServiceDetail({ id }) {
  return (
    <div>
        Pagina Detalle {id}
    </div>
  )
}

export default ServiceDetail

export async function getServerSideProps({ params }) {
    const { id } = params;
    return {
      props: {
        id
      }, // will be passed to the page component as props
    }
  }