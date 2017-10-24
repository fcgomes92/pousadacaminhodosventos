import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-section">
          <div className="footer-section-list">
            <span>&#169; 2017 Pousada Caminho dos Ventos</span>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-section-list">
            {this.props.links}
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
