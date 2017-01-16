import React from 'react';
import ReactDOM from 'react-dom';

import ProductDetail from  './productDetail.js';
import News from  './news.js';
import ContactUs from  './contactus.js';

import '../sass/scenic-steel.scss';

class PrivacyPolicy extends React.Component {
  render() {
    return ( <div> privacy policy </div> )
  }
}

class TermsAndConditions extends React.Component {
  render() {
    return ( <div> TermsAndConditions </div> )
  }
}


class Header extends React.Component {

  constructor(props) {
   super(props);
    this.home = this.onLogoClick.bind(this);
  }

  onLogoClick() {
    this.props.home();
  }

  render() {

    return (
      <div className='header'>

        <a href='#' className='logo' onClick={() => this.onLogoClick()} >
          <img src='images/Scenic-Logo.jpg' />
        </a>

        <Menu menuClick={this.props.menuClick} />

        <p>
          Based in South East Queensland, Scenic Steel is a family run business based on providing 
          high quality farm fencing materials at a fair price.
        </p>
          
      </div>
    )
  }
}

class Footer extends React.Component {

  render() {

    return (
      <div className='footer'>
       <span className='address'>© 2017 Scenic Steel Pty. Ltd. ACN 612 153 769, 350 Christmas Creek Road, Laravale QLD 4285</span>

        <div className='links'>
          <a className='privacy' href='#'>Privacy Policy</a> | <a href='#' className='TandC'>Terms and Conditions</a>
        </div>
      </div>
    )
  }
}


class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active_id: 0};
  }

  onMenuClick(i)
  {
    this.setState({active_id: parseInt(i,10) });

    this.props.menuClick(i);
  }

  render() {

    var names = ['Home', 'Products', 'News', 'Contact Us'];

    var self = this;

    var items = names.map((x,i) => {

      if (i == this.state.active_id)
        return <li key={i} className='active' onClick={ () => this.onMenuClick(i) } >{x}</li>

      return <li key={i} onClick={ () => this.onMenuClick(i) } >{x}</li>
    });

    return (
          <ul className='menu'>{items}</ul>
    )
  }
}


class Product extends React.Component {

  render() {
    return (

        <div >

          <img src={'images/' + this.props.data.image} />
          
          <div className='text'>
            {this.props.data.name}
          </div>

        </div>

    );
  }
}

class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  onProductClick(product_id) {

    this.props.setProduct( parseInt(product_id,10) );
  }

  render() {

    switch (this.props.menu_id) {

    case 1: 

        var rows = this.props.products.map((p, i) => {

          return (<div key={i}>
                  <ProductDetail data={p} />
                  </div>);
        });

        return ( <div  >{rows}</div> );

        break;

    case 2:
    
        return ( <News data={ 'Watch this space' } /> );
        break;

    case 3:

        return ( <ContactUs data={ 'Watch this space' } /> );
        break;

    default:

      if ( this.props.product_id == -1)
      {
        var rows = this.props.products.map((p, i) => {

          return (<div key={i} className="product" onClick={ () => this.onProductClick(p.id) } >
                  <Product data={p} />
                  </div>);
        })

        return (
          <div className="products" >{rows}</div>
        );

      }
      else
      {
        var p = this.props.products[this.props.product_id-1];

        return ( <div className="products" >
                <ProductDetail data={ p } />
                  </div>
               );
      }

      break;
    }
  }
}

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {menu_id: 0, product_id: -1};

    this.home = this.home.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }

  menuClick(menu_id) {
    this.setState({menu_id: menu_id, product_id: -1});
  }

  setProduct(product_id) {

    this.setState({product_id: product_id});
  }

  home() {
    this.setState({menu_id: 0, product_id: -1 });
  }

  render() {
    return (
      <div className='wrapper' >
          <Header menuClick={this.menuClick} home={this.home} />
          <div className='body'>
            <Body menu_id={this.state.menu_id} products={this.props.products} product_id={this.state.product_id} setProduct={this.setProduct}/>
          </div>
          <Footer />
      </div>
    )
  }
}

var products = [
  {id: 1, name: "Fence Posts", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  cillum dolore eu fugiat nulla riatur. Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum", price: '$100/kg', image: 'tjshi-dog-fence.jpg', large_price: '$100/kg', image: 'tjshi-dog-fence.jpg'},

  {id: 2, name: "Barbed Wire", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-barbed-wire.jpeg', large_price: '$100/kg', image: 'tjshi-barbed-wire.jpeg'},

  {id: 3, name: "Plain Wire", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-galvanized-iron-wire.jpeg', large_price: '$100/kg', image: 'tjshi-galvanized-iron-wire.jpeg'},

  {id: 4, name: "Mesh", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-expanded-mesh.jpeg', large_price: '$100/kg', image: 'tjshi-expanded-mesh.jpeg'},

  {id: 5, name: "Gates", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-gate-panel-system.jpg', large_price: '$100/kg', image: 'tjshi-gate-panel-system.jpg'},

  {id: 6, name: "PC Strand", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-expanded-mesh.jpeg', large_price: '$100/kg', image: 'tjshi-expanded-mesh.jpeg'},

  {id: 7, name: "Recycled Plastic Products", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: '$100/kg', image: 'tjshi-gate-panel-system.jpg', large_price: '$100/kg', image: 'tjshi-gate-panel-system.jpg'},
];


ReactDOM.render(
  <Page products={products}/>,
  document.getElementById('container')
);