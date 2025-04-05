const Hello = () => {
  const onClick = () => {
    alert('hello')
  }

  const text = 'テキストてすと'

  return(
    <div style='padding: 16px; background-color: grey;'>
      <label for="name">名前</label> 
        <input id="name" class="input-name" type="text">
    </div>
  )
}

export default Hello