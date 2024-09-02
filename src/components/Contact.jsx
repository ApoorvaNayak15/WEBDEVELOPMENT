import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>
                Contact Us
            </h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type = "text" required placeholder='ABC' ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type = "email" required placeholder='ABC@xyz.com' ></input>
                </div>
                <div>
                    <label>Message</label>
                    <input type = "text" required placeholder='Tell Us About ur query....' ></input>
                </div>
                <button type="submit">send</button>
            </form>
        </main>

    </div>
  )
}

export default Contact