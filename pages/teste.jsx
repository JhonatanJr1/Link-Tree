
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Teste.module.css'
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import {useRouter} from 'next/router'
export default function Teste(){

    const router = useRouter()

    function Revendedora(){
        router.replace("https://api.whatsapp.com/send?phone=558836551181&text=Quero+revender%2C+vim+do+%40HardyLingerie")
}

    function QuemSomos(){
    router.replace("https://hardylingerie.com/sobre-a-hardy/")
    }

    const theme = createTheme({
        palette: {
           type:'light',
           color: '#fff',
           primary:{
               main:'#20B2AA'
           },
           type:'dark',
           secondary:{
               main:'#000'

           }     
        },
        spacing:{}
    })

   

    return(
        <div className={styles.container}>
            <div style={{borderRadius: '50%', overflow: 'hidden'}}><Image src="/logo.png" alt="Vercel Logo" width={120} height={120}/></div>
            <Head> <title>TESTE AQUI</title></Head> 

            <h1>TESTE AQUI</h1>
           <div className={styles.grid}>
               <ThemeProvider theme={theme}>

           <Button onClick={Revendedora} variant="contained"color="secondary" className="button">Seja uma revendedora</Button>
           <Button onClick={QuemSomos} variant="contained" color="secondary"className="button">Quem somos</Button>
            </ThemeProvider>
            </div>

</div>
        
    )

}
