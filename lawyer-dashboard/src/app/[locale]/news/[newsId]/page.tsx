import React from "react";

import Link from "next/link";
import PageBanner from "@/components/Website/Common/PageBanner";

// import SocialShare from "@/components/share";

// Function to generate a random quote
function getRandomQuote(blogContent: string) {
  const sentences = blogContent.split(". "); // Split the text into sentences
  if (sentences.length < 2) {
    return "Not enough content for a quote.";
  }

  const randomIndex = Math.floor(Math.random() * (sentences.length - 1)); // Generate a random index
  const quote = `${sentences[randomIndex]}. ${sentences[randomIndex + 1]}`; // Combine two consecutive sentences
  return quote;
}

export default async function blogsDetails({
  params,
}: {
  params: { newsId: string };
}) {
  const newsId = params.newsId;
  const token = process.env.TOKEN;
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 120,
    },
  };
  const newsUrl = process.env.NEWSIDURL;
  const response = await fetch(`${newsUrl}/${newsId}`, requestOptions);
  const news = await response.json();

  return (
    <>
      <PageBanner
        pageTitle={news.newsTitle}
        homePageUrl="/"
        homePageText="Home"
        activePageText="News"
      />
      <div className="news_container">
        <div className="news__inner">
          <article className="news__main">
            <img
              src={news.newsImageUrl}
              alt="Web3 future"
              className="news__main-cover news__main-cover--desktop"
            />
            <img
              src={news.newsImageUrl}
              alt="Web3 future"
              className="news__main-cover news__main-cover--mobile"
            />
            <div className="news__main-content">
              <h1 className="news__main-title">{news.newsTitle}</h1>
              <div className="news__main-info">
                <p className="news__main-subtitle">{news.newsContent}</p>
                <Link href="/" className="read-more">
                  Read more
                </Link>
              </div>
            </div>
          </article>
          <aside className="news__side">
            <h2 className="news__side-title">New</h2>
            <ul className="news__side-list">
              <li className="news__side-item">
                <h3 className="news__side-item__title">
                  <Link href="/">Hydrogen VS Electric Cars</Link>
                </h3>
                <p className="news__side-item__description">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </li>
              <li className="news__side-item">
                <h3 className="news__side-item__title">
                  <Link href="/">The Downsides of AI Artistry</Link>
                </h3>
                <p className="news__side-item__description">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </li>
              <li className="news__side-item">
                <h3 className="news__side-item__title">
                  <Link href="/"> Is VC Funding Drying Up?</Link>
                </h3>
                <p className="news__side-item__description">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
