import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Caroussel = () => {
  return (
    <div>
      <MDBCarousel showControls  fade>
      <MDBCarouselItem
        className='img'
        itemId={1}
        src='https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt='...'
      />
      <MDBCarouselItem
        className='img'
        itemId={2}
        src='https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='...'
      />
      <MDBCarouselItem
        className='img'
        itemId={3}
        src='https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt='...'
      />
    </MDBCarousel>
    </div>
  )
}

export default Caroussel