import {Sora} from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
const sora = Sora(
  {
    weight:['100','200','300','400','500','600','700','800'],
    variable: '--font-sora',
    subsets: ['latin']
  }
)
const Layout = ({children}) => {
  return <div className={`page text-white bg-site bg-cover bg-no-repeat ${sora.variable} font-sora relative `}>
    <TopLeftImg></TopLeftImg>
    <Nav></Nav>
    <Header></Header>
  \
    {children}
    
  </div> 
};

export default Layout;
