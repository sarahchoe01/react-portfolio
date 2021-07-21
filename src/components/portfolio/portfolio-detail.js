import React, {Component} from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state ={
            portfolioItem: {}
        }
    }

    componentWillMount(){
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios
          .get(
            `https://sarahchoe.devcamp.space/portfolio/portfolio_items/${
              this.props.match.params.slug
            }`,
            { withCredentials: true }
          )
          .then(response => {
            this.setState({
              portfolioItem: response.data.portfolio_item
            });
          })
          .catch(error => {
            console.log("getportfolioitem error", error);
          });
      }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            position,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        const bannerStyle = {
            backgroundImage: "url(" + banner_image_url + ")", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        const logoStyles = {
            width: "250px"
        }

        return(
            <div className = "portfolio-detail-wrapper">
                <div className = "banner" style={bannerStyle}>
                    <img src={logo_url} style={logoStyles}/>
                </div>

                <div className="portfolio-detail-description-wrapper">
                    <div className="name">
                        <p>
                        {description}
                        </p>
                    </div>

                </div>

                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                        Visit {name}
                    </a>
                
                </div>
            </div>
        );
    }
}
