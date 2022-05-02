import React from 'react'

const ReactContact = () => {
 
 const [user, setUser] = React.useState({
   name: "",
   email: "",
   phone: "",
   college: "",
   branch: "",
   gyear: "",
   country:"",
    state:"",
    linkprofile:"",
    githubprofile:"",
   message: "",
 });
 let name,value;
 const getUserData = (e) => {
   name = e.target.name;
   value = e.target.value;
       setUser({ ...user, [name]: value });  
      console.log(user);   }
      const postData = async(e) => {
        e.preventDefault();
    const {name,email,phone,college,branch,gyear,country,state,linkprofile,githubprofile,message}=user;
    if(name && email && phone){
        const response = await fetch("https://firebas3-20e04-default-rtdb.firebaseio.com/codingminutesreactform.json", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
          name,
          email,
          phone,
         college,
         branch,
         gyear,
         country,
         state,
         linkprofile,
         githubprofile,
          message,
       }),
      }); 
      if(response)
      {
       setUser({   name: "",
       email: "",
       phone: "",
       college: "",
       branch: "",
       gyear: "",
       country:"",
        state:"",
        linkprofile:"",
        githubprofile:"",
       message: "",});
       alert("Data Submitted Successfully");
      }
    }
    else{
      alert("Please Fill All The Fields");
    }
      }
  return (
    <div>
        <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2 className='Downshift'>CONTACT US</h2>
      <div className="links">
        <div className="link">
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form method="POST">
        <div className="form-item">
          <input type="text" name="name" required autoComplete='off' value={user.name} onChange={getUserData}/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required autoComplete='off' value={user.email} onChange={getUserData}/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <input type="text" name="phone" required autoComplete='off' value={user.phone} onChange={getUserData}/>
          <label>Phone:</label>
        </div>
        <div className="form-item">
          <input type="text" name="college" required autoComplete='off' value={user.college} onChange={getUserData}/>
          <label>College Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="branch" required autoComplete='off' value={user.branch} onChange={getUserData}/>
          <label>Branch:</label>
        </div>
        <div className="form-item">
          <input type="text" name="gyear" required autoComplete='off' value={user.gyear} onChange={getUserData}/>
          <label>Graduation Year:</label>
        </div>
        <div className="form-item">
          <input type="text" name="country" required autoComplete='off' value={user.country} onChange={getUserData}/>
          <label>Country:</label>
        </div>
        <div className="form-item">
          <input type="text" name="state" required autoComplete='off' value={user.state} onChange={getUserData}/>
          <label>State:</label>
        </div>
        <div className="form-item">
          <input type="text" name="linkprofile" required autoComplete='off' value={user.linkprofile} onChange={getUserData}/>
          <label>LinkedIn Profile:</label>
        </div>
        <div className="form-item">
          <input type="text" name="githubprofile" required autoComplete='off' value={user.githubprofile} onChange={getUserData}/>
          <label>Github Profile:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required autoComplete='off' value={user.message} onChange={getUserData}></textarea>
          <label>Message:</label>
        </div>
        <button className="submit-btn" onClick={postData}>Send</button>  
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default ReactContact