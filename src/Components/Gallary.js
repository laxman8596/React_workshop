import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Gallary = () => {
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
    const [search, setSearch] = useState('');
    const changeHandler = e =>{
        setSearch(e.target.value);
    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log(search);
    } 

    useEffect(()=>{
        axios.get( `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
            response => console.log(response.data)
        )
    })
  return (
    <div>
        <h1 className='text-center'>Gallary snapchat</h1>
        <form onSubmit={submitHandler }>
            <center>
            <input type="text" value={search} placeholder='search any images' onChange={changeHandler}/><br/><br/>
            <input type='submit' name='submit'/>
            </center>
        </form>
    </div>
  )
}

export default Gallary