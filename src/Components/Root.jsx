import { Outlet } from 'react-router-dom';
import { Header } from './Shared/Header';
import { Footer } from './Shared/Footer';


export const Root = () => {
    return (
      <>
        <div className="md:max-w-7xl mx-auto px-4 md:px-10">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
  };