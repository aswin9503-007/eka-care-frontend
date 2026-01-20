import { useState } from "react";
import "../Homepage_CSS/Navbar.css"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSiderbar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="eka-navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.location.reload()}>
          <img
            src="data:image/jpeg;base64,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Vp6rxk79jwPjmoxbparMyRhZI0OacwRUFUG/8CObV9lOkP7bjrHwuPW5HXxK3NNxGM/hs5Px7irRSmuIIIJBGsEaiDvB2Kz3Tji0RUbJSZvvHRd84z7QearU0TmOLXtLXDMOBaRzBX4XvsqrtWJLJBql343skmpzjEdzxq+YVHfRT1mtscgrHIx491wd5LDUos+fCoPsya9Scm8osOZbpR1ZpBye4eRX114THOeQ85HH6r5ftMv5egybZNO1gq9zWje4hvmoW3Yvscf+8HndGNPxHR8VkjjU1Os7zrRfSHCoLtSb9PuMlyvXH8r6ts8YjHtOo93YOqPFVK02h8ji+R5c45lxqf8A4vJAFoVUV1L4FgjIXTd1gknkEcTC5x7gN7jsCsFxYKmmo6asUfEdM8mnq8z3FaJdd1xWdmhCwNG05lx3uOZK8mp4hCvlDm/QlIjcMYajsranpykdJ+73Wbh4nwE8iLCsslOW6TyywREVAEREAREQBERAEREAREQBERAEREBx3ldUM7aTRNfuJ1EcnDWOxVG8vR601NnmI92QaQ+Yax3FXpF96tTbV2GMGRWzCVsjzgLhvjIf4dbwURPZ3s67HN+Jpb5hboi90OKzXain6fcjBgtRvSq3N9jjOcbDzaD9F8bYYhlEwcmtH0X1/dl/D1/BGDEIoy40a0uO5oLvJSlkwza5OrZ3gb3j1f5qLYmgDIL6vnLisn2Ypev2JwZ7d3o9edc8waPZjGkfmdqHcVbrpw/Z7PriiGl7buk7vOXIUUoi8Nuqtt5SfIYCIi85IREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q=="
            alt="eka.care logo"
            className="logo-img"
          />
          <div className="logo-text">
            <span className="logo-main">eka</span>
            <span className="logo-dot">.</span>
            <span className="logo-sub">care</span>
          </div>
        </div>

        <div className="nav-links-desktop">
          <button className="ekathon-btn">Ekathon '26</button>
          <div className="nav-item">
            Products <span className="chevron">⏷</span>
          </div>
          <div className="nav-item">Integrations</div>
          <div className="nav-item">
            ABDM <span className="chevron">⏷</span>
          </div>
          <div className="nav-item">
            Covid 19 <span className="chevron">⏷</span>
          </div>
          <div className="nav-item">
            About <span className="chevron">⏷</span>
          </div>
        </div>

        <div className="mobile-toggle" onClick={toggleSiderbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="ekathon-btn-sidebar">Ekathon '26</button>
          <button className="close-btn" onClick={toggleSiderbar}>
            ⛌
          </button>
        </div>

        <div className="sidebar-links">
          <div className="side-item" onClick={toggleSiderbar}>
            Products <span className="chevron">⏷</span>
          </div>
          <div
            className="side-item integration-center"
            onClick={toggleSiderbar}
          >
            Integration
          </div>
          <div className="side-item" onClick={toggleSiderbar}>
            ABDM <span className="chevron">⏷</span>
          </div>
          <div className="side-item" onClick={toggleSiderbar}>
            Covid 19 <span className="chevron">⏷</span>
          </div>
          <div className="side-item" onClick={toggleSiderbar}>
            About <span className="chevron">⏷</span>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSiderbar}></div>
      )}
    </nav>
  );
};

export default Navbar;
