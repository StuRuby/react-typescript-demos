import * as React from 'react';

export const About: React.StatelessComponent<{}> = () => {
    return (
        <div className="row about-page col-12">
            <h1>Reudx_Saga</h1>
            <div className="col-10">
                <p>
                    <code>redux-saga</code> 是一个用于管理应用程序 Side
                    Effect（副作用，例如异步获取数据，访问浏览器缓存等）的
                    library，它的目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易。
                </p>
                <p>
                    可以想像为，一个 saga
                    就像是应用程序中一个单独的线程，它独自负责处理副作用。
                    <code>redux-saga</code> 是一个 redux
                    中间件，意味着这个线程可以通过正常的 redux action
                    从主应用程序启动，暂停和取消，它能访问完整的 redux
                    state，也可以 dispatch redux action。
                </p>
                <p>
                    redux-saga 使用了 ES6 的 Generator
                    功能，让异步的流程更易于读取，写入和测试。
                    <em>
                        （如果你还不熟悉的话，
                        <a
                            href="https://redux-saga-in-chinese.js.org/docs/ExternalResources.html"
                            target="_blank"
                        >
                            这里有一些介绍性的链接
                        </a>
                        ）
                    </em>{' '}
                    通过这样的方式，这些异步的流程看起来就像是标准同步的
                    Javascript 代码。（有点像 <code>async</code>/
                    <code>await</code>，但 Generator
                    还有一些更棒而且我们也需要的功能）。
                </p>
                <p>
                    你可能已经用了 <code>redux-thunk</code>{' '}
                    来处理数据的读取。不同于 redux
                    thunk，你不会再遇到回调地狱了，你可以很容易地测试异步流程并保持你的
                    action 是干净的。
                </p>
            </div>
        </div>
    );
};
