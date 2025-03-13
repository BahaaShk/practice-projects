import './loading.css';
function loadingAnimation() {

  return (
    <section className=" flex justify-center items-center min-h-screen">
<div className=' flex justify-evenly loader'>
  <div className='loading one'></div>
  <div className='loading two'></div>
  <div className='loading three'></div>
  <div className='loading four'></div>
</div>
    </section>
  )
}

export default loadingAnimation