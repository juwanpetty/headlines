import React from 'react';

import Sources from './components/Sources/Sources';
import Settings from './components/Settings/Settings';
import Navigation from './components/Navigation/Navigation';
import ReadingLists from './components/ReadingLists/ReadingLists';

import styles from './Sidebar.scss';

export default function Sidebar({
  togglePanel,
  sourcesPanel,
  isSidebarOpen,
  sources,
  sourceIsLoaded,
  sourceError,
  storedSources,
  handleDeleteSource,
  handleAddSource,
  readingList,
  articleLink,
  toggleArticleLink,
  handleUpdateReadingList,
  weatherUnit,
  toggleWeatherUnit,
  showWeather,
  toggleShowWeather,
  showArticles,
  toggleShowArticles,
  allowGeolocation,
  showClock,
  hourFormat,
  toggleHourFormat,
  toggleShowClock,
  toggleSidebar,
}) {
  const preventBubbling = (e) => {
    e.stopPropagation();
  };

  let showPanel;
  switch (sourcesPanel) {
    case 'sources':
      showPanel = styles.ShowSources;
      break;
    case 'bookmark':
      showPanel = styles.ShowReadingList;
      break;
    case 'settings':
      showPanel = styles.ShowSettings;
      break;
    default:
      showPanel = styles.ShowSources;
  }

  return (
    <div>
      <aside
        className={isSidebarOpen ? styles.Sidebar : styles.SidebarHidden}
        onClick={preventBubbling}
      >
        <form>
          <div className={styles.Header}>
            <h3 className={styles.Title}>Sources</h3>
            <p className={styles.Subtitle}>Choose what you see on the page.</p>
          </div>

          <Navigation sourcesPanel={sourcesPanel} togglePanel={togglePanel} />

          <div className={styles.Container}>
            <div className={styles.ContainerInner + ' ' + showPanel}>
              <div className={styles.Panel}>
                <div>
                  <Sources
                    sources={sources}
                    sourceIsLoaded={sourceIsLoaded}
                    sourceError={sourceError}
                    storedSources={storedSources}
                    handleDeleteSource={handleDeleteSource}
                    handleAddSource={handleAddSource}
                  />

                  <p className={styles.Attribution}>
                    Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
                  </p>
                </div>
              </div>

              <div className={styles.Panel}>
                <div>
                  <ReadingLists
                    readingList={readingList}
                    articleLink={articleLink}
                    handleUpdateReadingList={handleUpdateReadingList}
                  />
                </div>
              </div>

              <div className={styles.Panel}>
                <Settings
                  sourcesPanel={sourcesPanel}
                  weatherUnit={weatherUnit}
                  toggleWeatherUnit={toggleWeatherUnit}
                  articleLink={articleLink}
                  toggleArticleLink={toggleArticleLink}
                  showWeather={showWeather}
                  toggleShowWeather={toggleShowWeather}
                  showArticles={showArticles}
                  toggleShowArticles={toggleShowArticles}
                  allowGeolocation={allowGeolocation}
                  showClock={showClock}
                  hourFormat={hourFormat}
                  toggleShowClock={toggleShowClock}
                  toggleHourFormat={toggleHourFormat}
                />
              </div>
            </div>
          </div>
        </form>
      </aside>

      <div
        className={isSidebarOpen ? styles.Footer : styles.FooterHidden}
        onClick={preventBubbling}
      >
        <button
          type="button"
          className={styles.ActionButton}
          value="Done"
          onClick={toggleSidebar}
        >
          Done
        </button>
      </div>
    </div>
  );
}
