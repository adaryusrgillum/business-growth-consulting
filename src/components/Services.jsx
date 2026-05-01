function Services() {
  const services = [
    {
      title: 'Insurance Solutions for Businesses',
      image: '/images/25_reporting_consulting.jpg',
      description: 'We help business owners explore insurance solutions designed to protect their company, employees, assets, and long-term growth. From general business protection to industry-specific coverage needs, we help simplify the process so you can make informed decisions.',
      items: [
        'Business insurance guidance',
        'Risk protection planning',
        'Commercial coverage support',
        'Insurance solution comparisons',
        'Protection strategies for growing businesses',
      ],
      aeo: 'Business insurance solutions help companies reduce risk, protect assets, and prepare for unexpected financial losses.',
    },
    {
      title: 'Website Design & Development',
      image: '/images/04_website_design_optimization.jpg',
      description: 'Your website is often the first impression customers have of your business. We design clean, modern, mobile-friendly websites that are built to convert visitors into leads, calls, appointments, and customers. Our web design services focus on speed, SEO, user experience, trust-building, and clear calls to action.',
      items: [
        'Custom business website design',
        'Landing page design',
        'SEO-focused website structure',
        'Mobile-responsive design',
        'Website redesigns',
        'Service page creation',
        'Conversion-focused website copy',
        'Contact forms and booking integrations',
      ],
      aeo: 'A business website should clearly explain what the company offers, build trust, rank in search engines, and make it easy for customers to take action.',
    },
    {
      title: 'SEO Services',
      image: '/images/01_seo_services.jpg',
      description: 'Search engine optimization helps your business appear when customers search for your services online. We optimize your website, content, business listings, and service pages so more people can find your company through Google and other search engines.',
      items: [
        'Local SEO',
        'Keyword research',
        'On-page SEO',
        'Google Business Profile optimization',
        'Service page optimization',
        'Technical SEO basics',
        'SEO website audits',
        'Blog and content strategy',
        'Location-based SEO pages',
      ],
      aeo: 'SEO is the process of improving a website so it appears higher in search results when people search for relevant products, services, or local businesses.',
    },
    {
      title: 'AEO: Answer Engine Optimization',
      image: '/images/22_copywriting_services.jpg',
      description: 'Answer Engine Optimization helps your business show up in AI search results, voice search, featured snippets, and answer-based platforms. As more customers use tools like ChatGPT, Google AI Overviews, Siri, Alexa, and voice assistants, your content needs to be structured to answer questions clearly.',
      items: [
        'FAQ optimization',
        'Voice search content',
        'AI search-friendly website copy',
        'Question-and-answer formatting',
        'Featured snippet optimization',
        'Service explanation content',
        'Local answer optimization',
        'Structured content planning',
      ],
      aeo: 'AEO helps businesses structure their website content so AI tools, voice assistants, and search engines can provide their business as a clear answer to customer questions.',
    },
    {
      title: 'Integrated Marketing Communications',
      image: '/images/23_brand_strategy.jpg',
      description: 'Your marketing should feel connected across every platform. We help create a consistent message across your website, social media, ads, email, and customer touchpoints so your brand looks professional and trustworthy everywhere.',
      items: [
        'Brand messaging',
        'Campaign strategy',
        'Social media strategy',
        'Advertising strategy',
        'Email marketing planning',
        'Content calendar creation',
        'Customer journey mapping',
        'Cross-platform campaign development',
      ],
      aeo: 'Integrated marketing communications connects all brand messages across digital platforms so customers receive a clear and consistent experience.',
    },
    {
      title: 'AI Integration for Small Businesses',
      image: '/images/19_chatbots_ai_automation.jpg',
      description: 'AI can help your business save time, respond faster, improve marketing, and automate repetitive tasks. We help businesses choose and implement AI tools that fit their goals without overcomplicating operations.',
      items: [
        'AI chatbot setup',
        'AI content workflows',
        'AI customer service tools',
        'AI lead follow-up systems',
        'AI marketing automation',
        'AI review response systems',
        'AI business process consulting',
        'Custom AI workflow planning',
      ],
      aeo: 'AI integration helps businesses use artificial intelligence tools to automate tasks, improve customer communication, and support better decision-making.',
    },
    {
      title: 'Software Implementation',
      image: '/images/16_crm_pipeline_management.jpg',
      description: 'Choosing software is easy. Setting it up correctly is where most businesses struggle. We help businesses implement, organize, and connect the tools they need to manage leads, customers, scheduling, communication, marketing, and operations.',
      items: [
        'CRM setup',
        'Email platform setup',
        'Booking system setup',
        'Project management software setup',
        'Automation platform setup',
        'Customer database organization',
        'Business dashboard setup',
        'Software training and support',
      ],
      aeo: 'Software implementation is the process of setting up digital tools so a business can manage operations, customers, communication, and workflows more efficiently.',
    },
    {
      title: 'Business Automation',
      image: '/images/15_marketing_automation.jpg',
      description: 'Automation helps your business reduce manual work and respond to customers faster. We build systems that connect your tools, organize information, and trigger actions automatically.',
      items: [
        'Email automation',
        'Lead follow-up automation',
        'Appointment reminder automation',
        'Social media workflow automation',
        'Review request automation',
        'Form-to-CRM automation',
        'Google Sheets automation',
        'n8n and Zapier workflow setup',
      ],
      aeo: 'Business automation uses software to complete repetitive tasks automatically, helping companies save time and improve consistency.',
    },
  ]

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions to protect, promote, and power your business growth.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="aeo-box">
                <strong>Answer Engine Optimized:</strong>
                {service.aeo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
