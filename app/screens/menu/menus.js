import React from 'react';

import {CategoryMenu} from './categoryMenu';
import * as Routes from '../../config/navigation/routesBuilder';

export class LoginMenu extends React.Component {
  static navigationOptions = {
    title: 'Login'.toUpperCase()
  };
  render() {
    return (
     <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes}/>
    )
  }
}

export class NavigationMenu extends React.Component {
  static navigationOptions = {
    title: 'Navigation'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.NavigationRoutes}/>
    )
  }
}

export class ArticleMenu extends React.Component {
  static navigationOptions = {
    title: 'Articles'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes}/>
    )
  }
}

export class WalkthroughMenu extends React.Component {
  static navigationOptions = {
    title: 'Walkthrough'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.WalkthroughRoutes}/>
    )
  }
}
export class OtherMenu extends React.Component {
  static navigationOptions = {
    title: 'Other'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.OtherRoutes}/>
    )
  }
}
