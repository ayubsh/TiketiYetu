import {Link} from 'react-router-dom';
import '../index.css'
const HeaderBar = () => {
    return (
      <nav className='relative container max-auto p-6'>

        <div className="flex items-center justify-between">

          <div className="pt-2"><Link to={'/'} className='font-serif font-semibold'>TiketiYetu</Link></div>

          <div className="space-x-6">
            <Link to={'/tiketi'} class="hover:text-darkGrayishBlue">Tickets</Link>
            <Link to={'/events'} class="hover:text-darkGrayishBlue">Events</Link>
            <Link to={'/singin'} class="hover:text-darkGrayishBlue">Cart</Link>
            <Link to={'/register'} class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Register</Link>
          </div>

        </div>
      </nav>
    )
}

export default HeaderBar;