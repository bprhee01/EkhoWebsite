import Features from '../components/Features'

import {titleText, MOCKDATA} from '../components/Features'
import { MyFooter } from '../components/Footer'
import { MyHeader } from '../components/Header'
import Intro from '../components/Introduction'
import { ProfileCardHolder } from '../components/ProfileCardHolder'
import ProfileCard from '../components/ProfileCards'
export default function Home({ allPostsData }) {
  return (
    <>
      <MyHeader/>
      <Intro/>
      <Features title={titleText} data={MOCKDATA}/>
      <h1 className="Contributors">Meet Our Team </h1> 
      <ProfileCardHolder/>
      <MyFooter/>
    </>
  )
}

