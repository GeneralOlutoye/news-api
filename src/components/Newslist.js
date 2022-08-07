import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'
import './Newsitem.css'

const Newslist = () => {
    const [articles, setArticles] = useState()
    const [fetch, setFetch] = useState('politics')

    // useEffect(()=>{
    //   const getArticles = async()=> {
    //     const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=politics&apiKey=88450d295ac145aa9ee754bbfc2c3436`)
    //     console.log(response)
    //     setArticles(response.data.articles)
    //   }
    //   getArticles()
    // }, [])

    const [data, setData] = useState('')

    const apiData = async ()=>{
      await axios.get(`https://newsapi.org/v2/top-headlines?q=${localStorage.getItem("api")}&apiKey=88450d295ac145aa9ee754bbfc2c3436`).then(response=>{
        setArticles(response.data)
        // console.log(response)
      })
    }
    console.log(fetch)
    useEffect(() => {
     apiData()
    }, [])
    

  return (
    <div className='news-body'>
      <form action="submit">
      <input className='news-search' onChange={(e)=>setData(e.target.value)} type="text" placeholder='search football news... ' />
      <button onClick={()=>setFetch(localStorage.setItem("api", data))}>FETCH</button>
      </form>
      {articles?.articles?.map((x, index) =>
      <span key={index}>
        <Newsitem
        key = {x.id}
        title={x.title}
        description={x.description}
        url={x.url}
        urlToImage={x.urlToImage} />
      </span>
        )}


      {/* {articles.map(article =>{
        return (
          <Newsitem
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage} />
        )
      })} */}
    </div>
  )
}

export default Newslist