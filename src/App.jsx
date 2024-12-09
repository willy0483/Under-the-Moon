import './App.scss'

import { colors } from './Styles/styles'

import { Container } from './Components/Container/Container'

import { Header } from './Components/Header/Header'
import { UnderTheMoon } from './Components/UnderTheMoon/UnderTheMoon'
import { Newstyle } from './Components/Newstyle/Newstyle'
import { Loyalty } from './Components/Loyalty/Loyalty'
import { FollowUs } from './Components/FollowUs/FollowUs'
import { ImageGallery } from './Components/ImageGallery/ImageGallery'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <Container>
      <Header backgcolor={colors.black}></Header>
      <UnderTheMoon></UnderTheMoon>
      <Newstyle></Newstyle>
      <Loyalty></Loyalty>
      <FollowUs></FollowUs>
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </Container>
  )
}

export default App
