import React from 'react'

const Article = ({id, title, desc, img}) => {
  return (
    <article className="new-articles">
        <img src={img} alt={title} />
        <div className="content">
          <h2>{id}</h2>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </article>
  )
}

export default Article