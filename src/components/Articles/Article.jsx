import React from "react";
import { useParams } from "react-router-dom";

export default function Article({ articles }) {
  const { id } = useParams();
  const article = articles.find((element) => element.id == id);
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
