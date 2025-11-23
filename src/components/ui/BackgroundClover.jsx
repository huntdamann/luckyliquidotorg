import Image from "next/image";
import '../../css/BackgroundClover.css'
import HeroPage  from '../hero/HeroPage'


export default function BackgroundClover({refNo, setter}) {

  return (
    <div className="ocean">
       


       <HeroPage open={refNo} setOpen={setter} />

        <div className="bubble bubble--1">
            <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
        </div>
        <div className="bubble bubble--2"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--3"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--4"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--5"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--6"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            />
            </div>
        <div className="bubble bubble--7"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--8"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--9"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--10"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--11"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
        <div className="bubble bubble--12"> <Image
            src="/assets/clover-stencil.svg"
            alt="Clover Stencil"
            width={300}
            height={300}
            /></div>
</div>
  );
}
