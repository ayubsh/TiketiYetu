import {Link} from 'react-router-dom';
import '../index.css'
const HeaderBar = () => {
    return (
//         <header className="text-gray-700 body-font border-b border-gray-200">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to={'/'}>
//       <span className="ml-3 text-xl">TiketiYetu</span>
//     </Link>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <Link className="mr-5 hover:text-gray-900" to={'/ticket'}>Tiketi</Link>
//       <Link className="mr-5 hover:text-gray-900" to={'/events'}>Events</Link>
//       <Link className="mr-5 hover:text-gray-900" to={'/register'}>Register</Link>
//     </nav>
//   </div>
// </header>

<header class="py-8 ">
    <div class="flex justify-between items-center">
      <a href="/" class="text-black text-2xl font-bold">OvenRueden</a>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-black">Home</a></li>
        <li><a href="#" class="text-black">About</a></li>
        <li><a href="#" class="text-black">Products</a></li>
      </ul>
    </div>
  </header>
    )
}

export default HeaderBar;