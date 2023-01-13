import React from 'react'
import ContentLoader from 'react-content-loader'
export const BooksLoader =({borderRadius = 20,...props})  => (
    <ContentLoader viewBox="0 26 400 475" height={430} width={300} {...props}>
    <rect x="30" y="50" rx="4" ry="4" width="350" height="20" />
    <rect x="110" y="90" rx="4" ry="4" width="200" height="15" />
    <rect x="0" y="130" rx={borderRadius} ry={borderRadius} width="650" height="400" />
  </ContentLoader>
)






