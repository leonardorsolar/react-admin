import { BrowserRouter } from 'react-router-dom'

import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';


function MenuLR() {
  return (
    <div class="wrapper">
      <Menu />
      <Header />
    </div>
    
  );
}

export default MenuLR;