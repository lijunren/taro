
    import * as tempApi from './service';
    const model = {
        namespace: "temp",

        state: {
        },
        subscriptions: {
        },
    
        effects: {
            * effectsDemo(_, { call, put }) {
                const { status, data } = yield call(tempApi.demo, {});
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
