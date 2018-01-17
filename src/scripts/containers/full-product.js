
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Carousel from 'nuka-carousel'
import { Link } from 'react-router'

const baseImgUrl = "http://demo.joomprod.com/adsclarity/images/com_adsmanager/contents/"

class FullProduct extends Component {

    render() {
        return (
            <Grid className="full-product">
                <Row>
                    <Link to={'/'} className="back-btn">
                           <i className="fa fa-chevron-left" aria-hidden="true"></i>
 Retour
                    </Link>
                </Row>
                <Row>
                    <Col md={5}>
                        <Carousel>
                        {this.props.singleItem.images.map((image, key) =>{
                            return (<div key={key} className="img-holder" style={{backgroundImage: 'url('+baseImgUrl + image.image+')'}}></div>) 
                            
                        })}
                        </Carousel>
                    </Col>
                    <Col md={7}>
                        <h2>{this.props.singleItem.ad_headline}</h2>
                        <div className="description">
                            {this.props.singleItem.ad_text}
                        </div>
                        <div className="price">
                            {this.props.singleItem.ad_price} €
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

FullProduct.propTypes = {
    singleItem: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        singleItem: state.showProductDetails
    };
};

export default connect(mapStateToProps)(FullProduct);