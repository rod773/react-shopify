import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

class shopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  createCheckout = async () => {};

  fetchCheckout = async () => {};

  addItemCheckout = async () => {};

  removeLineItem = async (lineItemsIdToRemove) => {};

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWidthHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);

    this.setState({ product: product });
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    return <ShopContext.Provider>{this.props.children}</ShopContext.Provider>;
  }
}

const ShopConsumer = ShopContext.Consumer();

export { ShopConsumer, ShopContext };

export default shopProvider;
