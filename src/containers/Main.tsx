/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import Skip from 'src/components/skip/Skip';
import Header from '../components/header/Header';
import Greeting from './greeting/Greeting';
import Skills from './skills/Skills';
import WorkExperience from './workExperience/WorkExperience';
import Achievement from './achievement/Achievement';
import Footer from '../components/footer/Footer';
import Top from './topbutton/Top';
import Education from './education/Education';
import Menu from './menu/Menu';

class Main extends Component {
  override render() {
    return (
      <div>
        <Skip />
        <Header>
          <Menu />
        </Header>
        <Greeting />
        <Skills />
        <Education />
        <WorkExperience />
        <Achievement />
        <Footer />
        <Top />
      </div>
    );
  }
}

export default Main;
