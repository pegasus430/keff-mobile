import React from 'react';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import * as firebase from "firebase";


export class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
      this.state = {
        email: null,
        pass: null,
        confirmpass: null,
        name: null,
        error: null
      }
      this.signup = this.signup.bind(this);
  }
  async signup() {
    let  email = this.state.email;
    let pass = this.state.pass;
    let confirmPass = this.state.confirmpass;
    if(pass != confirmPass){
        this.setState({
            error: 'Your password incorrect'
        });
        return;
    }

        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);
            console.log("Account created");
            this.props.navigation.navigate('Login2')
        } catch (error) {
            this.setState({
                error: error.toString()
            })

            console.log(error.toString(),2222222222)
        }
  }
  render() {
    let renderIcon = () => {
      if (RkTheme.current.name === 'light')
        return <Image style={styles.image} source={require('../../assets/images/logo.png')}/>;
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')}/>
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          {renderIcon()}
          <RkText rkType='h1'>Registration</RkText>
        </View>
        <View style={styles.content}>
          <View>
              <RkText rkType='danger'>{this.state.error} </RkText>
            <RkTextInput rkType='rounded' placeholder='Name'  value={this.state.name} onChangeText={(text) => this.setState({name:text})}/>
            <RkTextInput rkType='rounded' placeholder='Email' name='email' value={this.state.email} onChangeText={(text) => this.setState({email:text})}/>
            <RkTextInput rkType='rounded' placeholder='Password' name='pass' secureTextEntry={true} value={this.state.pass} onChangeText={(text) => this.setState({pass:    text})}/>
            <RkTextInput rkType='rounded' placeholder='Confirm Password' secureTextEntry={true} value={this.state.confirmpass} onChangeText={(text) => this.setState({confirmpass:text})}/>
            <GradientButton style={styles.save} rkType='large' text='SIGN UP' onPress={this.signup}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Already have an account?</RkText>
              <RkButton rkType='clear'  onPress={() => this.props.navigation.navigate('Login2')}>
                <RkText rkType='header6'> Sign in now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height:scaleVertical(77),
    resizeMode:'contain'
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around'
  },
  footer:{
    justifyContent:'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));