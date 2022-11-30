import frontend from "./front.png";
const Services = () => {
  return (
    <div className="container services ">
      <h1>Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Frontend</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Backend</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-design bg-dark">
            <img src={frontend} alt="Frontend design" />
            <div className="container ">
              <h2>Full Stack</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
