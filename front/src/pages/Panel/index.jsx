import { Link } from 'wouter';

import Styled from '../../components/PanelMain/styles';
import Title from "../../components/Title";

import PanelContainer from '../../components/PanelMain';
import NavBar from '../../components/NavBar';

const links = [
    <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
    <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
    "Transacciones", 
];

const PanelMain = () => {

    return(
        <>
            <Styled.PanelContain>   
             
                <Title title='App de Gestión'/>
                <NavBar links = {links}/>
                
                <PanelContainer/>

            </Styled.PanelContain>
        </>
    )

}


export default PanelMain;