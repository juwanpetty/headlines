import React from 'react';

import ReadingList from './components/ReadingList/ReadingList.js';
import styles from './ReadingLists.scss';

export default class ReadingLists extends React.Component {
    render() {
        let readingList = JSON.parse(this.props.readingList);
        Object.keys(readingList).reverse();

        function reverseList(obj) {
            let newObj = {}
            let revObj = Object.keys(obj).reverse();
            revObj.forEach(i => { 
              newObj[i] = obj[i];
            });

            return newObj;
        }

        readingList = reverseList(readingList);
        
        return (
            Object.keys(readingList).map((e, index) => {
                const article = readingList[e];

                return (
                    <ReadingList
                        key={index}
                        article={article}
                        articleLink={this.props.articleLink}
                        readingList={this.props.readingList}
                        handleUpdateReadingList={this.props.handleUpdateReadingList}
                    />
                )
            })
        );
    }
}