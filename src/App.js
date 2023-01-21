

import './App.css';

import { Stack, useMediaQuery } from '@chakra-ui/react'

import AllRoutes from './routes/AllRoutes';
import Sidebar from './components/Sidebar';





function App() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')


  return (
    <div className="App">

      <Sidebar />

      <Stack position={"relative"} left={isLargerThan800 ? "20%" : "10%"} w={isLargerThan800 ? "80%" : "90%"} >
        <AllRoutes />
      </Stack>

    </div >
  );
}

export default App;
