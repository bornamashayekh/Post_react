import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';
function RootLayout({ children }) {
  // The RootLayout component serves as the main layout for the application.
  return (
    <>
      <MainHeader />
     <Outlet />
    </>
  );
}
export default RootLayout;