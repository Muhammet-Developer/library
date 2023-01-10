import React from 'react'

const Pagination = ({bookData,postsPerPage,setPage,page}) => {
    
  const pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(bookData?.length / postsPerPage); i++) {
    pagesNumbers.push(i);
  }
  // console.log(pagesNumbers);
  const handleChange = (event, value) => {
    setPage(value)
}
const next = () => {
    setPage(page++)
}
function back ()
{
  page > 1 && setPage(--page)
}
  return (
    <>
    <div className="flex justify-center ">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none mb-6 mt-6">

           <li className="page-item"><button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                 onClick={back}>Back</button></li>
            {pagesNumbers?.map((page,index)=>{
              return  <li key={index}  className="page-item ">
                  <button 
                  aria-current="page"  
                  className="page-link active:bg-blue-800 active:shadow-lg relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#"
                 onClick={()=> setPage(page)} >{page}</button></li>
                })}
                <li className="page-item"><button className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                 onClick={next}>Next</button></li>
          </ul>
        </nav>
      </div>

                 </>
  )
}

export default Pagination