import React from 'react'

const Cart = ({cart}) => {
    const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  )
  return (
    <>
    <div className='container'>
        <div className='row'>
            {
                cart.length === 0 ? <h1 className='fw-bold'>
                    Cart Empty
                </h1>
                :
                cart.map((val,idx)=>{
                    return(
                        <>
                        <div className='col-md-3'>
                            <div className='card text-center'>
                                <div className='card-body'>
                                    <img  className='img-fluid'
                                 style={{
                                    height: "200px",
                        objectFit: "contain"
                      }} src={val.image} alt="" />

                                </div>
                                <div className='card-footer'>
                                    <span> Rs:{val.price}</span>

                                </div>

                            </div>

                        </div>
                        
                        </>
                    )

                })
            }

        </div>
        <div className='col-12 mt-4'>
                <div className='card'>
                  <div className='card-body text-end'>
                    <h4 className='fw-bold'>
                      Total: ₹ {totalPrice.toFixed(2)}
                    </h4>
                  </div>
                </div>
              </div>
    </div>
    
    </>
  )
}

export default Cart