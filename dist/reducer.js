export function reducer(state, action) {
    var _a, _b;
    switch (action.type) {
        case "TYPE":
            return Object.assign(Object.assign({}, state), { speed: action.speed, text: (_a = action.payload) === null || _a === void 0 ? void 0 : _a.substring(0, state.text.length + 1) });
        case "DELAY":
            return Object.assign(Object.assign({}, state), { speed: action.payload });
        case "DELETE":
            return Object.assign(Object.assign({}, state), { speed: action.speed, text: (_b = action.payload) === null || _b === void 0 ? void 0 : _b.substring(0, state.text.length - 1) });
        case "COUNT":
            return Object.assign(Object.assign({}, state), { count: state.count + 1 });
        default:
            return state;
    }
}
