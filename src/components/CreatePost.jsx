export function CreatePost() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input type='text' id='create-title' name='create-title' />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' id='create-author' name='create-author' />
      </div>
      <br />
      <textarea />
      <br />
      <br />
      <input type='submit' value='Create' />
    </form>
  )
}
