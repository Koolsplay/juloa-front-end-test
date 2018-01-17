
import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { itemsFetchData, showProductDetails } from '@actions/items'
import { Link } from 'react-router'
import Product from'@components/product'

const baseImgUrl = "http://demo.joomprod.com/adsclarity/images/com_adsmanager/contents/"

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchData('http://demo.joomprod.com/adsclarity/index.php?option=com_jmobapp&view=list');
    }

    render() {
        if (this.props.hasErrored) {
            return <div className="loader">Sorry! There was an error loading products !</div>;
        }

        if (this.props.isLoading) {
            return <div className="loader"><i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
 Loading…</div>;
        }

        return (
            <Grid>
                {this.props.items.map((item) => (
                  <Link to={'/product/'+ item.id + '/' + encodeURI(item.ad_headline)} key={item.id}>
                  <Row className="product-handler" >
                    <Product 
                    title={item.ad_headline}
                    imageUrl={baseImgUrl + item.images[0]['thumbnail']}
                    description={item.ad_text}
                    price={item.ad_price}
                    onClick={() => this.props.onClick(item)} />
                  </Row>
                  </Link>
                    ))}
            </Grid>
        );
    }
}

ProductList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        onClick: (item) => dispatch(showProductDetails(item))
            }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);