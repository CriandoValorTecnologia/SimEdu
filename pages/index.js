import Head from 'next/head'
import style from "../style/index.less"
import Header from './components/Header'

export default function Home() {
  return (
    <div className="xcontainer">
      <Head>
        <title>Simulador de Planejamento Educacional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main">        
          <Header />
          <h1 className="title">
            Olá! Seja bem-vindo ao simulador de Planejamento Educacional para RPPS.<br />
          </h1>
          <p className='text-center'>
            Esse simulador tem como objetivo auxiliar o gestor do RPPS a se planejar,<br /> anualmente, na capacitação dos servidores. <br />
            Nele, o gestor tem acesso a todos os cursos oferecidos pela Criando Valor e, com isso,<br /> mapear a capacitação que os servidores do RPPS irão precisar. <br />
            Ao finalizar o simulador, o gestor conseguirá visualizar como ficou o planejamento educacional do RPPS durante todo ano,<br /> por servidor e por curso, além de receber o orçamento deste plano, com um preço EXCLUSIVO para o seu RPPS.
          </p>
        </div>
      </main>
    </div>
  )
}
