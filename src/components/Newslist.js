import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Newslist = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
      const getArticles = async()=> {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88450d295ac145aa9ee754bbfc2c3436`)
        console.log(response)
      }
      getArticles()
    }, [])
  return (
    <div>Newslist</div>
  )
}

export default Newslist