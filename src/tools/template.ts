const fs = require("fs")
const chalk = require("chalk");
const dirname = process["argv"][2];
const pathlib = require("path");
// 检查是否输入了文件名
if (!dirname) {
    console.log(chalk.red('文件夹名称不能为空！'));
    console.log(chalk.red('示例：npm run tep test'));
    process["exit"](0);
}
// 检查文件存在性
if (fs.existsSync(pathlib.resolve(`/src/pages/${dirname}`))) {
    console.log(chalk.red('文件夹已存在，请重新创建！'));
    process["exit"](0);
}
console.log(pathlib.resolve(`./src/pages/${dirname}`))
// console.log(pathlib.resolve(`../pages`));
// 创建文件夹
fs.mkdirSync(pathlib.resolve(`./src/pages/${dirname}`));

// 编写模板
const indexTemp = `
    import Taro, { Component, Config } from '@tarojs/taro'
    import { View, Text } from '@tarojs/components'
    import { connect } from '@tarojs/redux';
    import './index.scss';
    @connect(({${dirname}}) => ({
        ...${dirname},
    }))
    export default class ${titleCase(dirname)} extends Component {
        config: Config = {
            navigationBarTitleText: '${dirname}'
        }

        componentWillMount () { }

        componentDidMount () { }

        componentWillUnmount () { }

        componentDidShow () { }

        componentDidHide () { }

        render () {
            return (
            <View>
                <Text>${dirname}</Text>
            </View>
            )
        }
    }`;

fs.writeFile(pathlib.resolve(`./src/pages/${dirname}/index.tsx`), decodeURIComponent(indexTemp), () => {
    console.log(chalk.blue("index.tsx创建成功！"));
});
fs.writeFile(pathlib.resolve(`./src/pages/${dirname}/index.scss`), "", () => {
    console.log(chalk.blue("index.scss创建成功！"));
});
const modelTemp = `
    import * as ${dirname}Api from './service';
    const model = {
        namespace: "${dirname}",

        state: {
        },
        subscriptions: {
        },
    
        effects: {
            * effectsDemo(_, { call, put }) {
                const { status, data } = yield call(${dirname}Api.demo, {});
                if (status === 'ok') {
                  yield put({ type: 'save',
                    payload: {
                      topData: data,
                    } });
                }
              },
        },
        reducers: {
            save(state, { payload }) {
                return { ...state, ...payload };
            },
        },
    
    };

    export default model;
`;
fs.writeFile(pathlib.resolve(`./src/pages/${dirname}/model.ts`), decodeURIComponent(modelTemp), () => {
    console.log(chalk.blue("model.ts创建成功！"));
});

// service页面模版
const serviceTep = `
    import Request from "../../unit/request";
    export const demo = (data) => {
        return Request({
            url: '路径',
            method: 'POST',
            data,
        });
    };
`;
fs.writeFile(pathlib.resolve(`./src/pages/${dirname}/service.ts`), decodeURIComponent(serviceTep), () => {
    console.log(chalk.blue("service.ts创建成功！"));
});
console.log(chalk.red('page文件创建完毕，请手动修改models和配置文件，保证model和page注册！'));
function titleCase(str) {
    const array = str.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    const string = array.join(' ');
    return string;
}