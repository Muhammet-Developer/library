// import BooksStyle from "./Books.module.scss"
import "./Book.css"
import NoBookİmage from "../../assets/noImage.jpg"
import { useState } from "react";
import Pagination from "../Pagination";
import Modal from "../Modal";
const Books = ({bookData}) => {
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [openModal, setOpenModal] = useState(false);
  const [bookItem, setItem] = useState();
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = bookData?.slice(indexOfFirstPost, indexOfLastPost);
 
  return (
    <>
      <div className="container">
          {currentPost?.map((book,item)=>{
            const{id}=book;
            let volumeInfo = book.volumeInfo
            let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
            let name = book.volumeInfo.authors
            let title = book.volumeInfo.title
            let subTitle = book.volumeInfo.subtitle
          // console.log(book);
            return(
              <div className="wrapper" >
              <div className="book">
                  <figcaption>
                <span>{title}</span>
                <h1>Yazar: {name}</h1>
                {/* <p>{subTitle}</p> */}
               </figcaption>
                <div className="inner-book">
                  <div className="img"
                  onClick={()=> {setOpenModal(true); setItem(book)} }
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModalXl"
                  
                  style={{paddingTop: 'calc(1.07 * 100%)'}}>
                   <img src={thumbnail || NoBookİmage} alt="book cover"/> 
                   </div>
                  <div className="page" />
                  <div className="page page-2" />
                  <div className="page page-3" />
                  <div className="page page-4" />
                  <div className="page page-5" />
                  <div className="img final-page" style={{paddingTop: 'calc(1.07 * 100%)'}}>
                  </div>
                </div>
              </div>          
            </div>
          )
        })}
        <Modal
        bookItem={bookItem}
        open={openModal}
        onClose={() => setOpenModal(false)} 
        />
          </div>
          <Pagination 
          bookData={bookData} 
          postsPerPage={postsPerPage}
          setPage={setPage}
          page={page}
          />
    </>
  )
}

export default Books
