import React from 'react'
import About1 from "../../assets/About1.png";
import About2 from "../../assets/About2.png";
import About3 from '../../assets/About3.png';
import About4 from '../../assets/About4.png';

function AboutContent() {


const data = [
    {
    tittle:"ABOUT ORGANIC Targuawan AGRO",
    description:"Targuawan Agro was founded with a focus on sustainable agriculture and is committed to encouraging the use of organic farming methods and environmentally friendly agricultural solutions. Our mission is to equip farmers with the skills, information, and resources they need to switch to organic farming practices, promoting a healthier environment and giving consumers wholesome, chemical-free food. We are dedicated to developing organic farming practices that improve soil health, biodiversity, and long-term agricultural sustainability through cutting-edge research, instructional support, and advocacy. In order to increase crop yields and save the environment, Targuawan Agro works directly with farmers, giving them access to state-of-the-art organic fertilizers, seeds, tools, and natural medicines. Beyond only selling goods, we also provide a wide selection of complimentary educational resources and workshops as part of our commitment.",
    image:About1
    },
    {
        tittle:"Annual Reports and Financials",
        description:"Accountability and transparency are fundamental to how we operate at Targuawan Agro. Our dedication to ethical business conduct, sustainable development, and the long-term viability of our organic agricultural projects is reflected in our annual reports and financial statements.Annual Reports: Our annual reports offer a thorough analysis of the year's accomplishments, continuing initiatives, and planned objectives. They draw attention to the benefits of our work supporting organic farming, the developments in R&D, and our interactions with farmers throughout the globe. These studies go into detail about our partnerships with key players and how we help advance cutting-edge agricultural solutions.Financial accounts: We guarantee complete transparency about our sources of income, investments, and outlays by publishing our audited financial accounts each year.",
        image:About2
    },
    {
        tittle:"Staff and Boards",
        description:"An enthusiastic group of specialists committed to revolutionizing agriculture via organic and sustainable practices is the driving force behind Targuawan Agro. Our board members and employees collaborate to make sure that every aspect of our business is carrying out our objective, which is to promote environmentally responsible farming.Leadership Team: The members of our leadership team include backgrounds in research, business management, sustainability, organic agriculture, and more. In order to maintain Targuawan Agro's position as a leader in the organic farming industry, they are dedicated to guiding the firm toward innovation and sustainable growth.Board of Directors: Targuawan Agro's Board of Directors is made up of corporate executives, organic farming proponents, and industry specialists who offer strategic direction and oversight.",
        image:About3
    },
    
    {
        tittle:"JOBS & INTERNSHIP",
        description:"We at Targuawan Agro are constantly searching for driven, creative people that are dedicated to changing the face of organic and sustainable agriculture. Regardless of whether you're a student seeking practical experience or an experienced professional.Jobs Available Right Now: Agricultural ScientistWhere: Development and ResearchFunction: Carry out studies on sustainable agricultural production, soil health, and organic farming practices.Field Officer: Agricultural OutreachFunction: Closely collaborate with farmers to introduce organic farming methods, offering guidance and assistance as they shift to sustainable farming methods.Marketing Manager Location: Communications & MarketingFunction: Create and implement marketing plans to increase awareness of Targuawan Agro's organic goods and services.Position: Sustainability & Impact Analyst; Duty: Examine the surroundings",
        image:About4

    }
]


  return (
    <>
      <div className="container">
  <div className="row justify-content-center py-5">
    {data.map((item, index) => (
      <div className="col-12 col-md-12 col-lg-12 py-3" key={index}>
        <div className={`d-flex ${index % 2 === 0 ? '' : 'flex-row-reverse'} align-items-center gap-4`}>
          {/* Image and text block */}
          <div className="col-5 rounded-3">
            <img src={item.image} alt="loading ...." className="img-fluid rounded-3 w-50" />
          </div>
          <div className="col-7">
            <h2>{item.tittle}</h2>
            <p className="text-black">
              {/* Break the description every 10 words */}
              {item.description.split(' ').map((word, i) => (
                <>
                  {word} {((i + 1) % 80 === 0) && <br />} {/* Add break after every 10 words */}
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default AboutContent
