import Video from './assets/video.mp4'
const BgVideo = () => {
  return (
    <>
    <section className=' w-[100%] h-[100vh] px-0 py-[5%] relative flex items-center justify-center hero'>
      <video autoPlay muted loop playsInline className=' absolute right-0 bottom-0 z-[-1]'>
        <source src={Video} />
        </video>
    <section className='text-center '>
<h1 className=' text-[160px] text-white font-medium transition duration-75 text-stroke-2 hover:text-transparent'>Journey</h1>
<a href="" className=' decoration-0 inline-block text-white text-[24px] padding-bg-video border-2 border-white mt-5 transition-all duration-75 hover:bg-white hover:text-black back-video'>Explore</a>
    </section>
    </section>
    </>
  )
}

export default BgVideo