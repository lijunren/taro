import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.scss'

@connect(({home, my}) => ({
  ...home,
  ...my
}))
class Home extends Component<{homeName?; name?;}, {}> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    console.log(this.props);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {homeName, name} = this.props;
    return (
      <View className='index'>
        <Text>Hello {homeName}!</Text>
        <Text>{name}</Text>
        {/* <Button>获取头像</Button> */}
      </View>
    )
  }
}

export default Home
