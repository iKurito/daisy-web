/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearDaisy } from '../../redux/states/daisy.state';
import { RequestModal } from './components/RequestModal';
import { AdvancedRequestModal } from './components/AdvancedRequestModal';
import { HomeProvider } from './context/home.context';
import HomeSearch from './components/HomeSearch';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDaisy());
  }, []);

  return (
    <HomeProvider>
      <HomeSearch />
      <RequestModal />
      <AdvancedRequestModal />
    </HomeProvider>
  );
}

export default HomePage;
