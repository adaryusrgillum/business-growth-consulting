function WhyWorkWithUs() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Business Protection',
      description: 'Insurance solutions and risk strategies to safeguard your company, employees, and assets.',
    },
    {
      icon: '🌐',
      title: 'Digital Presence',
      description: 'Professional websites and SEO that help customers find and trust your business online.',
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Smart tools and workflows that save time, reduce manual work, and improve responsiveness.',
    },
    {
      icon: '📊',
      title: 'Connected Systems',
      description: 'Integrated software and marketing that keeps all your business tools working together.',
    },
  ]

  return (
    <section id="why-us" className="section">
      <div className="container">
        <h2 className="section-title">Why Work With Us?</h2>
        <p className="section-subtitle">
          We combine business protection, digital marketing, AI tools, and software systems into one connected strategy. Instead of hiring separate providers for your website, marketing, automation, and technology setup, we help bring everything together.
        </p>
        <div className="why-grid">
          {benefits.map((benefit, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="why-mission">
          <p>Our goal is simple: Help your business get protected, get found, get organized, and grow with smarter systems.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs
