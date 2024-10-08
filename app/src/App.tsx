import "./App.css";
import { Button } from "antd";
import { Demo, Shared } from "@qidydl/shared/components";
import { useGetLength } from "@qidydl/shared/client";
import { useState } from "react";
import reactLogo from "assets/react.svg";

// IMPORTANT LESSON: Note that if you change the code in shared, it will not hot-reload unless you do `pnpm start` in
// the shared folder at the same time as you do it in the app folder, because it's being imported from the dist output.
// This is made easier by running `pnpm start` in the root folder which will start both packages.
//
// It's possible to import directly from "@qidydl/shared/src/path/to/some/file" and then you don't need to start the
// shared project to get HMR, but this breaks module resolution because we're still importing from *this project's*
// node_modules folder, not shared's.

const App = () => {
    const [count, setCount] = useState(0);
    const [enabled, setEnabled] = useState(false);
    const { isLoading, data } = useGetLength("https://agilemanifesto.org/", { enabled });

    return (
        <>
            <h1>Demo Page with antd</h1>

            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
                <Demo />
                <Shared />
                <Button loading={enabled && isLoading} onClick={() => setEnabled(true)}>
                    Data length: {data ?? "click to load"}
                </Button>
            </div>
        </>
    );
};

export default App;
