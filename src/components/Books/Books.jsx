import BooksStyle from "./Books.module.scss"
import NoBookİmage from "../../assets/noImage.jpg"
import { useState } from "react";
import Pagination from "../Pagination";
const Books = ({bookData}) => {
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  // console.log(bookData)
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = bookData?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
    <div className={BooksStyle.component}>
        <ul className={BooksStyle.align}>
          {/* Book 1 */}
          {currentPost?.map((book,id)=>{
            // const{volumeInfo}=book;
          let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
          let name = book.volumeInfo.authors
          let title = book.volumeInfo.title
          let subTitle = book.volumeInfo.subtitle
          console.log(book);
            return(
<li>
            <figure className={BooksStyle.book}>        
              {/* Front */}        
              <ul className={BooksStyle.hardcover_front}>
                <li>
                  <img src={thumbnail || NoBookİmage} alt="" width="100%"  />
                </li>
                <li />
              </ul>        
              {/* Pages */}        
              <ul className={BooksStyle.page}>
                <li />
                <li>
                  <a className="btn" href="#">Download</a>
                </li>
                <li />
                <li />
                <li />
              </ul>        
              {/* Back */}        
              <ul className={BooksStyle.hardcover_back}>
                <li />
                <li />
              </ul>
              <ul className={BooksStyle.book_spine}>
                <li />
                <li />
              </ul>
              <figcaption>
                <h1>{title}</h1>
                <span>{name}</span>
                <p>{subTitle}</p>
              </figcaption>
            </figure>
          </li>  
            )
          })}
          <Pagination 
          bookData={bookData} 
          postsPerPage={postsPerPage}
          setPage={setPage}
          page={page}
           />
         </ul>
      </div>
    </>
  )
}

export default Books
