import React from 'react';

import styles from './WallpaperSettings.scss';

export default class WallpaperSettings extends React.Component {
    render() {
        let showWallpaper;

        if (this.props.showWallpaper == 'true') {
            showWallpaper = true;
        } else {
            showWallpaper = false;
        }

        return (
            <div className={styles.Settings}>
                <div className={styles.Group}>
                    <div className={styles.Checkbox}>
                        <input type="checkbox" id="wallpaper" checked={showWallpaper} onChange={() => this.props.toggleShowWallpaper()} />
                        <label htmlFor="wallpaper">Wallpaper</label>
                    </div>
                    <p className={styles.Subtitle}>Display wallpaper on the new tab page.</p>
                </div>
            </div>
        );
    };
}