import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductDetail extends React.Component {

  render() {

    return (
          <div className='product-detail'>

            <br />

            <table>
              <tbody>
                <tr>
                  <td>
                    <div className='name'>{this.props.data.name}</div>

                    <hr />

                    <div className='description'>{this.props.data.description}</div>

                    <br />

                    <div className='price'>Price: {this.props.data.price}</div>
                  </td>

                  <td>
                    <img src={'images/' + this.props.data.image} />
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        )
  }
}