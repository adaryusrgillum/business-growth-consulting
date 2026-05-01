function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Business Growth & Technology Consultants. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
