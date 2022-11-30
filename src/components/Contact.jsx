const Contact = () => {
  return (
    <div className="container contact">
      <h1 className="text-center">Contact</h1>

      <div className="container m-3">
        <div className="row">
          <div className="col-md-4">
            <label className="form-label h3">Fullname</label>
          </div>
          <div className="col-md-4 ">
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label className="form-label h3">Email</label>
          </div>
          <div className="col-md-4 ">
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your E-Mail"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label className="form-label h3">Message</label>
          </div>
          <div className="col-md-4 ">
            <textarea
              type={"text"}
              className="form-control"
              placeholder="Message . . ."
              rows={5}
              cols={40}
            />
          </div>
          <div className="offset-4 col-md-3 mt-3 p-2 h2">
          <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
