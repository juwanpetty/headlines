import React, {useState, useEffect} from 'react';
const ellipsize = require('ellipsize');
import styles from './TopSite.scss';

export default function TopSite({site}) {
  const [favicon, setFavicon] = useState(null);
  const [faviconError, setFaviconError] = useState(null);
  const [faviconIsLoaded, setFaviconIsLoaded] = useState(false);

  useEffect(() => {
    handleDomainFavicon(site.url);
  }, []);

  const handleDomainFavicon = (url) => {
    let newUrl = url
      .replace('http://', '')
      .replace('https://', '')
      .split(/[/?#]/)[0];

    fetch(`http://favicongrabber.com/api/grab/${newUrl}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.icons.length > 1) {
            setFavicon(result.icons[1].src);
          } else {
            setFavicon(result.icons[0].src);
          }

          setFaviconIsLoaded(true);
        },
        (error) => {
          setFaviconError(error.error);
          setFaviconIsLoaded(false);
        },
      );
  };

  const handleImageError = (e) => {
    return e.target.classList.add(styles.NoImage);
  };

  return (
    <li>
      <a href={site.url} className={styles.Site}>
        <div className={styles.Favicon}>
          {faviconIsLoaded && (
            <img src={favicon} alt={site.url} onError={handleImageError} />
          )}
        </div>

        <p className={styles.Title}>{ellipsize(site.title, 25)}</p>
      </a>
    </li>
  );
}
