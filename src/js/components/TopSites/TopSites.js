import React, {useState, useEffect} from 'react';
import TopSite from './components/TopSite';
import styles from './TopSites.scss';

export default function TopSites() {
  const [sites, setSites] = useState([]);
  const [favicon, setFavicon] = useState();

  useEffect(() => {
    try {
      chrome.topSites.get((data) => {
        setSites(data.slice(0, 3));
      });
    } catch (error) {}
  }, []);

  return (
    <ul className={styles.Sites}>
      {sites &&
        sites.map((site) => {
          return <TopSite key={site.title} site={site} />;
        })}
    </ul>
  );
}
