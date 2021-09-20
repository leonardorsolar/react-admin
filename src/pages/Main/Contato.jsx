import React from 'react';
import MenuLR from './MenuLR';
import Footer from '../../components/Footer/Footer';

function Contato() {
  return (
    <div>
      <MenuLR />
      <div class="content-wrapper">

        <section className="content-header">
          <div className="container-fluid">
            <p>Contato </p>
          </div>
        </section>

      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contato;