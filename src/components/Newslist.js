import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'
import './Newsitem.css'

const Newslist = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
      const getArticles = async()=> {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=manchester%20united&apiKey=88450d295ac145aa9ee754bbfc2c3436`)
        console.log(response)
        setArticles(response.data.articles)
      }
      getArticles()
    }, [])
  return (
    <div className='news-body'>
      <input className='news-search' type="text" placeholder='search football news... ' />
      {articles.map(article =>{
        return (
          <Newsitem
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage} />
        )
      })}
    </div>
  )
}

export default Newslist