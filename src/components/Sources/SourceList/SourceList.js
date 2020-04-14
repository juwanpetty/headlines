import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Bring in the asynchronous fetchPosts action
import { fetchSources, sourcesSelector } from "../../../store/slices/sources";
import { Source } from "../Source/Source";

import { startCase } from "../../../helpers/";
import { Container, Header } from "./SourceList.module";

export const SourceList = () => {
  const { sources, loading, hasErrors } = useSelector(sourcesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSources());
  }, [dispatch]);

  const categories = [
    "business",
    "entertainment",
    "technology",
    "general",
    "science",
    "sports",
    "health",
  ];

  // Show loading, error, or success state
  const renderSources = () => {
    let filteredSources;

    if (loading) return <p>Loading sources...</p>;
    if (hasErrors) return <p>Unable to display sources.</p>;

    return (
      sources &&
      categories.map((category, index) => {
        // only use the sources with matching categories
        filteredSources = sources.filter((sources) => {
          return sources.category === category;
        });

        return (
          <div key={index}>
            <Header>{startCase(category)}</Header>
            {filteredSources.map((source) => {
              return (
                <Source key={source.id} id={source.id} name={source.name} />
              );
            })}
          </div>
        );
      })
    );
  };

  return <Container>{renderSources()}</Container>;
};
