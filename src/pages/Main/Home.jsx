import React from 'react';
import MenuLR from './MenuLR';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
      <MenuLR />
     

      <div class="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <p>Home Home home </p>
                </div>
            </section>
        </div>

      

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;