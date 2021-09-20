import React from 'react';
import MenuLR from './MenuLR';
import Footer from '../../components/Footer/Footer';
import List from './User/List/List';

function ListUser() {
  return (
    <div>
      <MenuLR />

      <div >
        <List />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ListUser;