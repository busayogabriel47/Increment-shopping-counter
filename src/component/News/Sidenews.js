import React, { Component } from 'react';
import axios from 'axios';
import NewSingle from "./newSingle";
import Singleside from "./Singleside";
import Error from "./Error";


class Sidenews extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidenews : [],
            error: false,
        }
    }
    
    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d18cd9051e81487baf0b5dc1a501e568`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews : response.data.articles
            })
        })
        .catch((error) => {
            this.setState({
                error : true
            })
        });
    }

    renderItems() {
        if(!this.state.error){
            return this.state.sidenews.map((item) => (
                <Singleside key={item.id} item={item}/>
            ))
        }else{
            return (
                <Error />
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
 
export default Sidenews;