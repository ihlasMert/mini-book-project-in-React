import React from 'react'
import ReactDOM from 'react-dom'

//nested components React tools

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/41UH8ga3KqL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    alt=''
  />
)
const Title = () => <h1> Briana Beth Hetherington </h1>

const Author = () => <h4>İhlas Mert</h4>

ReactDOM.render(<BookList />, document.getElementById('root'))