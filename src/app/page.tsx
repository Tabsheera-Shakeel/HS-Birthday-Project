import BestMoment from "./components/BestMoment";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Reasons from "./components/Reasons";
import GratitudeAndWishes from "./components/Wishes";

function Main(){
  return(
    <div>
    <Header/>
    <Hero/>
  <Letter/>
  <Reasons/>
  <BestMoment/>
  <GratitudeAndWishes/>
    </div>
  )
}
export default Main