import About from "./About";

export default function Header() {
  return (
    <>
      <header>
        <h1>Cafe Quest</h1>
        <p> where will your next quest take you?</p>
        <div className="about">
          <button className="hover-about">About</button>
          <div className="hide">
            <About />
          </div>
        </div>
      </header>
    </>
  );
}
