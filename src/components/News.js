import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
     async componentDidMount(){
        //it will run after everything is rendered
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d278d15191f94852bed6d0605907607f&page=1&pageSize=20"
        let data= await fetch(url)
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,totalResult:parsedData.totalResults})

    }
      handleClick=async()=>{
        if(this.state.page +1>Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d278d15191f94852bed6d0605907607f&page=${this.state.page+1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        })
    }
    }
    previousClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d278d15191f94852bed6d0605907607f&page=${this.state.page-1}&pageSize=20`
        let data= await fetch(url)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
        
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className="my-3">NewsMonkey-Today's Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem  title={element.title} description={element?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" onClick={this.previousClick} className="btn btn-danger" disabled={this.state.page<=1}>&larr; Previous</button>
                <button type="button" className="btn btn-danger" onClick={this.handleClick} disabled={this.state.page +1>Math.ceil(this.state.totalResults/20)}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News
