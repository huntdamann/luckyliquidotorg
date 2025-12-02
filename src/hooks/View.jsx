import dynamic from "next/dynamic";


const Scene = dynamic(() => import('../components/threejs/Scene'), {

    ssr: false,

})



export default function View( {scrollprogress }) {

    return (
  
      <main
       style={{
    
       }}
       className='main-view'>
  
          <Scene progress={scrollprogress} />
  
      </main>
  
    )
  
  }