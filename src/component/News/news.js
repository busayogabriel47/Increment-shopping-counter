import React, { Component } from 'react';
import NewSingle from "./newSingle";
import Error from "./Error"

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news : [],
            error: false,
        }
    }
    
    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d18cd9051e81487baf0b5dc1a501e568`;
            fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news:data.articles
                })
            })
            .catch((error)=> {
                this.setState({
                    error: true
                })
            });
    }
    renderItems() {
        if(!this.state.error){
            return this.state.news.map((item) => (
                <NewSingle key={item.id} item={item}/>
            ))
        }else{
            return (
                <Error/>
            )
        }
        
    }

    render() { 
        return ( 
                <>
                    <div className="container bg-white pt-4 pb-4">
                        <div className="row">
                            {this.renderItems()}
                        </div>
                        
                    </div>
                </>
            
         );
    }
}
 
export default News;