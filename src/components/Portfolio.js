import "./Portfolio.css"
import Portfolio_data from "./Portfolio_data"
import PortfolioCard from "./PortfolioCard"



export default function Portfolio(){
    return (
        <section id="portfolio" className='portfolio top'>
            <div className="container">
                <br></br>
                <div className="heading text-center">
                    <h4> HERE IS A COLLECTION OF</h4>
                    <h1> MY WORK</h1>
                </div>
            </div>

            <div className='content'>
                
            {Portfolio_data.map((value, index) => {
                console.log(value.head_image)
              return <PortfolioCard key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} goals={value.goals} intro={value.intro} skills={value.skills} results={value.results} caption={value.caption} method={value.methodology} project={value.project} challenges={value.challenges} head_image={value.head_image} link={value.link}/>
            })}
            </div>
            <br></br>
        </section>
    )
}