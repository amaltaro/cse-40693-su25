import MainMenu from '../MainMenu/MainMenu';
export default function Home() {
    return (
        <section> 
        <div className="container rounded bg-primary text-white text-center">
        <div className="row align-items-center" style={{border: 'thick solid #deddca'}}>
          <div className="col">
            <h1 className="alumni-sans-sc-h1">CMS Workflow Monitoring</h1>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="text-center">
        <div className="col">
          <img
            alt="CMS Experiment logo"
            src="./cms_logo.png"
            className="img-s"
          />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="text-center">
        <MainMenu />
        </div>
        </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
      crossOrigin="anonymous"
    ></script>
      </section>
    );
}