import dev from './about.webp';
const About = () => {
  return (
    <div class="container about">
      <div className="row">
        <div className="col-md-6">
          <img src={dev} alt="" />
        </div>
        <div className="col-md-6">
      <h1>About Me</h1>
      <div>
        Hey, I'm Abhinand! I'm a software developer working in Bangalore.
        Welcome to my spot on the web for projects I've created, tutorials I've
        written, musings, and anything else I want to show the world. Check out
        the projects page to see a highlight of the open-source projects I've
        made, and articles to see everything I've written. I've also written
        external publications for DigitalOcean, Envato Tuts+, etc. and done a
        few speaking engagements and podcasts, which you can find below. My site
        has no ads, no affiliate links, no tracking or analytics, no sponsored
        posts, and no paywall. My only motivation for this site is to share what
        I've learned with the world and document notes for myself, and hopefully
        connect with a few people. You can contact me by email at hello at
        taniarascia.com to say hi! I always appreciate meeting new people.
        <ul>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
};
export default About;
