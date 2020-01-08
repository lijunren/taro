
    import Taro, { Component, Config } from '@tarojs/taro'
    import { View, Text } from '@tarojs/components'
    import { connect } from '@tarojs/redux';
    import './index.scss';
    @connect(({temp}) => ({
        ...temp,
    }))
    export default class Temp extends Component {
        config: Config = {
            navigationBarTitleText: 'temp'
        }

        componentWillMount () { }

        componentDidMount () { }

        componentWillUnmount () { }

        componentDidShow () { }

        componentDidHide () { }

        render () {
            return (
            <View>
                <Text>temp</Text>
            </View>
            )
        }
    }