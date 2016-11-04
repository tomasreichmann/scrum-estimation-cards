/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import ScrumCard from '../../components/ScrumCard/ScrumCard';




function Home({ news }) {
  const scores = [1,2,3,4,5,6,7,8,9,10];
  var cards = scores.map(function(score){
    return <ScrumCard>{score}</ScrumCard>
  })

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          {cards}

          <h1 className={s.title}>React.js News</h1>
          <ul className={s.news}>
            {news.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(s)(Home);
