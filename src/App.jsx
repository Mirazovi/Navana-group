import './App.css'

function App() {

  return (
    <>
      <header className="lg:w-[90%] m-auto">
        <nav>
          <div className="lg:flex lg:justify-between lg:text-start text-center items-center py-2 my-4">
            <div className='flex gap-2 items-center'>
              <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce '>
                <MaterialSymbolsLightArrowOutward />
              </div>
              <h1 className="text-4xl font-bold">Navana <span className='text-violet-700'>Group</span> </h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:font-bold text-xl">Home</a>
              <a className="hover:font-bold text-xl">About</a>
              <a className="hover:font-bold text-xl">aortfolio</a>
              <a className="hover:font-bold text-xl">Blog</a>
              <a className="hover:font-bold text-xl">Contact Us</a>
            </div>
            <div className='flex gap-4 items-center text-4xl'>
              <div>
                <IcBaselineSearch />
              </div>
              <div>
                <MaterialSymbolsShoppingCartOutlineSharp />
              </div>
              <div className='flex gap-2 text-2xl py-2 px-5 rounded-full bg-[#abef5f] items-center'>
                <button className=" ">Book Consult</button>
                <div className='text-white p-1 rounded-full font-bold bg-black'>
                  <MaterialSymbolsLightArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section >
          <div className='text-center lg:w-[90%] m-auto p-4 '>
            <div className='flex justify-center'>
              <img src="/public/assets/banner.png" alt="" />
            </div>
            <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>A barn house of this design has a striking appearance</h1>
            <p className='text-2xl py-4'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents, and large windows that flood the space with natural light.</p>
            <div className='flex gap-2 items-center px-4 py-2 rounded-full justify-center bg-[#abef5f] w-[250px] m-auto text-2xl font-bold hover:rotate-180 duration-1000'>
              <div className='lg:w-[250px] w-full flex gap-2 justify-center'>
                <button>View Details</button>
                <div className=' text-2xl  bg-[#97eb38] rounded-full p-1 animate-bounce'>
                  <MaterialSymbolsLightArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main className='bg-[#f4f4f4]'>
        <section >
          {/* section 1  */}
          <section className='lg:w-[80%] m-auto py-14'>
            <div className='lg:flex gap-10 lg:p-0 p-6'>
              {/* div 1  */}
              <div className='lg:w-1/2 py-4 lg:text-start text-center'>
                <div className='flex lg:justify-start justify-center'>
                  <button className='text-xl font-bold py-2 px-4 rounded-full bg-[#ffffff] flex gap-2 items-center'><MaterialSymbolsArrowRightAlt /> About Us</button>
                </div>
                <h1 className='text-5xl font-bold'>We design thoughtful, liveable spaces</h1>
                <p className='text-xl py-4'>The barn house captivates with its blend of rustic charm and
                  modern sophistication, featuring weathered wood, sleek metal accents.</p>
                {/* child div  */}
                <div className='flex lg:flex-col md:flex-row gap-2 flex-col'>
                  <div className='bg-[#ffffff] flex gap-6 items-center p-6 rounded-lg hover:border-[4px] hover:border-violet-700'>
                    <div >
                      <img src="/public/assets/commercial.png" alt="" />
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold'>Commercial</h1>
                      <p className='text-xl pt-2'>The barn house captivates with its blend of rustic charm and modern.</p>
                    </div>
                  </div>
                  <div className='bg-[#ffffff] flex gap-6 items-center p-6 rounded-lg mt-4 hover:border-[4px] hover:border-violet-700'>
                    <div>
                      <img src="/public/assets/residential.png" alt="" />
                    </div>
                    <div>
                      <h1 className='text-2xl font-bold'>Commercial</h1>
                      <p className='text-xl pt-2'>The barn house captivates with its blend of rustic charm and modern.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/2 lg:mt-0 mt-9'>
                <img className='w-full' src="/public/assets/Rectangle.png" alt="" />
              </div>
            </div>
          </section>
          {/* section -2  */}
          <section className='py-10'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-10 py-20 px-20 rounded-2xl bg-[#ffffff] w-[80%] m-auto text-center'>
              <div>
                <div className='flex justify-center pb-3'>
                  <img src="/public/assets/budget-planning.png" alt="" />
                </div>
                <h1 className='text-5xl  font-bold'>235+</h1>
                <p className='text-2xl pt-3'>Happy Client Review</p>
              </div>
              <div>
                <div className='flex justify-center pb-3'>
                  <img src="/public/assets/concept.png" alt="" />
                </div>
                <h1 className='text-5xl  font-bold'>50k+</h1>
                <p className='text-2xl pt-3'>Work Departments</p>
              </div>
              <div>
                <div className='flex justify-center pb-3'>
                  <img src="/public/assets/flow-chart.png" alt="" />
                </div>
                <h1 className='text-5xl  font-bold'>30k+</h1>
                <p className='text-2xl pt-3'>Our happy Client</p>
              </div>
              <div>
                <div className='flex justify-center pb-3'>
                  <img src="/public/assets/vision.png" alt="" />
                </div>
                <h1 className='text-5xl  font-bold'>307+</h1>
                <p className='text-2xl pt-3'>Staff Members</p>
              </div>
            </div>
          </section>
          {/* section - 3 */}
          <section className='lg:w-[80%] m-auto py-10'>
            <div className=' lg:p-0 p-6'>
              <div className='flex justify-center mb-3'>
                <button className='text-xl font-bold py-2 px-4 rounded-full bg-[#ffffff] flex gap-2 items-center'><MaterialSymbolsArrowRightAlt /> About Us</button>
              </div>
              <div className='lg:w-[70%] m-auto text-center'>
                <h1 className='text-5xl font-bold'>Our Works Process</h1>
                <p className='text-xl py-4'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
              </div>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='bg-[#e7c1d3] p-6 rounded-lg '>
                  <img src="/public/assets/concept.png" alt="" />
                  <h1 className='text-2xl font-bold py-2'>Concept</h1>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className='bg-[#efda6e] p-6 rounded-lg'>
                  <img src="/public/assets/flow-chart.png" alt="" />
                  <h1 className='text-2xl font-bold py-2'>Design Process</h1>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className='bg-[#a4dac3] p-6 rounded-lg'>
                  <img src="/public/assets/vision.png" alt="" />
                  <h1 className='text-2xl font-bold py-2'>Supervision</h1>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
                <div className='bg-[#77aaea] p-6 rounded-lg'>
                  <img src="/public/assets/budget-planning.png" alt="" />
                  <h1 className='text-2xl font-bold py-2'>Budget Planning</h1>
                  <p>The barn house captivates with its blend of rustic charm and modern.</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <section className='lg:w-[80%] m-auto'>
          <div className='my-10 lg:p-0 p-4'>
            <div className='text-2xl font-bold py-2 px-4 flex justify-center my-2 bg-[#abef5f] rounded-full w-[350px] m-auto hover:rotate-180 duration-1000'>
              <p className='flex gap-2 items-center'><MaterialSymbolsArrowRightAlt />Explore our Latest works</p>
            </div>
            <div className='lg:w-[60%] m-auto text-center'>
              <h1 className='text-5xl font-bold pt-4'>Our Latest Portfolio</h1>
              <p className='text-xl py-4'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
            </div>
            {/* sub container - 1 */}
            <div className='grid lg:grid-cols-3 gap-2 '>
              {/* div - 1 */}
              <div className='flex lg:flex-row md:flex-row flex-col gap-4 border-2 lg:col-span-2 p-4 items-center rounded-3xl'>
                <div className='lg:w-[40%] md:w-[40%]'>
                  <img className='w-full h-full' src="/public/assets/img1.png" alt="" />
                </div>
                <div className='lg:w-[60%] md:w-[60%]'>
                  <h1 className='text-4xl font-bold'>Commercial</h1>
                  <p className='lg:py-4 py-2 text-xl'>The barn house captivates with its blend of rustic charm and modern. The barn house captivates with its blend of rustic charm and modern .</p>
                  <div className='flex gap-2'>
                    <button className='text-2xl font-bold'>View Details</button>
                    <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                      <MaterialSymbolsLightArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
              {/* div -2  */}
              <div className='border-2 rounded-3xl p-4'>
                <img className='w-full h-full' src="/public/assets/article1.png" alt="" />
              </div>
            </div>
            {/* sub container - 2 */}
            <div className='grid lg:grid-cols-4 gap-2 mt-4'>
              {/* div - 1  */}
              <div className='border-2 p-4 rounded-3xl'>
                <img className='w-full h-full' src="/public/assets/img3.png" alt="" />
              </div>
              {/* div - 2 */}
              <div className='flex gap-4 lg:flex-row md:flex-row flex-col items-center lg:col-span-2 p-4 border-2 rounded-3xl'>
                <div className='lg:w-1/2 md:w-1/2'>
                  <img className='w-full h-full' src="/public/assets/img4.png" alt="" />
                </div>
                <div className='lg:w-1/2 md:w-1/2'>
                  <h1 className='text-4xl font-bold'>Commercial</h1>
                  <p className='text-xl py-4'>The barn house captivates with its blend of rustic charm and modern. </p>
                  <div className='flex gap-2'>
                    <button className='text-2xl font-bold'>View Details</button>
                    <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                      <MaterialSymbolsLightArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
              {/* div - 3 */}
              <div className='border-2 p-4 rounded-3xl'>
                <img className='w-full h-full' src="/public/assets/img5.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#f4f4f4]' >
          <div className='lg:w-[80%] m-auto lg:py-10 lg:p-0 p-4'>
            <div className='text-2xl font-bold py-2 px-4 flex justify-center my-2 bg-[#abef5f] rounded-full w-[350px] m-auto hover:rotate-180 duration-1000'>
              <p className='flex gap-2 items-center'><MaterialSymbolsArrowRightAlt />Navana Group News</p>
            </div>
            <div className='lg:w-[60%] m-auto text-center'>
              <h1 className='text-4xl font-bold'>Read Our Articles and News</h1>
              <p className='text-xl py-3'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
            </div>
            {/* grid container  */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
              <div className='flex lg:flex-col md:flex-row flex-col gap-3 p-4 border rounded-3xl bg-[#ffffff]'>
                <img className='w-full' src="/public/assets/article1.png" alt="" />
                <div>
                  <h1 className='text-2xl font-bold py-1'>How to choose the furniture right  of your home.</h1>
                  <p className='text-xl'>The barn house captivates with its blend of rustic charm and modern. </p>
                  <div className='flex gap-2 mt-1'>
                    <button className='text-2xl font-bold'>View Details</button>
                    <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                      <MaterialSymbolsLightArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex lg:flex-col md:flex-row flex-col gap-3 p-4 border rounded-3xl bg-[#ffffff]'>
                <img className='w-full' src="/public/assets/article2.png" alt="" />
                <div>
                  <h1 className='text-2xl font-bold py-1'>How to choose the furniture right  of your home.</h1>
                  <p className='text-xl'>The barn house captivates with its blend of rustic charm and modern. </p>
                  <div className='flex gap-2 mt-1'>
                    <button className='text-2xl font-bold'>View Details</button>
                    <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                      <MaterialSymbolsLightArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex lg:flex-col md:flex-row flex-col gap-3 p-4 border rounded-3xl bg-[#ffffff]'>
                <img className='w-full' src="/public/assets/article3.png" alt="" />
                <div>
                  <h1 className='text-2xl font-bold py-1'>How to choose the furniture right  of your home.</h1>
                  <p className='text-xl'>The barn house captivates with its blend of rustic charm and modern. </p>
                  <div className='flex gap-2 mt-1'>
                    <button className='text-2xl font-bold'>View Details</button>
                    <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                      <MaterialSymbolsLightArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#f4f4f4] my-2 py-10'>
          <div className='lg:w-[70%] m-auto  lg:p-0 p-4'>
            <div className='text-2xl font-bold py-2 px-4 flex justify-center my-2 bg-[#ace071] rounded-full w-[350px] m-auto hover:rotate-180 duration-1000'>
              <p className='flex gap-2 items-center'><MaterialSymbolsArrowRightAlt />Navana Group News</p>
            </div>
            <div className='lg:w-[70%] m-auto text-center'>
              <h1 className='text-5xl font-bold py-3'>Let’s Discuss Next Project</h1>
              <p className='text-xl font-semibold'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</p>
            </div>
            {/* input tag  */}
            <div className='py-6'>
              <div className='flex gap-4'>
                <input className='py-4 px-6 rounded-2xl text-black w-full text-xl' type="text" placeholder='First Name'/>
                <input className='py-4 px-6 rounded-2xl text-black w-full text-xl' type="text" placeholder='Last Name'/>
              </div>
              <div className='flex gap-4 mt-3'>
                <input className='py-4 px-6 rounded-2xl text-black w-full text-xl' type="text" placeholder='Phone Number'/>
                <input className='py-4 px-6 rounded-2xl text-black w-full text-xl' type="text" placeholder='Enter Email'/>
              </div>
              <textarea className='rounded-lg mt-3 w-full py-4 px-6 h-36 text-xl' placeholder='Text Something' id=""></textarea>
              <div className='text-2xl font-bold py-2 px-4 flex justify-center my-2 bg-[#abef5f] rounded-full w-full '>
              <p className='flex gap-2 items-center'>Text Mail <MaterialSymbolsArrowRightAlt /></p>
            </div>
            </div>
          </div>
        </section>
      </footer>
      <section className='bg-black  py-20'>
        <div className='lg:w-[60%] m-auto text-center lg:p-0 p-4'>
        <div className='flex gap-2 items-center justify-center'>
              <div className=' text-2xl bg-[#abef5f] rounded-full p-1 animate-bounce'>
                <MaterialSymbolsLightArrowOutward />
              </div>
              <h1 className="text-4xl font-bold text-white">Navana <span className='text-violet-700'>Group</span> </h1>
            </div>
          <h1 className='text-xl pt-4 font-bold text-gray-500'>The barn house captivates with its blend of rustic charm and modern sophistication, featuring weathered wood, sleek metal accents.</h1>
          <div className='flex gap-8 flex-wrap py-4 justify-center text-xl font-bold text-gray-500'>
            <a>Home</a>
            <a>Survices</a>
            <a>portfolio</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </div>
          <div className='lg:w-[250px] w-full flex gap-2 m-auto bg-[#b2e17d]  py-2 px4 justify-center rounded-full'>
                <button className='font-bold text-2xl '>Book Consult</button>
                <div className=' text-2xl  bg-black text-white rounded-full p-1 '>
                  <MaterialSymbolsLightArrowOutward />
                </div>
              </div>
        </div>
      </section>
    </>
  )
}
// icons 

export function IcBaselineSearch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
  )
}

export function MaterialSymbolsShoppingCartOutlineSharp(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"></path></svg>
  )
}

export function MaterialSymbolsLightArrowOutward(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"></path></svg>
  )
}
// right arrow 

export function MaterialSymbolsArrowRightAlt(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"></path></svg>
  )
}
export default App
