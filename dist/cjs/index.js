"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypewriter = void 0;
const react_1 = require("react");
const reducer_1 = require("./reducer");
const useTypewriter = ({ words = ["Hello World!", "Welcome to the Future!"], loop = 1, typeSpeed = 80, deleteSpeed = 50, delaySpeed = 1500, onLoopDone, onType, onDelete, onDelay, }) => {
    const [{ speed, text, count }, dispatch] = (0, react_1.useReducer)(reducer_1.reducer, {
        speed: typeSpeed,
        text: "",
        count: 0,
    });
    // Refs
    const loops = (0, react_1.useRef)(0);
    const isDone = (0, react_1.useRef)(false);
    const isDelete = (0, react_1.useRef)(false);
    const isType = (0, react_1.useRef)(false);
    const isDelay = (0, react_1.useRef)(false);
    const handleTyping = (0, react_1.useCallback)(() => {
        const index = count % words.length;
        const fullWord = words[index];
        if (!isDelete.current) {
            dispatch({ type: "TYPE", payload: fullWord, speed: typeSpeed });
            isType.current = true;
            if (text === fullWord) {
                dispatch({ type: "DELAY", payload: delaySpeed });
                isType.current = false;
                isDelay.current = true;
                setTimeout(() => {
                    isDelay.current = false;
                    isDelete.current = true;
                }, delaySpeed);
                if (Number(loop) > 0) {
                    loops.current += 1;
                    if (loops.current / words.length === loop) {
                        isDelay.current = false;
                        isDone.current = true;
                    }
                }
            }
        }
        else {
            dispatch({ type: "DELETE", payload: fullWord, speed: deleteSpeed });
            if (text === "") {
                isDelete.current = false;
                dispatch({ type: "COUNT" });
            }
        }
        if (isType.current) {
            if (onType)
                onType(loops.current);
        }
        if (isDelete.current) {
            if (onDelete)
                onDelete();
        }
        if (isDelay.current) {
            if (onDelay)
                onDelay();
        }
    }, [
        count,
        delaySpeed,
        deleteSpeed,
        loop,
        typeSpeed,
        words,
        text,
        onType,
        onDelete,
        onDelay,
    ]);
    (0, react_1.useEffect)(() => {
        const typing = setTimeout(handleTyping, speed);
        if (isDone.current)
            clearTimeout(typing);
        return () => clearTimeout(typing);
    }, [handleTyping, speed]);
    (0, react_1.useEffect)(() => {
        if (!onLoopDone)
            return;
        if (isDone.current) {
            onLoopDone();
        }
    }, [onLoopDone]);
    return [
        text,
        {
            isType: isType.current,
            isDelay: isDelay.current,
            isDelete: isDelete.current,
            isDone: isDone.current,
        },
    ];
};
exports.useTypewriter = useTypewriter;
