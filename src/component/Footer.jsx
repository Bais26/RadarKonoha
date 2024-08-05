import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="text-gray-600 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a href="/" className="text-white font-bold text-2xl">Radar <span className="text-second">Konoha</span></a>
                    <div class="mt-4 text-gray-500">
                    <p class="mb-1 text-sm text-gray-500">by: M Bais Yufan Mardiansah</p>
                    <p class="mb-4 text-sm text-gray-500">email: baisyufan26@gmail.com</p>
                        <Link to="https://www.facebook.com/bais.yufan.1" className="inline-flex text-white border-0 px-4 focus:outline-none rounded-3xl text-lg"><i class="fa-brands fa-facebook bg-foot"></i></Link>
                        <Link to="https://www.instagram.com/hi_basss" className="inline-flex text-white border-0 px-4 focus:outline-none rounded-3xl text-lg"><i class="fa-brands fa-instagram bg-foot"></i></Link>
                        <Link to="https://twitter.com/baisyufan" className="inline-flex text-white border-0 px-4 focus:outline-none rounded-3xl text-lg"><i class="fa-brands fa-twitter"></i></Link>
                        <Link to="https://id.linkedin.com/in/m-bais-yufan-mardiansah-5b85b52a3" className="inline-flex text-white border-0 px-4 focus:outline-none rounded-3xl text-lg"><i class="fa-brands fa-linkedin"></i></Link>
                        
                    </div>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-gray-900 ">
                <div class="container justify-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Bais Yufan —
                        <a href="https://twitter.com/baisyufan" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@hi_basss</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
