function Footer() {
  const today = new Date();
  return (
    <footer className="footer">
      <p>&copy; {today.getFullYear()} myRental. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
