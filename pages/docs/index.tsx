
import { NextLink } from '@mantine/next';
import Docs from '../../components/Docs';
import { MyFooter } from '../../components/Footer';
import { MyHeader } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container } from '@mantine/core';

export default function Documentation() {
  return (
    <>
     <MyHeader/>
     <div className="docsPageBody">
      {/* <div className="Sidebar"> <Sidebar/> </div> */}
      <div className='docsDetails'> <Docs/> </div>
     </div>
     <MyFooter/>
    </>
  )
}
