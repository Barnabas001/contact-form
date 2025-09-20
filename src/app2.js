export default function App() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

function ContactForm() {
  return (
    <form className="container">
      <h3>Contact Us</h3>

      <InputName />

      <InputEmail />
      {/* <span id="email-error" className="error-message">Please enter a valid email address.</span> */}

      <QueryType />

      <span className="message-section">
        <label for="message">Message</label>
        <input type="text" className="input-message" />
      </span>

      <span className="consent-section">
        <input type="checkbox" />
        <p>I consent to being contacted by the team</p>
      </span>

      <button>Submit</button>
    </form>
  );
}

function InputName() {
  return (
    <div className="name-section">
      <span className="first-name">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" required />
        <p className="error">This is required</p>
      </span>
      <span>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" required />
        <p className="error">This is required</p>
      </span>
    </div>
  );
}

function InputEmail() {
  return (
    <div>
      <label for="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        autocomplete="email"
        className="emailArea"
      />
      <p>Please enter a valid email address</p>
    </div>
  );
}

function QueryType() {
  return (
    <>
      <label for="query">Query Type</label>
      <span className="query-type">
        <select
        // value={whoIsPaying}
        // onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <input type="button" />
          <option value="user">General Enquiry</option>
          {/* <option value="friend">{selectedFriend.name}</option> */}
        </select>

        <select
        // value={whoIsPaying}
        // onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <input type="button" />
          <option value="user">Support Request</option>
          {/* <option value="friend">{selectedFriend.name}</option> */}
        </select>

        {/* <input
          type="text"
          className="input-with-icon"
          placeholder="General Enquiry"
          disabled
        />
        <input
          type="text"
          className="input-with-icon"
          placeholder="Support Request"
          disabled
        /> */}
      </span>
    </>
  );
}
