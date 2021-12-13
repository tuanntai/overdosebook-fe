import { Box } from 'theme-ui';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Explore from './pages/Explore/Explore';
import sx from './theme/AppStyle';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import BookStore from './pages/BookStore/BookStore';
import MyAccount from './pages/MyAccount/MyAccount';
import BookDetail from './pages/BookStore/components/BookDetail';

const App = () => {
  return (
    <Box sx={sx.app}>
      <Sidebar />
      <Box sx={sx.main}>
        <Header />
        <Box sx={sx.view}>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/book" element={<BookStore />}>
              <Route index element={<BookStore />} />
              <Route path=":id" element={<BookDetail />} />
            </Route>
            <Route path="/account" element={<MyAccount />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
