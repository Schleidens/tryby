import React from 'react'
import { Link } from 'gatsby'

export default function blog({img, slug, title, date}) {
  return (
    <div className='blog__card'>
        <img src={img} alt={title} />
        <div className="content">
        <h3>
            <Link to={`/${slug}`}>
               {title}
            </Link>
        </h3>
        <span>
            {date}
        </span>
        </div>
    </div>
  )
}
