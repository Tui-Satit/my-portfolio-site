import profile from "./profile-temp.jpg";
function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f7f7f7", color: "#222" }}>
      
      
    {/* HERO */}
<section
  style={{
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    textAlign: "center",
    padding: "100px 20px"
  }}
>
  <img
    src={profile}
    alt="Tui"
    style={{
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "25px",
      border: "5px solid rgba(255,255,255,0.8)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    }}
  />

  <h1 style={{ fontSize: "48px", marginBottom: "10px", fontWeight: "bold" }}>
    Hi, I am Tui 👋
  </h1>

  <h2 style={{ fontSize: "26px", marginBottom: "15px", opacity: "0.9" }}>
    Web Developer
  </h2>

  <p
    style={{
      fontSize: "18px",
      maxWidth: "600px",
      margin: "0 auto 20px",
      lineHeight: "1.6",
      opacity: "0.95"
    }}
  >
    I build modern websites that help your business get more customers and increase sales.
  </p>

  {/* 💰 ราคา */}
  <p style={{ fontSize: "16px", marginBottom: "30px", color: "#00e676" }}>
    💰 Starting from 3,000 THB
  </p>

  <a
    href="https://line.me/ti/p/~satitMe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        padding: "16px 32px",
        fontSize: "18px",
        backgroundColor: "#06C755",
        color: "white",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        transition: "0.3s"
      }}
    >
      💬 Chat on LINE
    </button>
  </a>
</section>
      {/* ABOUT */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.7" }}>
          I create clean and modern websites for small businesses. My goal is to help your
          business look professional online and make it easy for customers to contact you.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "white" }}>
        <h2>My Services</h2>
        <p>Starting from 3,000 THB</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px"
          }}
        >
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "25px",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Business Website</h3>
            <p>Modern website for shops, cafes, and small businesses.</p>
          </div>

          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "25px",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Landing Page</h3>
            <p>Simple one-page website to promote your service or product.</p>
          </div>

          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "25px",
              borderRadius: "12px",
              width: "250px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Portfolio Website</h3>
            <p>Website to show your profile, skills, and work professionally.</p>
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
  <h2>My Project</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "30px"
    }}
  >
    <div
      style={{
        width: "320px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <h3>Coffee Website</h3>
      <p>Website for coffee shop with menu and LINE contact button.</p>
      <a
        href="https://coffee-website-olive-seven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#06C755", fontWeight: "bold", textDecoration: "none" }}
      >
        View Live Project
      </a>
    </div>

    <div
      style={{
        width: "320px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      <h3>Restaurant Website</h3>
      <p>Website for Thai restaurant with menu and LINE order system.</p>
      <a
        href="https://restaurant-website-three-sooty.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#06C755", fontWeight: "bold", textDecoration: "none" }}
      >
        View Live Project
      </a>
    </div>

    <div
  style={{
    width: "320px",
    minHeight: "220px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  }}
>
  <h3>Bakery Website</h3>
  <p>Website for bakery shop with menu and LINE order button.</p>
  <a
    href="https://bakery-website-two-ruddy.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#06C755", fontWeight: "bold", textDecoration: "none" }}
  >
    View Live Project
  </a>
</div>
  </div>
</section>

      {/* CONTACT */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#1e1e1e",
          color: "white"
        }}
      >
        <h2>Contact Me</h2>
        <p>LINE: satitMe</p>

        <a
          href="https://line.me/ti/p/~satitMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#06C755",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Get Your Website Now
          </button>
        </a>
      </section>
    </div>
  );
}

export default App;