import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>my</Text>
      </View>
    )
  }
}
