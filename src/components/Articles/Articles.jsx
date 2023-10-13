import React from "react";
import { Link } from "react-router-dom";

export default function Articles({ articles }) {
  return (
    <div>
      {articles.map((article) => {
        const path = `${article.id}`;
        return <Link to={path}>{article.title} </Link>;
      })}
    </div>
  );
}
