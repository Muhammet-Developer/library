
import "../components/Books/Modal.css"
import NoBookİmage from "../assets/noImage.jpg"

const Modal = ({bookItem,open, onClose,}) => {
    if (!open) return null;
    console.log(bookItem)
    let thumbnail=bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto " id="exampleModalXl" tabIndex={-1} aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
    <div className="modal-dialog modal-xl relative w-auto pointer-events-none ">
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto  bg-clip-padding rounded-md outline-none text-current ">
        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-500 rounded-t-md bg-white">
          <h5 className="text-xl font-medium leading-normal text-gray-800 " id="exampleModalXlLabel">
                {bookItem.volumeInfo.authors}
          </h5>
          <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body relative p-4">
        <div className="scene">
    <div className="book-wrap">
      <div className="left-side">
        <div className="book-cover-left" />
        <div className="layer1">
          <div className="page-left" />
        </div>
        <div className="layer2">
          <div className="page-left" />
        </div>
        <div className="layer3">
          <div className="page-left" />
        </div>
        <div className="layer4">
          <div className="page-left" />
        </div>
        <div className="layer-text">
          <div className="page-left-2">
            <div className="corner" />
            <div className="corner2" />
            <div className="corner-fold" />
            <div className="page-text w-richtext">
            <img className="bookImg" src={thumbnail||NoBookİmage} alt="" />
              {/* <h3><strong>America</strong></h3>
              <h6>BY&nbsp;<a href="https://www.poetryfoundation.org/poets/walt-whitman" target="_blank">WALT WHITMAN</a></h6>
              <p>‍</p>
              <p>Centre of equal daughters, equal sons,</p>
              <p>All, all alike endear’d, grown, ungrown, young or old,</p>
              <p>Strong, ample, fair, enduring, capable, rich,</p>
              <p>Perennial with the Earth, with Freedom, Law and Love,</p>
              <p>A grand, sane, towering, seated Mother,</p>
              <p>Chair’d in the adamant of Time.</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="center" />
      <div className="right-side">
        <div className="book-cover-right" />
        <div className="layer1">
          <div className="page-right" />
        </div>
        <div className="layer2 right">
          <div className="page-right" />
        </div>
        <div className="layer3 right">
          <div className="page-right" />
        </div>
        <div className="layer4 right">
          <div className="page-right" />
        </div>
        <div className="layer-text right">
          <div className="page-right-2">
            <div className="page-text w-richtext">
              <h3><strong>{bookItem.volumeInfo.title}</strong></h3>
              <h2>BY&nbsp;<a href={bookItem.volumeInfo.previewLink} target="_blank"> {bookItem.volumeInfo.authors}</a></h2>
              <h6><strong>Yayın evi: {bookItem.volumeInfo.publisher || "Bilinmiyor"}</strong></h6>
              <h5><strong>Dil: {bookItem.volumeInfo.language}</strong></h5>
              <h5><strong><a href={bookItem.saleInfo.buyLink} target="_blank">Detaylı bilgi için tıkla</a></strong></h5>
              <p className="description">{bookItem.volumeInfo.description}&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal