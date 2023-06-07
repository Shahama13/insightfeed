import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const updateNews = async () => {
        props.setProgress(20)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
        setLoading(true)
        props.setProgress(50)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }
    useEffect(() => {
        document.title = `${props.category} - InsightFeed`;
        updateNews()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    // handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }
    // handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateNews()
    // }

    return (
        <>
            <h1 className='my-3 text-center fw-semibold' style={{ visibility: "hidden" }}>Top Headlines</h1>
            <h1 className='my-3 text-center fw-semibold'>Top Headlines {props.category === "General" ? "- Today" : `- ${props.category}`}</h1>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults} // Update the condition here
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row mb-4">
                        {!loading && articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url} >
                                    <NewsItem title={element.title} author={element.author} date={element.publishedAt} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )


}

export default News
News.defaultProps = {
    country: "uk",
    pageSize: 6,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}