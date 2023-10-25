import "../css/ProfileCard.scss";

function ProfileCard() {
  return (
    <>
      <div className="border radius-regular card pad-regular">
        <div className="card-header">
          <h2 className="card-logo fs-xl fw-5">Bhuneshvar</h2>
          <p className="card-tagline fs-s faded">
            Web Developer <br /> & Machine Learner
          </p>
        </div>
        <div className="card-content">
          <img src="/imankitkalirawana.jpg" alt="" className="card-img" />
          <div className="card-contact">
            <p className="normal-text">imankitkalirawana@gmail.com</p>
            <p className="normal-text">Rohtak, Haryana</p>
          </div>
          <div className="card-copyright">
            <p className="normal-text faded fs-s fw-4">
              © 2023 Bhuneshvar, All Rights Reserved
            </p>
          </div>
          <div className="card-urls">
            <a href="#" className="btn btn-circle faded">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="btn btn-circle faded">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="btn btn-circle faded">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-circle faded">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
        <div className="card-btn">
          <button className="btn btn-primary">Hire Me!</button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
