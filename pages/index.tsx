import Features from '../components/Features'

import {titleText, MOCKDATA} from '../components/Features'
import { MyFooter } from '../components/Footer'
import { MyHeader } from '../components/Header'
import Intro from '../components/Introduction'
export default function Home({ allPostsData }) {
  return (
    <>
      <MyHeader/>
      <Intro/>
      <Features title={titleText} data={MOCKDATA}/>
      <MyFooter/>
    </>
  )
}

