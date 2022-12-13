import React from 'react'

export default function blogView({date, title, img, content, children}) {
  return (
    <div className='blog__view'>
        <div className="date">
            {date}
        </div>

        <div className="title">
            {title}
        </div>

        <img src={img} alt={title} />

        <div className="content">
            {content}
        </div>

        <div>
        {children}
        </div>

    </div>
  )
}
