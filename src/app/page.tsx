export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        NEXT<span style={{ fontSize: "30px" }}>.JS</span>
      </h1>

      <p>Click the Facebook logo below 👇</p>

      {/* Facebook Logo */}
      <a
        href="https://www.facebook.com/Noman4952/"
        target="_blank"
        rel="noopener noreferrer"
      >
<img
  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
  alt="Facebook"
  width={80}
  height={80}
  style={{
    cursor: "pointer",
    transition: "0.3s",
    borderRadius: "50%",
  }}
/>
