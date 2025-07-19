import ProfileMenu from '../ProfileMenu/ProfileMenu';

export default function Header({ title = "Default Title" }) {

    return (
        <section>
    <header>
      <div className="container-fluid bg-primary text-white text-left">
        <div className="row align-items-center" style={{border: 'thick solid #deddca'}}>
          <div className="col-2">
            <img
              alt="CMS Experiment logo"
              src="./cms_logo.png"
              className="img-fluid img-xs"
            />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h2 className="alumni-sans-sc-h1">{title}</h2>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
        </section>
    );
}