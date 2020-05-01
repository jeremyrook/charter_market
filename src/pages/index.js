import React from "react"
import { Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Teaser from "../components/Teaser"

import 'bootstrap/dist/css/bootstrap.min.css';


export default class IndexPage extends React.Component{
  constructor() {
    super();
    this.state = {
      market : [],
      sort: 'asc',
      searchValue: "",
    };
  }

  async componentDidMount(){
    const URL = "https://code-challenge.spectrumtoolbox.com/api/restaurants";
    const response = await fetch(URL, {
      headers: {
        'Authorization': 'Api-Key q3MNxtfep8Gt', 
      }
    })
    const data = await response.json();
    this.setState({market: data});
  }

  handleTextChange(e) {
    this.setState({searchValue: e.target.value})
  }

  render(){

    let sort = this.state.market.sort((a,b)=>{
      const sorted = (this.state.sort === "asc") ? 1 : -1
      return sorted * a.name.localeCompare(b.name)
    })
    
    let marketList = sort.filter(
      (market) => {
          return(
            market.name.toLowerCase().includes(this.state.searchValue)
            ) 
      },
    )
    
    return(
      
      <Layout>
      <SEO title="Home" />
      <div className="Container text-center">
        <h2 className="my-3 font-weight-bold">Find a restaurant near you!</h2>
        <p className="my-2 py-2 border-bottom">Begin by typing a name in the search box or selecting an option from the boxes below.</p>
        <Col xs={4} className="text-center">
          
          
        </Col>

        <Col className="text-center" xs={8}>
          
            <input className="my-2" type="text" value={this.state.searchValue} onChange={this.handleTextChange.bind(this)}></input>
            <Teaser marketItems={marketList}/>
                
        </Col> 

      </div>
  </Layout>

    )
  
  }
  
}

