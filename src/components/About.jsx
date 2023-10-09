import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";
function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p>
            Labore ad velit nulla amet cillum. Pariatur dolor esse occaecat
            reprehenderit. Adipisicing esse labore dolor et id nisi.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
