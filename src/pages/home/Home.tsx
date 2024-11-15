import Footer from "../../components/footer/Footer"
import RowOneSection from "./row-1-secton/RowOneSection"
import RowTwoSection from "./row-2-section/RowTwoSection"
import RowThreeSection from "./row-3-section/RowThreeSection"
import RowFourSection from "./row-4-section/RowFourSection"


const Home = () => {
  return (
   <div>
    <main>
        <RowOneSection/>
        <RowTwoSection/>
        <RowThreeSection/>
        <RowFourSection/>
        <Footer/>
    </main>
   </div>
  )
}

export default Home
