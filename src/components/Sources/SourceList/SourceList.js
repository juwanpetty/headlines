import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSources,
  sourcesSelector,
  updateSidebarSources,
} from "../../../store/slices/sources";
import { Source } from "../Source/Source";
import { startCase } from "../../../helpers/";
import { Container, Header } from "./SourceList.module";

export const SourceList = () => {
  const dispatch = useDispatch();
  const {
    sources,
    userSources,
    sidebarSources,
    loading,
    hasErrors,
  } = useSelector(sourcesSelector);
  const [options, setOptions] = useState(userSources);

  // watches option, and updates sidebarSources
  useEffect(() => {
    dispatch(updateSidebarSources(options));
  }, [options, dispatch]);

  useEffect(() => {
    setOptions(userSources);
  }, [userSources]);

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

  const formUpdate = (e) => {
    if (e.target.checked && !options.includes(e.target.id)) {
      setOptions([...options, e.target.id]);
    } else {
      if (!(sidebarSources.length - 1 === 0)) {
        setOptions(options.filter((option) => option !== e.target.id));
      }
    }
  };

  const renderSources = () => {
    if (loading) return <p>Loading sources...</p>;
    if (hasErrors) return <p>Unable to display sources.</p>;

    return (
      sources &&
      categories.map((category, index) => {
        // only use the sources with matching categories
        const filteredSources = sources.filter((sources) => {
          return sources.category === category;
        });

        return (
          <div key={index}>
            <Header>{startCase(category)}</Header>

            {filteredSources.map((source) => {
              const isChecked = userSources.includes(source.id);

              return (
                <Source
                  key={source.id}
                  id={source.id}
                  name={source.name}
                  checked={isChecked}
                />
              );
            })}
          </div>
        );
      })
    );
  };

  return (
    <Container onChange={(e) => formUpdate(e)}>{renderSources()}</Container>
  );
};
