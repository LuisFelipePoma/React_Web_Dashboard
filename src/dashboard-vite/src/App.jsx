import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'
import './App.css'
import MaintContent from './Components/MainContent/MaintContent'
import Footer from './Components/Footer/Footer'

function App () {
  return (
    <main className='App'>
      <SideBar />
      <Header />
      <MaintContent />
      <Footer />
      {/*
            <Header>
            <Sidebar>
            <MainContent>
                <Overview>
                <Charts>
                <Tables>
                <Alerts>
            <MainContent/>
            <Footer>
        */}
    </main>
  )
}

export default App
