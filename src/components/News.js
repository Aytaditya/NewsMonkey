import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number

    }
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
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d278d15191f94852bed6d0605907607f&page=1&pageSize=${this.props.pageSize}`
        this.setState({
            loading:true
            //setting loading true and making spinner spin till data comes hence setting state before parsedData
        })
        let data= await fetch(url)
        let parsedData=await data.json()
        this.setState({
            articles:parsedData.articles,
            totalResult:parsedData.totalResults,
            loading:false
        })

    }
    handleClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d278d15191f94852bed6d0605907607f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading:true
                //setting loading true and making spinner spin till data comes hence setting state before parsedData
            })
    
            let data = await fetch(url);
            let parsedData = await data.json();
            
            this.setState({
                articles: parsedData.articles,
                page:this.state.page+1,
                loading:false
            });
        } 
    }
    
    previousClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d278d15191f94852bed6d0605907607f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading:true
            //setting loading true and making spinner spin till data comes hence setting state before parsedData
        })
        let data= await fetch(url)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles,
            loading:false
        })
        
    }

    render() {
        return (
            <div className='container'>
                
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((element) => {

                        return <div className="col-md-4 my-3" key={element.url}>
                            <Newsitem  title={element.title} description={element?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" onClick={this.previousClick} className="btn btn-danger" disabled={this.state.page<=1}>&larr; Previous</button>
                <button type="button" className="btn btn-danger" onClick={this.handleClick} disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News
