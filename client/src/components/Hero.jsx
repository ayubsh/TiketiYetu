import '../index.css'
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div class="relative" id="home">
    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>
        <div class="relative pt-36 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
                <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Don't just go to the show <span class="text-primary dark:text-white">trade the tickets too!.</span></h1>
                {/* <p class="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p> */}
                <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link to={'/register'} class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Register</Link>
                </div>
            </div>
        </div>
</div>
  );
};

export default Hero;