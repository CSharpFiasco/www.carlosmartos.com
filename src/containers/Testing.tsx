import React, { Component } from 'react';
import Header from '../components/header/Header';
import { Fade } from 'react-awesome-reveal';
import './Testing.css';

export default class Testing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fade duration={750}>
          <article>
              <p>
                  Enterprises often struggle to balance code maintainability with continuous delivery.
                  However, to promote continuous delivery, developers must be enabled to make changes without fear that they will break something else down the line.
                  This feedback can come from many places, but automated feedback, in the form of automated tests, allows us to quickly and consistently gain feedback as we code.
              </p>
              <p>
                  Testing comes in many forms - unit testing, component testing, integration testing, contract testing, end-to-end testing, etc.
                  Unfortunately, many companies struggle with creating tests, testing existing infrastructure and maintaining testing discipline.
                  This is often a &quot;How do you eat an elephant&quot; problem. The answer of course is, one bite at a time.
              </p>
          </article>
        </Fade>
      </div>
    );
  }
}
