import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Platform,
  ScrollView,
  Picker,
} from 'react-native';
import ReactART from 'ReactNativeART';
import Morph from 'art/morph/path';

const {
  Surface,
  Group,
  Shape
} = ReactART;

// 蝙蝠侠SVG路径数组
const BatmanLogoSVGs = [
  'M 256,213 C 245,181 206,187 234,262 147,181 169,71.2 233,18   220,56   235,81   283,88   285,78.7 286,69.3 288,60   289,61.3 290,62.7 291,64   291,64   297,63   300,63   303,63   309,64   309,64   310,62.7 311,61.3 312,60   314,69.3 315,78.7 317,88   365,82   380,56   367,18   431,71   453,181 366,262 394,187 356,181 344,213 328,185 309,184 300,284 291,184 272,185 256,213 Z',         
  'M 212,220 C 197,171 156,153 123,221 109,157 120,109  159,63.6 190,114  234,115  254,89.8 260,82.3 268,69.6 270,60.3 273,66.5 275,71.6 280,75.6 286,79.5 294,79.8 300,79.8 306,79.8 314,79.5 320,75.6 325,71.6 327,66.5 330,60.3 332,69.6 340,82.3 346,89.8 366,115  410,114  441,63.6 480,109  491,157 477,221 444,153 403,171 388,220 366,188 316,200 300,248 284,200 234,188 212,220 Z',        
  'M 213,222 C 219,150 165,139 130,183 125,123 171,73.8 247,51.6 205,78   236,108  280,102  281,90.3 282,79   286,68.2 287,72   288,75.8 289,79.7 293,79.7 296,79.7 300,79.7 304,79.7 307,79.7 311,79.7 312,75.8 313,72   314,68.2 318,79   319,90.3 320,102  364,108  395,78   353,51.6 429,73.8 475,123 470,183 435,139 381,150 387,222 364,176 315,172 300,248 285,172 236,176 213,222 Z',        
  'M 218,231 C 191,238 165,252 140,266 144,209 156,153  193,93.7 218,106  249,105  280,102  282,90.3 284,78.6 289,67.8 290,71.6 291,75.8 292,79.7 292,79.7 297,79.7 300,79.7 303,79.7 308,79.7 308,79.7 309,75.8 310,71.6 311,67.8 316,78.6 318,90.3 320,102  351,105  382,106  407,93.7 444,153  456,209 460,266 435,252 409,238 382,231 355,224 328,223 300,223 272,223 245,224 218,231 Z',         
  'M 258,243 C 220,201 221,220 253,281 154,243 150,108  229,61.9 242,83   257,98.1 275,110  278,88   282,65.8 285,43.6 287,49.9 288,56.2 290,62.5 293,62.7 297,62.9 300,62.9 303,62.9 307,62.7 310,62.5 312,56.2 313,49.9 315,43.6 318,65.8 322,88   325,110  343,98.1 358,83   371,61.9 450,108  446,243 347,281 379,220 380,201 342,243 330,187 329,202 300,271 271,202 270,187 258,243 Z',         
  'M 235,210 C 214,139 143,145 183,229 108,175 135,70.1 242,48.3 190,85.6 245,142  278,95.5 281,80.2 281,62.7 284,48.7 287,53.9 287,59.1 289,64.5 292,64.7 297,64.2 300,64.2 303,64.2 308,64.7 311,64.5 313,59.1 313,53.9 316,48.7 319,62.7 319,80.2 322,95.5 355,142  410,85.6 358,48.3 465,70.1 492,175 417,229 457,145 386,139 365,210 357,147 309,190 300,271 291,190 243,147 235,210 Z',         
  'M 249,157 C 214,157 201,203 273,255 157,221 157,69   274,32.8 188,87.2 211,140  256,140  291,140  289,128  291,98.1 293,107  293,116  295,125  297,125  298,125  300,125  302,125  305,125  305,125  307,116  307,107  309,98.1 311,128  309,140  344,140  389,140  412,87.2 326,32.8 443,69   443,221 327,255 399,203 386,157 351,157 317,157 300,195 300,238 300,195 283,157 249,157 Z',        
  'M 264,212 C 213,138 150,171 232,244 101,217 112,55.1 257,36.9 182,86.6 222,106  266,106  285,106  284,66.7 286,36.8 288,42.6 289,48.4 291,54.2 291,54.2 297,54.2 300,54.2 303,54.2 309,54.2 309,54.2 311,48.4 312,42.6 314,36.8 316,66.7 315,106  334,106  378,106  418,86.6 343,36.9 488,55.1 499,217 368,244 450,171 387,138 336,212 354,161 300,163 300,249 300,163 246,161 264,212 Z',         
  'M 223,217 C 194,153 165,168 133,219 143,158 161,99.2 189,38.4 214,69.8 241,84.7 272,86.2 272,70.2 273,53.5 273,37.5 275,47.9 278,58.4 280,68.8 287,64.9 292,62.4 300,62.4 308,62.4 313,64.9 320,68.8 322,58.4 325,47.9 327,37.5 327,53.5 328,70.2 328,86.2 359,84.7 386,69.8 411,38.4 439,99.2 457,158 467,219 435,168 406,153 377,217 350,162 319,176 300,245 281,176 250,162 223,217 Z',         
  'M 231,185 C 186,159 161,180 190,215 86.2,180 92.6,99.6 211,68.9 195,112 254,141 279,96.7 279,83.2 279,69.8 279,56.3 283,63.6 288,70.8 292,78.1 295,78.1 297,78.1 300,78.1 303,78.1 305,78.1 308,78.1 312,70.8 317,63.6 321,56.3 321,69.8 321,83.2 321,96.7 346,141 405,112 389,68.9 507,99.6 514,180 410,215 439,180 414,159 369,185 351,165 324,167 300,216 276,167 249,165 231,185 Z',     
  'M 194,146 C 192,107 164,76.4 136,45.6 166,55.7 196,65.7 226,75.8 238,107 265,163 279,136 282,130 281,108 281,94.8 285,103 288,111 293,115 295,116 298,117 300,117 302,117 305,116 307,115 312,111 315,103 319,94.8 319,108 318,130 321,136 335,163 362,107 374,75.8 404,65.7 434,55.7 464,45.6 436,76.4 408,107 406,146 355,158 323,189 300,231 277,189 245,158 194,146 Z',        
  'M 209,182 C 184,132 176,138 113,161 140,136 168,111 196,86.5 221,104 247,115 278,115 281,99.9 285,85.5 287,70.2 289,78.5 292,88.4 294,96.7 296,96.7 298,96.7 300,96.7 302,96.7 304,96.7 306,96.7 308,88.4 311,78.5 313,70.2 315,85.5 319,99.9 322,115 353,115 379,104 404,86.5 432,111 460,136 487,161 424,138 416,132 391,182 332,150 341,161 300,214 259,161 268,150 209,182 Z',         
  'M 198,171 C 189,131 150,120 113,140 142,104 182,74.4 249,70.2 208,89 248,125 278,106 285,101 286,93.5 286,74.2 288,78.1 291,81.5 294,83.2 296,84.2 298,84.7 300,84.7 302,84.7 304,84.2 306,83.2 309,81.5 312,78.1 314,74.2 314,93.5 315,101 322,106 352,125 392,89 351,70.2 418,74.4 458,104 487,140 450,120 411,131 402,171 357,147 322,171 300,214 278,171 243,147 198,171 Z',         
  'M 202,170 C 188,115 157,108 124,105 146,84.3 171,71.5 199,70.2 211,98.6 243,103 277,106 279,99.3 281,92.6 283,86 285,91.9 287,97.9 290,104 293,104 297,104 300,104 303,104 307,104 310,104 313,97.9 315,91.9 317,86 319,92.6 321,99.3 323,106 357,103 389,98.6 401,70.2 429,71.5 454,84.3 476,105 443,108 412,115 398,170 349,157 318,175 300,214 282,175 251,157 202,170 Z',         
  'M 220,179 C 200,127 150,130 123,175 122,110 160,85.1 201,64 208,99.2 243,111 268,92.9 278,86.1 284,68.2 287,40.7 289,49.6 292,58.4 294,67.3 296,67.3 298,67.3 300,67.3 302,67.3 304,67.3 306,67.3 308,58.4 311,49.6 313,40.7 316,68.2 322,86.1 332,92.9 357,111 392,99.3 399,64 440,85.1 478,110 477,175 450,130 400,127 380,179 355,155 305,208 300,247 295,208 245,155 220,179 Z',         
  'M 166,154 C 179,119 154,95.4 114,79.3 155,79.1 197,78.9 239,78.7 242,103 250,109 283,109 289,109 290,93.9 291,83.7 292,88.3 292,92.9 293,97.5 295,97.5 298,97.5 300,97.5 302,97.5 305,97.5 307,97.5 308,92.9 308,88.3 309,83.7 310,93.9 311,109 317,109 350,109 358,103 361,78.7 403,78.9 445,79.1 486,79.3 446,95.4 421,119 434,154 377,151 320,151 300,207 280,151 223,151 166,154 Z'
];

// 将SVG路径转换为Morph路径
const BatmanLogoPaths = BatmanLogoSVGs.map((svg) => Morph.Path(svg));

// 提醒类型配置
const REMINDER_TYPES = {
  sitting: {
    name: '久坐提醒',
    icon: '🪑',
    description: '提醒您起身活动一下',
    defaultMinutes: 60,
    color: '#FF6B6B',
    message: '该起身活动一下了！长时间久坐对健康不利哦～'
  },
  water: {
    name: '喝水提醒',
    icon: '💧',
    description: '提醒您及时补充水分',
    defaultMinutes: 30,
    color: '#4ECDC4',
    message: '记得喝水哦！保持身体水分充足很重要～'
  },
  eye: {
    name: '护眼提醒',
    icon: '👀',
    description: '提醒您休息眼睛',
    defaultMinutes: 20,
    color: '#45B7D1',
    message: '该让眼睛休息一下了！看看远处的绿色植物吧～'
  },
  stretch: {
    name: '伸展提醒',
    icon: '🤸‍♀️',
    description: '提醒您做伸展运动',
    defaultMinutes: 45,
    color: '#96CEB4',
    message: '来做些伸展运动吧！活动一下筋骨～'
  },
  medicine: {
    name: '用药提醒',
    icon: '💊',
    description: '提醒您按时服药',
    defaultMinutes: 120,
    color: '#FFEAA7',
    message: '该服药了！请按医嘱按时服用药物～'
  }
};

// 蝙蝠侠动画组件
class BatmanStage extends Component {
  constructor(props){
    super(props);
    this.state = {
      transition: Morph.Tween(BatmanLogoPaths[0], BatmanLogoPaths[1])
    }
    this._current = 1;
  }

  nextAnimation() {
    this._current += 1;
    if (this._current >= BatmanLogoPaths.length) return;
    this.setState({
      transition: Morph.Tween(BatmanLogoPaths[this._current - 1], BatmanLogoPaths[this._current])
    }, () => this.animate(null, this.nextAnimation.bind(this)))
  };

  animate(start, cb) {
    requestAnimationFrame((timestamp) => {
      if (!start) start = timestamp;

      var delta = (timestamp - start) / 60000;

      if (delta > 1) return cb();

      this.state.transition.tween(delta);
      this.setState(this.state);
      this.animate(start, cb);
    })
  };

  render() {
    const { width, height } = this.props;
    return (
      <Surface style={styles.batmanContainer} width={width} height={height}>
        <Group style={styles.batmanContainer}>
          <Shape x={-110} y={0} d={this.state.transition} fill="#000" />
        </Group>
      </Surface>
    );
  };

  start(){
    this.animate(null, this.nextAnimation.bind(this))
  };

  stop(){
    this._current = BatmanLogoPaths.length
  };
}

export class TimerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "健康提醒",
    tabBarIcon: ({tintColor, activeTintColor}) => (
      <Image source={require('../asserts/images/drug_setting.png')}
             style={{width: 16, height: 16, tintColor: tintColor}}
      />
    ),
  });

  constructor(props){
    super(props);
    this.state = {
      selectedType: 'sitting',
      customMinutes: REMINDER_TYPES.sitting.defaultMinutes,
      displayMinutes: REMINDER_TYPES.sitting.defaultMinutes,
      displaySeconds: 0,
      isRunning: false,
      totalSeconds: REMINDER_TYPES.sitting.defaultMinutes * 60
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  initTimer(){
    this.clearTimer();
    const totalSeconds = this.state.customMinutes * 60;
    this.setState({
      displayMinutes: this.state.customMinutes,
      displaySeconds: 0,
      isRunning: true,
      totalSeconds: totalSeconds
    });
  }

  clearTimer(){
    this.timer && clearInterval(this.timer);
    this.setState({ isRunning: false });
  }

  isTimeUp(){
    return this.state.displayMinutes === 0 && this.state.displaySeconds === 0;
  }

  onStartButtonPress(){
    this.initTimer();
    this._batmanStage.start();
    this.timer = setInterval(() => {
      if(this.isTimeUp()) {
        this.clearTimer();
        if (Platform.OS === 'ios') {
          // iOS特有的振动和通知
          const VibrationIOS = require('react-native').VibrationIOS;
          VibrationIOS.vibrate();
          this._sendLocalNotification();
        } else {
          // Android振动
          const Vibration = require('react-native').Vibration;
          Vibration.vibrate();
        }
        this._batmanStage.stop();
        const reminderType = REMINDER_TYPES[this.state.selectedType];
        Alert.alert(
          `${reminderType.icon} ${reminderType.name}`, 
          reminderType.message,
          [
            {text: '知道了', style: 'default'},
            {text: '再提醒一次', onPress: () => this.onStartButtonPress()}
          ]
        );
      } else {
        let newMinutes = this.state.displayMinutes;
        let newSeconds = this.state.displaySeconds - 1;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes = newMinutes - 1;
        }
        
        this.setState({
          displayMinutes: newMinutes,
          displaySeconds: newSeconds
        });
      }
    }, 1000); // 每秒更新一次
  }

  onStopButtonPress(){
    this.clearTimer();
    this._batmanStage.stop();
    this.setState({
      displayMinutes: this.state.customMinutes,
      displaySeconds: 0
    });
  }

  onTypeChange(type) {
    if (!this.state.isRunning) {
      const reminderType = REMINDER_TYPES[type];
      this.setState({
        selectedType: type,
        customMinutes: reminderType.defaultMinutes,
        displayMinutes: reminderType.defaultMinutes,
        displaySeconds: 0
      });
    }
  }

  onTimeChange(minutes) {
    if (!this.state.isRunning) {
      this.setState({
        customMinutes: minutes,
        displayMinutes: minutes,
        displaySeconds: 0
      });
    }
  }

  // 发送本地通知 (iOS)
  _sendLocalNotification() {
    if (Platform.OS === 'ios') {
      const PushNotificationIOS = require('react-native').PushNotificationIOS;
      const reminderType = REMINDER_TYPES[this.state.selectedType];
      PushNotificationIOS.presentLocalNotification({
        alertTitle: `${reminderType.icon} ${reminderType.name}`,
        alertBody: reminderType.message,
        soundName: 'default',
        category: 'HEALTH_REMINDER'
      });
    }
  }

  formatTime(minutes, seconds) {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  render() {
    const { width } = require('Dimensions').get('window');
    const height = 200;
    const currentType = REMINDER_TYPES[this.state.selectedType];
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>健康提醒助手</Text>
          <Text style={styles.subtitle}>关爱健康，从小事做起</Text>
        </View>

        {/* 提醒类型选择 */}
        <View style={styles.typeSection}>
          <Text style={styles.sectionTitle}>选择提醒类型</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typeList}>
            {Object.keys(REMINDER_TYPES).map(type => {
              const reminderType = REMINDER_TYPES[type];
              const isSelected = this.state.selectedType === type;
              return (
                <TouchableHighlight
                  key={type}
                  style={[
                    styles.typeCard,
                    isSelected && styles.typeCardSelected,
                    { borderColor: reminderType.color }
                  ]}
                  onPress={() => this.onTypeChange(type)}
                  disabled={this.state.isRunning}
                >
                  <View style={styles.typeCardContent}>
                    <Text style={styles.typeIcon}>{reminderType.icon}</Text>
                    <Text style={[styles.typeName, isSelected && styles.typeNameSelected]}>
                      {reminderType.name}
                    </Text>
                    <Text style={styles.typeDescription}>{reminderType.description}</Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </View>

        {/* 时间设置 */}
        <View style={styles.timeSection}>
          <Text style={styles.sectionTitle}>设置提醒间隔</Text>
          <View style={styles.timePickerContainer}>
            <Picker
              selectedValue={this.state.customMinutes}
              style={styles.timePicker}
              onValueChange={(minutes) => this.onTimeChange(minutes)}
              enabled={!this.state.isRunning}
            >
              {[5, 10, 15, 20, 25, 30, 45, 60, 90, 120].map(minutes => (
                <Picker.Item key={minutes} label={`${minutes} 分钟`} value={minutes} />
              ))}
            </Picker>
          </View>
        </View>

        {/* 计时器显示 */}
        <View style={styles.timerSection}>
          <View style={[styles.timerDisplay, { backgroundColor: currentType.color + '20' }]}>
            <BatmanStage 
              ref={component => this._batmanStage = component}
              width={width * 0.8} 
              height={height}
            />
            <View style={styles.timerOverlay}>
              <Text style={[styles.currentTypeText, { color: currentType.color }]}>
                {currentType.icon} {currentType.name}
              </Text>
              <Text style={styles.timerText}>
                {this.formatTime(this.state.displayMinutes, this.state.displaySeconds)}
              </Text>
              {this.state.isRunning && (
                <Text style={styles.statusText}>计时中...</Text>
              )}
            </View>
          </View>
        </View>

        {/* 控制按钮 */}
        <View style={styles.buttonContainer}>
          <TouchableHighlight 
            style={[
              styles.button, 
              this.state.isRunning ? styles.buttonDisabled : [styles.buttonEnabled, { backgroundColor: currentType.color }]
            ]} 
            underlayColor='#FFFFFF' 
            onPress={this.onStartButtonPress.bind(this)}
            disabled={this.state.isRunning}
          >
            <Text style={styles.buttonText}>开始提醒</Text>
          </TouchableHighlight>
          
          <TouchableHighlight 
            style={[
              styles.button, 
              !this.state.isRunning ? styles.buttonDisabled : styles.buttonStop
            ]} 
            underlayColor='#FFFFFF'
            onPress={this.onStopButtonPress.bind(this)}
            disabled={!this.state.isRunning}
          >
            <Text style={styles.buttonText}>停止提醒</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D'
  },
  typeSection: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    paddingHorizontal: 20,
    marginBottom: 15
  },
  typeList: {
    paddingLeft: 20
  },
  typeCard: {
    width: 120,
    height: 100,
    marginRight: 15,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  typeCardSelected: {
    backgroundColor: '#F8F9FA'
  },
  typeCardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  typeIcon: {
    fontSize: 24,
    marginBottom: 5
  },
  typeName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 3
  },
  typeNameSelected: {
    color: '#3498DB'
  },
  typeDescription: {
    fontSize: 10,
    color: '#7F8C8D',
    textAlign: 'center'
  },
  timeSection: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  timePickerContainer: {
    alignItems: 'center'
  },
  timePicker: {
    width: 200,
    height: 50
  },
  timerSection: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  timerDisplay: {
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    position: 'relative',
    minHeight: 250
  },
  timerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentTypeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C3E50'
  },
  statusText: {
    fontSize: 16,
    color: '#E74C3C',
    marginTop: 10,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  buttonEnabled: {
    backgroundColor: '#3498DB'
  },
  buttonDisabled: {
    backgroundColor: '#BDC3C7'
  },
  buttonStop: {
    backgroundColor: '#E74C3C'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  batmanContainer: {
    transform: [{scale: 0.3}]
  }
}); 