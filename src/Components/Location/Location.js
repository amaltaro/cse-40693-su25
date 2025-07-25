import Header from '../Header/Header';
import './Location.css';

export default function Location() {
    return (
        <section>
            <Header title="Location" />
            <div className="container-fluid">
                <div className="location-container">
                    <div className="location-description">
                        <p>
                            <i className="bi bi-geo-alt-fill"></i>
                            The map below shows where our office is.
                        </p>
                    </div>
                    
                    <div className="location-map-container">
                        <iframe
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11772.085444718778!2d6.037722511362732!3d46.23519092795632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c62fcec737b11%3A0x81bef3ae7a885e31!2sCERN!5e1!3m2!1sen!2sus!4v1749148036868!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}