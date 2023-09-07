import { Link } from "react-router-dom";
import Ticket from "./Ticket";
import {useState, useEffect} from 'react'

const url = 'https://unusual-gray-hedgehog.cyclic.app/api/ticket';


const FeaturedTicket = ({tickes}) => {
    const [tickets, setTicket] = useState([])

    const fetchTicket = async () => {
      const tickes = await fetch(url, {
        method: 'GET',
      });

      const json = await tickes.json();
      setTicket(json)
      console.log(json)
    }

    let firstthreeelements = tickets.slice(0, 3)

    useEffect(() => {
      fetchTicket();
    },[])

    return (
      <section
        className="
            bg-white
            pt-20
            lg:pt-[120px]
            pb-12
            lg:pb-[90px]
            relative
            z-20
            overflow-hidden
            "
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2
                  className="
                        font-bold
                        text-3xl
                        sm:text-4xl
                        md:text-[40px]
                        text-dark
                        mb-4
                        "
                >
                  Featured Tickets
                </h2>
                <p className="text-base text-body-color">
                  Upcoming Eventes and Concerts
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">

          {
            firstthreeelements.map(x => (
              // console.log("mapped: ",x.Title)
              <Ticket title={x.Title} desc={x.Description} price={x.Price}/>
            ))
          }
          <Link to={'/tickets'} className="text-blue-500">View More Tickets</Link>
          </div>
        </div>
      </section>
    );
}

export default FeaturedTicket;
