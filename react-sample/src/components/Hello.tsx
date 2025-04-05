const Hello = () => {
  const onClick = () => {
    alert('hello')
  }

  const text = 'テキストてすと'

  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Hello