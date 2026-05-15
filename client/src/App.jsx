import Header from './components/Header'
import Error404 from './components/Error404'
import Pagination from "./components/Paginaton"
import Tabs from "./components/Tabs"
import Breadcrumbs from "./components/Breadcrumbs"
import Cards from "./components/Cards"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <Error404/>
      <Pagination/>
      <Tabs/>
      <Breadcrumbs/>
      <Cards/>
      <h1 className="text-4xl text-green-500 font-bold text-center mt-10">
        Employee Management System
      </h1>
    </div>
  )
}

export default App;