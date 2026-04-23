import "./App.css";
import profile from "./profile-temp.jpg";
import { useEffect, useState } from "react";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBtn(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      {/* HERO */}
      <section className="hero">
        <img src={profile} alt="Tui" className="profile-img" />

        <p className="hero-tag">ฟรีแลนซ์ Web Developer</p>
        <h1>ผมช่วยสร้างเว็บไซต์สวย ๆ ให้ธุรกิจของคุณดูโปรขึ้น 🚀</h1>

        <p className="hero-subtext">
          ผมรับทำเว็บไซต์สำหรับร้านค้า คาเฟ่ ร้านอาหาร และธุรกิจขนาดเล็ก
          ให้ดูทันสมัย ใช้งานง่ายบนมือถือ และช่วยให้ลูกค้าติดต่อหรือสั่งงานได้สะดวก
        </p>

        <p className="price-text">เริ่มต้นเพียง 3,000 บาท</p>

        <div className="hero-buttons">
          <a
            href="https://line.me/ti/p/~satitMe"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn"
          >
            💬 ทัก LINE สอบถาม
          </a>

         <a href="#projects" className="btn-view-work">
  🚀 ดูผลงาน
</a>
        </div>
      </section>

      {/* ABOUT */}
     <section className="about-section">
  <div className="about-wrapper">
    <p className="about-kicker">• แนะนำตัว •</p>
    <h2>เกี่ยวกับผม</h2>
    <div className="about-divider"></div>

    <div className="about-card">
      <p>
        สวัสดีครับ ผมตุ่ย ผมทำเว็บไซต์ที่เน้นความเรียบง่าย สะอาดตา
        และรองรับมือถือ (Mobile-Friendly)
        เพื่อช่วยให้ธุรกิจของคุณดูน่าเชื่อถือ
        และเพิ่มโอกาสในการขายผ่านช่องทางออนไลน์
      </p>
    </div>
  </div>
</section>

      {/* SERVICES */}
   <section className="section services">
  <div className="services-hero">
    <p className="services-badge">• บริการของผม •</p>

    <h2 className="services-title">บริการของผม</h2>

    <div className="services-decor">
      <span></span>
      <i></i>
      <span></span>
    </div>

    <div className="services-intro-card">
      <div className="services-intro-row">
        <div className="intro-icon-circle">
          <span>🛡️</span>
        </div>
        <p>รับทำเว็บไซต์คุณภาพ ดูแลครบ จบในที่เดียว</p>
      </div>

      <div className="services-intro-divider"></div>

      <div className="services-intro-row">
        <div className="intro-icon-circle">
          <span>💻</span>
        </div>
        <p>ออกแบบสวย ใช้งานง่าย ตอบโจทย์ทุกธุรกิจ</p>
      </div>
    </div>
  </div>

  <div className="services-grid">
    <div className="service-card">
      <div className="service-card-main">
        <div className="service-icon-circle">
          <span className="service-icon">💻</span>
        </div>

        <div className="service-content">
          <h3>เว็บไซต์ธุรกิจ</h3>
          <div className="service-line"></div>
          <p>
            เว็บไซต์สำหรับร้านค้า คาเฟ่ ร้านอาหาร หรือธุรกิจบริการ
            เพื่อเพิ่มความน่าเชื่อถือและดึงดูดลูกค้าใหม่
          </p>
        </div>
      </div>

      <div className="service-footer">
        <span className="check-icon">✔</span>
        <span>เหมาะสำหรับธุรกิจที่ต้องการเติบโต</span>
      </div>
    </div>

    <div className="service-card">
      <div className="service-card-main">
        <div className="service-icon-circle">
          <span className="service-icon">🪟</span>
        </div>

        <div className="service-content">
          <h3>Landing Page</h3>
          <div className="service-line"></div>
          <p>
            เว็บไซต์หน้าเดียว สำหรับโปรโมทสินค้า หรือบริการ
            เน้นปิดการขายได้ง่าย และตรงจุด
          </p>
        </div>
      </div>

      <div className="service-footer">
        <span className="check-icon">✔</span>
        <span>เหมาะสำหรับแคมเปญ โปรโมชัน หรือเปิดตัวสินค้า</span>
      </div>
    </div>

    <div className="service-card service-card-center">
      <div className="service-card-main">
        <div className="service-icon-circle">
          <span className="service-icon">👤</span>
        </div>

        <div className="service-content">
          <h3>Portfolio Website</h3>
          <div className="service-line"></div>
          <p>
            เว็บไซต์แนะนำตัวหรือผลงาน
            เพื่อสร้างภาพลักษณ์ที่ดูเป็นมืออาชีพและน่าเชื่อถือ
          </p>
        </div>
      </div>

      <div className="service-footer">
        <span className="check-icon">✔</span>
        <span>เหมาะสำหรับฟรีแลนซ์ นักออกแบบ หรือผู้ประกอบการ</span>
      </div>
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <h2>ผลงานของผม</h2>

        <div className="card-grid">

          <div className="project-card">
            <h3>เว็บสั่งกาแฟ ☕</h3>
            <p>
              ระบบสั่งกาแฟผ่านเว็บไซต์ มีตะกร้าสินค้า เลือกรับหน้าร้าน/เดลิเวอรี่
              และเชื่อมต่อ LINE สำหรับสั่งออเดอร์
            </p>
            <p className="project-tech">
              React • Firebase • LINE Integration • Vercel
            </p>

            <a
              href="https://coffee-website-ppo1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              ดูเว็บไซต์
            </a>
          </div>

          <div className="project-card">
            <h3>เว็บไซต์ร้านอาหาร 🍽️</h3>
            <p>
              เว็บไซต์แสดงเมนู พร้อมปุ่มสั่งผ่าน LINE ใช้งานง่ายบนมือถือ
            </p>
            <p className="project-tech">
              React • Responsive • LINE Button • Vercel
            </p>

            <a
              href="https://restaurant-website-three-sooty.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              ดูเว็บไซต์
            </a>
          </div>

          <div className="project-card">
            <h3>เว็บไซต์ร้านเบเกอรี่ 🥐</h3>
            <p>
              เว็บไซต์แสดงสินค้า + ปุ่มติดต่อ LINE เหมาะกับร้านขนาดเล็ก
            </p>
            <p className="project-tech">
              React • Mobile First • UI Design • Vercel
            </p>

            <a
              href="https://bakery-website-two-ruddy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              ดูเว็บไซต์
            </a>
          </div>
                    <div className="project-card highlight">
  <h3>เว็บไซต์ร้านป้ายโฆษณา 🪧</h3>

  <p>
    เว็บไซต์สำหรับร้านทำป้าย พร้อมปุ่มติดต่อผ่าน LINE และ Facebook
    เพื่อให้ลูกค้าสามารถสอบถามและสั่งงานได้ง่าย
  </p>

  <p className="project-tech">
    React • Responsive Design • LINE Integration • Vercel
  </p>

  <a
    href="https://sign-shop.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    ดูเว็บไซต์จริง
  </a>
</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <h2>ติดต่อผม</h2>
        <p>
          หากคุณต้องการเว็บไซต์สวย ๆ ใช้งานง่าย และช่วยเพิ่มลูกค้า
          สามารถติดต่อผมผ่าน LINE ได้เลยครับ
        </p>

        <p className="contact-line">LINE ID: satitMe</p>

        <a
          href="https://line.me/ti/p/~satitMe"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          💬 แชทผ่าน LINE
        </a>
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://line.me/ti/p/~satitMe"
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-btn ${showBtn ? "show" : ""}`}
      >
        💬 แชทเลย
      </a>
    </div>
  );
}

export default App;