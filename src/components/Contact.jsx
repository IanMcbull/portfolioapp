import simpson from './contact_img/icons8-bart-simpson-100.png';
const Contact = () => {
    return (
        <div id="contact_section" className="mt-5">
            <div id="contact_form" className="container">
   <div className="card bg-white p-4">
    <h1 className="text-center">Contact</h1>
     <form action="https://getform.io/f/144cab74-5f22-4112-a746-a42565e095e3" method="POST">
     <h2 id="header">Hi There!</h2>
     <div>
       <h4>I'm contacting you because</h4>
       <select id="options" className="w-100">
         <option value="i need a website" name="I need a website">I need a website</option>
         <option value="i need a web app" name="Am hiring">Am hiring</option>
       </select>
     </div>
     <div className="mt-3">
       <h4>Reply to me at</h4>
       <input type="email" placeholder="enter your email here" className="w-100" id="contact_text" name="email"/>
     </div>
     <div className="mt-3">
       <h4>I promise not to give your email address to any of the simpsons<span><img src={simpson} style={{width: '50px'}} alt='simpson_image'/></span></h4>
     </div>
     <div className="mt-3">
      <h4>Your message</h4>
      <textarea className="w-100" id="contact_message" name="message"></textarea>
    </div>
    <div>
      <button className="btn btn-danger p-3 btn-lg mt-3" id="sub" type="submit">
        Send Me Now!
      </button>
    </div>
  </form>
   </div>
  </div>
        </div>
    )
}

export default Contact;
