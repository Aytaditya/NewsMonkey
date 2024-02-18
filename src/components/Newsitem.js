import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props; //declearing title and description as props in react in class based component 
        return (
            <div>
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{zIndex:'1',left:'90%'}}>
                            {source}
                        </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}....</p>
                        <p className='card-text'><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
