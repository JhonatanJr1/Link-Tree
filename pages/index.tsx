import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  function Revendedora() {
    router.replace("https://api.whatsapp.com/send?phone=558836551181&text=Quero+revender%2C+vim+do+%40HardyLingerie")
  }

  function QuemSomos() {
    router.replace("https://hardylingerie.com/sobre-a-hardy/")
  }


  const theme = createTheme({
    palette: {
      secondary: {
        main: '#FE4300'
      }
    }
  })

  return (
    <div className={styles.gradientBorder}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={120} height={120} />
        </div>
        <Head>
          <title>Hardy Lingerie</title>
        </Head>

        <span className={styles.title}>Hardy Lingerie</span>

        <div className={styles.grid}>
          <ThemeProvider theme={theme}>

            <Button
              className={styles.button}
              variant="contained"
              color="secondary"
              onClick={Revendedora}>Seja uma revendedora</Button>

            <Button
              className={styles.button}
              variant="contained"
              color="secondary"
              onClick={QuemSomos}>Quem somos</Button>

          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}
