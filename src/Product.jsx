import React, { useEffect,  useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Product = ({addToCart}) => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [dbounce, setDbounce] = useState('')

    const getData =async()=>{
        try{
            const response = await axios.get(`https://fakestoreapi.com/products`)
            setData(response.data)


        }
        catch(err){
          console.log(err)

        }
    }


    const dataFilter = data.filter(item =>
        item.title.toLowerCase().includes(dbounce.toLowerCase())
     )

     useEffect(() => {
        const handler = setTimeout(()=>{
            setDbounce(search)
        },500)
        return ()=> {
            clearTimeout(handler)
        }
       
     }, [search])
     

    useEffect(() => {
     getData()
    }, [])
    
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <input type="search" placeholder='search Product' className='form-control' onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div className='col-12'>
                <div className='row'>
                    {
                        dataFilter.length === 0? <h1 className='text-center'>
                            Products Loadings...!
                        </h1>
                        :
                        dataFilter.map((val,idx)=>{
                            return(
                                <>
                                <div className='col-md-4 text-center mt-5'>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h1 className='fw-bold fs-6'>{val.title}</h1>
                                        </div>
                                        <div className='card-body'>
                                            <img src={val.image} className='img-fluid'
                                 style={{
                                    height: "200px",
                        objectFit: "contain"
                      }} alt="" />
                      <h3 className='fw-bold fs-3'>Rs: {val.price}</h3>
                                        </div>
                                        <div className='card-footer'>
                                            <button onClick={()=> {addToCart(val) 
                                            toast.success('🛒 Product added to cart')} } className='btn btn-dark'>ADD TO CART</button>
                                        </div>

                                    </div>

                                </div>
                                
                                
                                </>
                            )
                        })
                    }

                </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default Product