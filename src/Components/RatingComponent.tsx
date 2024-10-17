
const RatingComponent = () => {
  return (
    <div className="RatingDiv">
        <h1>How did we do?</h1>
        <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!
        </p>

        <div>
            <button className='logo'>1</button>
            <button className='logo'>2</button>
            <button className='logo'>3</button>
            <button className='logo'>4</button>
            <button className='logo'>5</button>
        </div>

        <button type="submit" >Submit</button>
    </div>
  )
}

export default RatingComponent