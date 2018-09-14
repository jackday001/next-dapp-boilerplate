import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }) => {
  return (
    <div className="z-0 flex flex-col items-center w-full h-screen pb-16 lg:pb-0">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
