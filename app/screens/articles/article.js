import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import * as firebase from "firebase";


let moment = require('moment');


export class Article extends React.Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase()
  };

  constructor(props) {
    super(props);


      // firebase.database().ref('tagTable/balloon').set({
      //     tag1: 'balloon tag1',
      //     tag2: 'balloon tag2',
      //     tag3 : 'balloon tag2'
      // });

    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    this.data = data.getArticle(id);
    this.tagName = '';

    let tagId = 'pizza';
    if(this.data.header == 'Balloon Trip'){
        tagId = 'balloon';
    }

      firebase.database().ref('tagTable/' + tagId).on('value', (snapshot) => {
          this.tagName  = snapshot.val().tag1;

          console.log("New high score112: " +  this.tagName);
      });
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='article'>
          <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
          <Image rkCardImg source={this.data.photo}/>
          {/*<View rkCardHeader>*/}
            {/*<View>*/}
              {/*<RkText rkType='secondary2 hintColor'>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>*/}
            {/*</View>*/}
            {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileV1', {id: this.data.user.id})}>*/}
              {/*<Avatar rkType='circle' img={this.data.user.photo}/>*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
            <View>
                <RkText rkType='primary3 bigLine'>{this.tagName }</RkText>
                <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          <View rkCardContent>
            <View>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        },
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
                />
            </View>
          </View>
          <View rkCardFooter>
            <SocialBar/>
          </View>
        </RkCard>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));