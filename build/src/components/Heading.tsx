import "./Heading.css";

interface Props {
  imageSrc: string;
}

const Heading = ({ imageSrc }: Props) => {
  return (
    <header className="Heading">
      <h1>Tyler Carron</h1>
      <section className="heading-group">
        <img id="profile-pic" src={imageSrc} alt="linkedin-prof.jpeg" />

        <ul>
          <li>
            <a href="https://github.com/tmcarron">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tylercarron">LinkedIn</a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Heading;
