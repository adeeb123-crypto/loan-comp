import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import "../styles/globals.css"
import "../styles/Home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [loadLang, setLoadLang] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    setTimeout(() => {
      setLoadLang(true);
      googleTranslateElementInit();
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const googleTranslateElementInit = () => {
    if (window.google) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "",
          autoDisplay: false,
          includedLanguages: "en,es,fr,ko",
        },
        "google_translate_element"
      );

      setTimeout(() => {
        replaceLangText();
      }, 1000);
    }
  };

  const replaceLangText = () => {
    let pageOption = document.getElementsByTagName("option");
    // console.log(pageOption.length)
    for (let i = 0; i < pageOption.length; i++) {
      if (pageOption[i].attributes.length == 1) {
        if (pageOption[i].attributes[0].value == "es") {
          pageOption[i].innerText = "Spanish";
        } else if (pageOption[i].attributes[0].value == "en") {
          pageOption[i].innerText = "English";
        } else if (pageOption[i].attributes[0].value == "fr") {
          pageOption[i].innerText = "French";
        } else if (pageOption[i].attributes[0].value == "ko") {
          pageOption[i].innerText = "Korean";
        } else if (pageOption[i].attributes[0].value == "") {
          pageOption[i].innerText = "Select Language";
        }
      }
    }

    let langSelector = document.getElementsByClassName("goog-te-combo");
    if (langSelector) {
      langSelector[0]?.addEventListener("change", closeLangSelector, false);
    }
  };

  const closeLangSelector = () => {
    setShowLanguage(false);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="topNav fixed-top"
    >
      <Container fluid>
        <Navbar.Brand href="https://www.lyotrade.com/en_US/" target="_blank">
          <Image
            src="/lyotrade.png"
            alt="LYOTRADE logo"
            width={90}
            height={20}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.lyotrade.com/en_US/market">
              Market
            </Nav.Link>
            <NavDropdown title="Trade" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/newProTrade/LYO_USDT">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220218210812431.svg"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Classic</div>
                    <div className="subtitle">
                      Simple and easy-to-use interface
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/newTrade/LYO_USDT">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220218210803627.svg"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Advanced</div>
                    <div className="subtitle">
                      Full Access to all trading tools
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Leverage" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/v5/trade/BTC_USDT?type=isolated">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220304172128188.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Margin</div>
                    <div className="subtitle">
                      Increase your profit with leverage
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/v5/proTrade/BTC_USDT?type=isolated">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220304172501650.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Pro Margin</div>
                    <div className="subtitle">
                      Increase your profit with leverage PRO
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/newTrade/BTC3L_USDT?type=spot">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20211026143500980.svg"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title notranslate">ETF</div>
                    <div className="subtitle">
                      Enjoy increased leverage without risk of liquidation
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://futures.lyotrade.com/en_US">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/463d76fb99df1f245b6a006392ffec66.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Futures</div>
                    <div className="subtitle">Futures Trading</div>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://buy-sell.lyotrade.com/">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220505224440325.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Buy and Sell</div>
                    <div className="subtitle">
                      Buy and sell Crypto with Card & Wire Transfers
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/freeStaking">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20211026143553323.svg"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Staking</div>
                    <div className="subtitle">
                      Rich products and stable income
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://swap.lyotrade.com/">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220505224919686.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">DEX Swap</div>
                    <div className="subtitle">SWAP your Crypto Assets</div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://otc.lyotrade.com/en_US/">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220505225148743.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Buy and Sell Crypto P2P</div>
                    <div className="subtitle">C2C Transaction</div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://crypto-loan.lyotrade.com/">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/20220523223612191.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">Crypto Loan</div>
                    <div className="subtitle">
                      Borrow from your Crypto Assets
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/newAssets/brlPay">
                <div className="submenu-data">
                  <img
                    src="https://saas-oss.oss-cn-hongkong.aliyuncs.com/upload/1d2582841fc4734c615055b11fce83e4.png"
                    alt=""
                    className="logo"
                  />
                  <div>
                    <div className="title">
                      Buy <span className="notranslate"> USTD </span> with PIX
                    </div>
                    <div className="subtitle">
                      Use Your Brazilian Pix application to buy USDT
                    </div>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://docs.lyotrade.com/help-center/customer-support">
              FAQs
            </Nav.Link>
            <Nav.Link href="https://www.lyotrade.com/en_US/newProTrade/LYO_USDT">
              Buy LYO Credit
            </Nav.Link>
            <Nav.Link href="https://www.lyotrade.com/en_US/promotion">
              Referrals
            </Nav.Link>
            <Nav.Link href="https://www.lyotrade.com/en_US/taskCenter">
              10trade Challenge
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.lyotrade.com/en_US/login">
              Log in{" "}
            </Nav.Link>
            <Nav.Link
              href="https://www.lyotrade.com/en_US/register"
              className="btn-link"
            >
              Sign Up
            </Nav.Link>
            <NavDropdown
              title="Download"
              id="navbarScrollingDropdown"
              className="qrLink"
            >
              <NavDropdown.Item href="https://www.lyotrade.com/en_US/newProTrade/LYO_USDT">
                <div className="qrcode-wrap">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAADDklEQVR42u3dS3LjMBBEQd3/0tIV
               FIz+FMB8a1ukgdQCTU7M5ys19LEEAktgCSwJLIElsCSwBJbAksASWAJLAktgCSwJLIElsCSwBJbA
               ksASWALryWetVnXPjWv9x7VOXEOwwAILLLDAAgsssMACC6zMTcr/wly8hmCBBRZYYIEFFlhggQUW
               WIXH6b5F6btW328dgRgssMACCyywwAILLLDAAuvQRZn8K8ACCyywwAILLLDAAgsssMCaXJS+IQVY
               YIEFFlhggQUWWGCBBRZYrTdasgFVaPo+J20NwQILLLDAAgsssMACCyywug/hVfXh2/2Z3TUECyyw
              wAILLLDAAgsssMC6u/UNuHZhwQILLLDAAgsssMACC6z3wdp9GbfvfiZHCVV/BVhggQUWWGCBBRZY
              YIEFViasyQ3oGyXkPzhfBwoWWGCBBRZYYIEFFlhgvRBW2tF9d0ixe8/rQwqwwAILLLDAAgsssMAC
              C6zCIcXuCCBt1DJ5z2CBBRZYYIEFFlhggQUWWN1bm7+4+Rx31xAssMACCyywwAILLLDAAmv+EN53
              nE57oDv5IB8ssMACCyywwAILLLDAAqubUdohvO/onv8iMlhggQUWWGCBBRZYYIEFVuY/WE27+uTn
              pA07wAILLLDAAgsssMACCyywMhmlHeb7XrnefTEaLLDAAgsssMACCyywwALr3CZZT97PEQMIsMAC
              CyywwAILLLDAAuuFsNJe4a3apMlXgScHIlfNscACCyywwAILLLDAAgusSFi7o4T8R85pX2CwwAIL
              LLDAAgsssMACC6z5ze7b2qpNShusBA4XwAILLLDAAgsssMACCyywAmFNDg7SrrUeWGCBBRZYYIEF
              FlhggQXWNeOGZ9fqu8PJR+lggQUWWGCBBRZYYIEFFli1S5B/rSpGu1+PqjsECyywwAILLLDAAgss
              sMDqPrpPvp6bD3QSMVhggQUWWGCBBRZYYIEF1t3/5YkWA0tgCSyBJYElsASWBJbAElgSWAJLYElg
              CSyBJYElsASWBJbAElgSWAJL7+kHegzighP8ID0AAAAASUVORK5CYII="
                    alt=""
                  />
                  <p className="download-options-codeText">
                    Scan to download APP
                  </p>
                  <div className="download-options-buttons">
                    <a
                      className="download-btn v5-1-bg"
                      href="https://www.lyotrade.com/en_US/appDownload"
                    >
                      More Download Options
                      <span className="hover-layout"></span>
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <div
              className="position-relative"
              onMouseOver={(e) => replaceLangText()}
              onMouseLeave={(e) => replaceLangText()}
              onMouseEnter={(e) => replaceLangText()}
            >
              <Nav.Link>
                <span
                  onClick={(e) => setShowLanguage(showLanguage ? false : true)}
                >
                  English | USD{" "}
                </span>

                <div
                  className={`langDiv bg-white ${!showLanguage && "d-none"}`}
                >
                  <div
                    id="google_translate_element"
                    onClick={(e) => replaceLangText()}
                  >
                    {!loadLang && (
                      <div className="text-center text-dark">Loading...</div>
                    )}
                  </div>
                </div>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
