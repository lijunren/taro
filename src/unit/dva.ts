import { create } from "dva-core";
// import {} from "redux-logger";
import createLoading from "dva-loading";

let app;
function createApp(opt) {
    app = create(opt);
    app.use(createLoading());
    if (!global["registered"]) opt.models.forEach(model => app.model(model));
    global["registered"] = true;
    app.start();

    const store = app._store;
    app.getStore = () => store;
    const dispatch = store.dispatch;
    app.dispatch = dispatch;

    return app;
}

export default {
    createApp,
    getDispatch() {
        return app.dispatch;
    },
}