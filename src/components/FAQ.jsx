import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does Business Growth & Technology Consultants provide?',
      answer: 'Business Growth & Technology Consultants provides insurance solutions, web design, SEO, AEO, marketing strategy, AI integration, business automation, and software implementation for small businesses.',
    },
    {
      question: 'Why does my business need SEO and AEO?',
      answer: 'SEO helps your business appear in traditional search results, while AEO helps your business appear in AI-generated answers, voice search, featured snippets, and question-based searches.',
    },
    {
      question: 'Can AI help my small business?',
      answer: 'Yes. AI can help small businesses automate customer follow-up, create marketing content, respond to reviews, organize leads, and improve daily operations.',
    },
    {
      question: 'What is software implementation?',
      answer: 'Software implementation means selecting, setting up, connecting, and training your team to use business software correctly.',
    },
    {
      question: 'Do you work with local businesses?',
      answer: 'Yes. We help local and small businesses improve their online presence, marketing systems, customer communication, automation, and business technology.',
    },
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section section-light">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Get answers to common questions about our services and how we can help your business grow.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggle(index)}>
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
