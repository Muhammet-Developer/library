import Resim1 from "../assets/img1.png"
import Resim2 from "../assets/img2-a.jpg"
import Resim3 from "../assets/carousel3.png"
const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner relative w-3/4 overflow-hidden mx-auto rounded-md mt-3 mb-3">
      <div className="carousel-item active relative float-left w-full">
        <img src={Resim1} className="block w-full" alt="..." />
        <div className="carousel-caption hidden md:block absolute text-center">
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img src={Resim2}className="block w-full" alt="..." />
        <div className="carousel-caption hidden md:block absolute text-center">
        </div>
      </div>
      <div className="carousel-item relative float-left w-full  object-cover h-60 ">
        <img src={Resim3} className="block w-full object-cover" alt="..." />
        <div className="carousel-caption hidden md:block absolute text-center">
        </div>
      </div>
    </div>
    <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel