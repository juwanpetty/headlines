import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  articlesSelector,
} from "../../../store/slices/articles";
import { Article } from "../Article/Article";
import { Container } from "./ArticleList.module";
import { sourcesSelector } from "../../../store/slices/sources";

export const ArticleList = () => {
  const { articles, loading, hasErrors } = useSelector(articlesSelector);
  const { userSources } = useSelector(sourcesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(userSources));
  }, [dispatch, userSources]);

  const renderArticles = () => {
    if (loading) return <p>Loading articles...</p>;
    if (hasErrors) return <p>Unable to display articles.</p>;

    return (
      articles &&
      articles.map((article) => (
        <Article
          key={article.title}
          title={article.title}
          description={article.description}
          author={article.author}
          source={article.source.name}
          url={article.url}
          publishedAt={article.publishedAt}
          article={article}
        />
      ))
    );
  };

  return <Container>{renderArticles()}</Container>;
};
