import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {
    return (
      <div>
        <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
          <h1 className="text-2xl font-bold text-accent">Contact Us</h1>
          <form>
            <div className="my-4">
              <label>Name</label>
              <div className="my-2 w-full rounded-2xl shadow-xl">
              <input type="text" className="w-full p-2 bg-primary border border-input rounded-2xl" />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div className="my-2 w-full rounded-2xl shadow-xl">
              <input type='email' className="w-full p-2 bg-primary border border-input rounded-2xl" />
              </div>
            </div>
            <div>
              <label>Message</label>
              <div className="w-full my-2 rounded-2xl shadow-xl">
              <textarea name="Message" placeholder="Oya yarn wetin de your mind" rows="10"  className="w-full p-2 bg-primary border border-input rounded-2xl "></textarea>
              </div>
            </div>
            <input type="submit" className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl" />
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact