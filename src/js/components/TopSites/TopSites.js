import React, {useState, useEffect} from 'react';

const ellipsize = require('ellipsize');

import styles from './TopSites.scss';

export default function TopSites() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    try {
      chrome.topSites.get((data) => {
        setSites(data.slice(0, 3));
      });
    } catch (error) {}
  }, []);

  const handleDomainFavicon = (url) => {
    return url.endsWith('/') ? `${url}favicon.ico` : `${url}/favicon.ico`;
  };

  return (
    <ul className={styles.Sites}>
      {sites &&
        sites.map((site) => {
          return (
            <li key={site.title}>
              <a href={site.url} className={styles.Site}>
                <div className={styles.Favicon}>
                  <img src={handleDomainFavicon(site.url)} alt={site.url} />
                </div>

                <p className={styles.Title}>{ellipsize(site.title, 25)}</p>
              </a>
            </li>
          );
        })}
    </ul>
  );
}
