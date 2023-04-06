import './index.css'

const data = [
  {
    title: 'Life Insurance: Securing Your Future',
    topic: 'investing',
    length: '5 minutes read',
    text:
      'Death is an inevitability, and while it’s a difficult topic to discuss, planning for the future is essential. Life insurance is an investment in the future, which can provide financial security for your loved ones in the event of your untimely demise.',
  },
  {
    title:
      'Mastering Your Finances: Expert Tips and Strategies to Achieve Your Financial Goals',
    topic: 'investing',
    length: '5 minutes read',
    text:
      'Managing personal finances can be a daunting task, but with the right knowledge and strategies, anyone can create a roadmap to financial success. Whether you’re a seasoned investor or just starting to take control of your finances, this blog has something for everyone.',
    image:
      'https://res.cloudinary.com/dngrmtiw7/image/upload/v1680604002/PennyPot_Project/image2_yf5brs.jpg',
  },
  {
    title: 'Maximizing Your Savings with Post Office Monthly Income Scheme',
    topic: 'investing',
    length: '5 minutes read',
    text:
      'If you’re looking for a safe and reliable investment option to generate a steady stream of monthly income, the Post Office Monthly Income Scheme (POMIS) is worth considering. Backed by the Government of India, this scheme offers attractive interest rates and guaranteed returns, making it a popular choice among conservative investors.',
  },
]

const renderArticle = item => (
  <div className="each-article">
    <h1 className="article-title">{item.title}</h1>
    <p className="article-topic-and-length">
      {item.topic} | {item.length}
    </p>
    {item.image !== undefined && (
      <img className="article-image" alt="article-animation" src={item.image} />
    )}
    <p className="article-text">{item.text}</p>
    <button className="article-button" type="button">
      Read Now
    </button>
  </div>
)
const LatestInsights = () => (
  <div className="articles-container">
    <h3 className="heading">Latest Insights</h3>
    {data.map(eachItem => renderArticle(eachItem))}
  </div>
)

export default LatestInsights
