import MainContainer from "./Components/Layout/Container/MainContainer";
import MainContent from "./Components/Layout/Content/MainContent";
import Navbar from "./Components/Navbar/Navbar";
import GlobalRoutes from "./Routes/GlobalRoutes";

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
