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
import cx from 'classnames';
import Layout from '../../components/Layout';
import s from './Home.css';

function Home({ news }) {

  var store = {
    state: "in progress",
    users: {
      "userId1": {
        name: "user1",
        selectedCard: 1,
      },
      "userId2": {
        name: "user2",
        selectedCard: 2
      },
      "userId3": {
        name: "user3",
        selectedCard: null
      }
    }
  }
  store.currentUser = store.userId1;

  return (
    <Layout>
      <div className={s.root}>
        <div className={s.userList}>
          {Object.keys(store.users)
            .map( userId => store.users[userId] )
            .map( user => ( user.name ) ).join(", ") }
        </div>
        <div className={s.selectedCards}>
          {Object.keys(store.users)
            .map( userId => store.users[userId] )
            .filter(
              user => ( user.selectedCard ) )
            .map(
              user => ( <div className={cx({
                [s.card]: true,
                [s["card-faceUp"]]: store.state === "done" || user === store.currentUser
              })} >
                {user.selectedCard}
              </div> )
            ) }
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
