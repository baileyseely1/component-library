import "./App.css";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <>
      <Testimonial
        src="lady.png"
        name="May Andersons"
        title="Workstation CTO"
        logo="Logo.png"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ea natus
        omnis incidunt dolorem, sapiente explicabo quod molestias ex quibusdam
        aspernatur inventore ipsam sint saepe doloremque beatae totam numquam
        consequatur.
      </Testimonial>
    </>
  );
}

export default App;
