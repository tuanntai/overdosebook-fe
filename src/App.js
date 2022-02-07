import { Box } from 'theme-ui';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Explore from './pages/Explore/Explore';
import sx from './theme/AppStyle';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import BookStore from './pages/BookStore/BookStore';
import MyAccount from './pages/MyAccount/MyAccount';
import BookDetail from './pages/BookStore/components/BookDetail/BookDetail';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import OwnerBook from './pages/MyAccount/components/OwnerBook/OwnerBook';
import Profile from './pages/MyAccount/components/Profile/Profile';

const App = () => {
  return (
    <Box sx={sx.app}>
      <Sidebar />
      <Box sx={sx.main}>
        <Header />
        <Box sx={sx.view}>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/book" element={<BookStore />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/account" element={<MyAccount />}>
              <Route index element={<OwnerBook />} />
              <Route path="ownerBook" element={<OwnerBook />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/account/create" element={<CreateAccount />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
