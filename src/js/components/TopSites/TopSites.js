import React, {Component} from 'react'

const ellipsize = require('ellipsize');
const favicon = require('favicon');

import styles from './TopSites.scss';

export default class TopSites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: [],
    }
  }
  
  componentDidMount() {
    try {
      chrome.topSites.get(data => {
        this.setState({
          sites: data.slice(0, 6)
        });
      });
    } catch (error) {
      
    }
  }

  handleDomainFavicon(url) {
      // favicon(url, function(err, faviconUrl) {
      //   console.log(faviconUrl);
      //   console.log(err)
      // });

      return `${url}/favicon.ico`
  }

  render() {
    const {sites} = this.state;

    return (
      <ul className={styles.Sites}>
        {sites && sites.map(site => {
          return (
            <li key={site.title}>
              <a href={site.url} className={styles.Site}>
                <div className={styles.Favicon}>
                  <img onLoad={this.checkImageSize} src={this.handleDomainFavicon(site.url)} alt=""/>
                </div>

                <p className={styles.Title}>{ellipsize(site.title, 25)}</p>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}