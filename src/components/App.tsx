import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import PackingList from "./PackingList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <PackingList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
