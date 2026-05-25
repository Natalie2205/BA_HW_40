import { useState } from 'react'
import Header from './components/layouts/Header'
import Button from './components/Button'
import Text from './components/Text'
import Input from './components/Input'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title'
import PageHeading from './components/props/PageHeading'
import UserCard from './components/props/UserCard'
import Alert from "./components/props/Alert"
import ReviewCard from './components/props/ReviewCard'
import ProductItem from './components/props/ProductItem'
import Status from './components/states/Status'
import LikesCounter from './components/states/LikesCounter'
import Menu from './components/states/Menu'
import BgColor from './components/states/BgColor'
import PasswordInput from './components/states/PasswordInput'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PageHeading title="My homework" subtitle="React vite" />
      <UserCard name="Natalie" role="Admin" avatarUrl="..." />
      <Alert type="danger" message="Помилка доступу!" />
      <ProductItem title="Шоколад" price={250} isBought={true} />
      <ProductItem title="Вишня" price={130} isBought={false} />
      <ReviewCard
        author="Олена К."
        rating={5}
        text="Чудовий сервіс, доставка дуже швидка!"
        date="24.05.2026"
      />

      <Status />
      <LikesCounter />
      <Menu />
      <BgColor />
      <PasswordInput />



      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer" className="new">
        <Button text="Send" />
        <Text />
        <Input />
        <Title title="Alex" />
      </section>
    </>
  );
}

export default App
