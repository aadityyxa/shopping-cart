import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'
import Sidebar from '../components/sidebar.jsx'
import shopHeroImage from '../assets/images/shop-hero-image.jpg'
import Card from '../components/card.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const Shop = () => {
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false); 
    const [data, setData] = useState(true); 
    const { name } = useParams(); 
    console.log(name); 
    let endpoint = 'products';

    if(name === 'men') {
        endpoint = `products/category/men's%20clothing`; 
    }else if(name === 'women') {
        endpoint = `products/category/women's%20clothing`; 
    }else if(name === 'accessories') {
        endpoint = 'products/category/jewelery'
    }else if(name === 'tech') {
        endpoint = 'products/category/electronics'
    }

    console.log(endpoint); 

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://fakestoreapi.com/${endpoint}`); 
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                const data = await response.json(); 
                setData(data); 
                console.log(data);
            }catch(err) {
                if (err) setError(err);  
            }
            setLoading(false); 
        }

        getData()
    }, [endpoint]); 

 

    return(
        <>
            <Navbar page='shop' />

            <div className='shop-hero' >
                <img src={shopHeroImage} alt="" className='shop-hero-image'/>
                <h1>{name === 'tech' ? 'TECH' : 'CLOTHING'} STORE</h1>
            </div>

            <div className='shop-content'>
                <Sidebar />
                <div className="product-grid">
                {loading ? 
                    <div className='shop-loading-text'><h1>Loading Shop...</h1></div>
                :error?
                    <div className='shop-loading-text'><h1>There was an error in loading items. </h1></div>
                :
                    data.map((item) => <Card name={item.title} price={item.price * 85} image={item.image} key={item.id} id={item.id}/>)
                }
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shop;