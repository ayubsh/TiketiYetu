import FeaturedTicket from "./FeaturedTicket";
import Ticket from "./Ticket";
import {useState, useEffect} from 'react'

const url = 'https://unusual-gray-hedgehog.cyclic.app/api/ticket';


const TicketsPage = () => {
    const [tickets, setTicket] = useState([])

    const fetchTicket = async () => {
      const tickes = await fetch(url, {
        method: 'GET',
      });

      const json = await tickes.json();
      setTicket(json)
      console.log(json)
    }

    console.log(tickets)

    useEffect(() => {
        fetchTicket();
      },[])

      
    return (
        <div className="flex flex-wrap justify-center -mx-4">
            {
            tickets.map(x => (
                // console.log("mapped: ",x.Title)
                <Ticket title={x.Title} desc={x.Description} price={x.Price}/>
            ))
            }
        </div>
    )
}

export default TicketsPage;