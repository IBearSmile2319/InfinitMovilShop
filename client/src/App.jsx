import MainContainer from "./components/Layout/Container/MainContainer";
import MainContent from "./components/Layout/Content/MainContent";
import Navbar from "./components/Navbar/Navbar";
import GlobalRoutes from './routes/GlobalRoutes'

function App() {
  return (
    <MainContainer>
      <Navbar/>
      <MainContent>
        <GlobalRoutes/>
      </MainContent>
    </MainContainer>
  );
}

export default App;
