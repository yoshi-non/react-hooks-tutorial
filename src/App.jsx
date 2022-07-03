import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react'
import './App.css'
import KagariContext from './main';
import SomeChild from './SomeChild';

function App() {

  // useState
  // 初期値があるものに対して変化を与えるときにページをリロードすることなくレンダリングする
  // const [現在の状態, 更新関数] = useState(初期値)
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1);
  }

  // useEffect
  // 特定の何かが変化したときに処理を行う、特定の何かに何も入れなければページがリダイレクトされたときに処理が行われる
  // useEffect(() => {処理}, [特定の何か])
  const btnName = document.querySelector(".effectBtn")
  useEffect(() => {
    console.log(btnName)
  }, [count])

  // useContext
  // 別ファイルからデータをpropsのようにバケツリレーせずに渡せる
  const kagariInfo = useContext(KagariContext)

  // useRef
  // ref={任意}を埋めたタグのあらゆる情報を参照できる。ここではinputタグに入力された現在の値を取得している
  const ref = useRef()
  const handleRef = () => {
    console.log(ref.current.value)
  }

  // useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, 0)

  // useMemo 値のメモ化
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(0)

  // const square = () => {
  //   let i = 0
  //   while (i < 2000000) {
  //     i++
  //   }
  //   return count02 * count02
  // }

  const square = useMemo(() => {
    let i = 0
    while (i < 2000000) {
      i++
    }
    console.log("クリックされました")
    return count02 * count02
  }, [count02])

  // useCallBack 関数のメモ化
  const [counter, setCounter] = useState(0)

  // const showCount = () => {
  //   alert("これは重い処理です")
  // }

  const showCount = useCallback(() => {
    alert("これは重い処理です")
  }, [counter])

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick} className="effectBtn">+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{kagariInfo.name}</p>
      <p>{kagariInfo.language}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>USEREF</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <hr />
      <h1>useMemo</h1>
      <p>カウント1: {count01}</p>
      <p>カウント2: {count02}</p>
      <div>結果: {square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount} />
    </div>
  )
}

export default App
