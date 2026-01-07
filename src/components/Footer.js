function Footer() {
  return (
    <div
      style={{
        marginTop: "40px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#f1f5f9",
        fontSize: "14px",
      }}
    >
      © {new Date().getFullYear()} Smart Service Request Management System
    </div>
  );
}

export default Footer;
