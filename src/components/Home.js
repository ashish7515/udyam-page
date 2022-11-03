import Event from './event';
import Title from './title';
import "../App.css"

function Home(){
    return (
        <>
        <Title />
      <div className="landing-page-images">
        <img src="/assets/1.png" alt=""/>
      </div>
      <div className="characters-image">
        <img src="/assets/Characters3.png" alt="" />
      </div>
      {/* <ComingSoonComp /> */}
      <div className="event-list-main">
        <Event />
      </div>
      </>
    )
}

export default Home;