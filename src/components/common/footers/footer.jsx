import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bootom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bootom-content display-flex justify-content-between">
                <h5>Mehr kutubxonasi</h5>
                <ul className="social-media">
                  <li>
                    <a href="https://t.me/mehr_kutubxonasi">
                      <img
                        src="/assets/images/shop-one/telegramm.png"
                        alt="telegram"
                      />
                      <span>@mehr_kutubxonasi</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:998998843566">
                      <img
                        src="/assets/images/shop-one/telephone.png"
                        alt="phone"
                      />
                      <span>(99) 884-35-66</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
