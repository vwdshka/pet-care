import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section__padding">
        <div className="sb_footer-links">
          <div className="sb__footer-links-div">
            <h4>Useful Information</h4>
            <hr></hr>
            <a href="#">
              <p className="text-placeholder-footer">Terms & Conditions</p>
            </a>
            <a href="#">
              <p className="text-placeholder-footer">Address</p>
            </a>
            <a href="#">
              <p className="text-placeholder-footer">Plans</p>
            </a>
            <a href="#">
              <p className="text-placeholder-footer">Help</p>
            </a>
          </div>
        </div>
        <div className="sb__footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Pet-Care. All rights reserved.</p>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Footer;
