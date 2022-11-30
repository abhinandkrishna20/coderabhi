import dev from './dev.webp';
const Home = () => {
  return (
    <div className="container home">
      <div className="row">
      <div className="col-md-6 ">
        <h3>Hey there,</h3>
        <h1>I'm Abhinand Krishna</h1>
        <h4>Welcom to my Digital Garden</h4>
        <h5>
          I'm a Full Stack Developer who create web apps as per customer
          requirements. And open source contributer to build well perform
          softwares.
          <br />
          <br />
          <br />
          check out my my projects.
          <ul>
            <li>github</li>
            <li>twitter</li>
          </ul>
        </h5>
      </div>
      
        <div className="col-md-6">
          <div className="image">
          <img src={dev} alt="Girl in a jacket" width="auto" height="auto" /> 
          </div>
        </div>
        </div>
    </div>
  );
};
export default Home;
