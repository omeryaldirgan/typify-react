# typify-react

![Logo](https://raw.githubusercontent.com/omeryaldirgan/typify-react/main/logo.png)



A lightweight and customizable React hook for creating typewriter text effects with ease. It supports typing, deleting, delays, and loop control to bring dynamic and engaging animations to your UI.

---

## ✨ Features

- **Customizable Typing Speed**: Control the speed of typing and deleting characters.
- **Loop Support**: Define how many times the animation runs, or let it loop infinitely.
- **Callbacks**: Hooks into key events like typing, deleting, delays, and completion.
- **Lightweight**: Built with modern React practices using hooks.
- **TypeScript Support**: Provides strong typings for better development experience.

---

## 📦 Installation

Install the package via npm or yarn:


npm install typify-react
# or
yarn add typify-react

---
## 🚀 Usage

Here’s how to get started with `typify-react`:

```tsx
import { useTypewriter } from "typify-react";

const App = () => {
  const [text, { isType, isDelay, isDelete, isDone }] = useTypewriter({
    words: ["Welcome to My App!", "This is typify-react!"],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
    onLoopDone: () => console.log("All loops completed!"),
  });

  return <h1>{text}</h1>;
};

export default App;
```

## ⚙️ Props

| Prop Name    | Type                       | Default               | Description                                      |
|--------------|----------------------------|-----------------------|--------------------------------------------------|
| `words`      | `string[]`                 | `["Hello World"]`     | Array of words to type.                         |
| `loop`       | `number` or `boolean`      | `1`                   | Number of loops to run. `0` for infinite.       |
| `typeSpeed`  | `number`                   | `80`                  | Speed for typing characters (ms).               |
| `deleteSpeed`| `number`                   | `50`                  | Speed for deleting characters (ms).             |
| `delaySpeed` | `number`                   | `1500`                | Delay between typing and deleting (ms).         |
| `onType`     | `(count: number) => void`  | -                     | Triggered on typing with the typed word count.  |
| `onDelete`   | `() => void`               | -                     | Triggered on deleting.                          |
| `onDelay`    | `() => void`               | -                     | Triggered on delay.                             |
| `onLoopDone` | `() => void`               | -                     | Triggered after completing all loops.           |


## 📚 API Reference

### `useTypewriter`

This hook returns a tuple containing:

1. **`text`**: The current text being typed or deleted.
2. **`TypewriterHelper`**: An object with the following state indicators:
   - **`isType`**: Whether the hook is currently typing.
   - **`isDelay`**: Whether it is in a delay phase.
   - **`isDelete`**: Whether it is currently deleting.
   - **`isDone`**: Whether all loops are completed.

#### Example

```tsx
const [text, { isType, isDelay, isDelete, isDone }] = useTypewriter(...);
```


## 📋 Example Project

Clone the repository and run the example project:

```bash
git clone https://github.com/omeryaldirgan/typify-react.git
cd typify-react/example
npm install
npm start
```

## 🛠 Development

Want to contribute? Follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/omeryaldirgan/typify-react.git
   ```

2. Install dependencies:

    ```bash
    cd typify-react
    npm install
    ```

3. Run the dev server:

    ```bash
    npm run dev
    ```


## 💬 Feedback

If you find any issues or have suggestions for improvement, please open an [issue](https://github.com/omeryaldirgan/typify-react/issues).
