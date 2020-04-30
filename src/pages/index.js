import React from "react"
import { Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
export default class IndexPage extends React.Component{
  constructor() {
    super();
    this.state = {
      market : [],
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
    console.log(this.state.market)
  }

  handleTextChange(e) {
    this.setState({searchValue: e.target.value})
  }

  render(){
    let marketList = this.state.market.filter(
      (market) => {
          return(
            market.name.toLowerCase().includes(this.state.searchValue)
            ) 
      },
    )
    return(
      <Layout>
    <SEO title="Home" />
    <div className="Container">
      <h1 className="mb-5 pb-4 font-weight-bold border-bottom text-center">Market</h1>
      <Col className="text-center">
            <input type="text" value={this.state.searchValue} onChange={this.handleTextChange.bind(this)}></input>
            <div>
              {marketList.map((market, i) => {
                return <p key={i}>{market.name}</p>
              })}
            </div>
            </Col>
    </div>
  </Layout>

    )
  }
}

