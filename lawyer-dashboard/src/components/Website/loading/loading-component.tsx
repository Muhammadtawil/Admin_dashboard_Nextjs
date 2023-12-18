import Image from 'next/image';
import LoadingLogo from '../../../../public/Video.gif';
import style from './Loading.module.scss';

export default function Loading() {


  return (
    <div className={style.containerStyle}>
      <Image src={LoadingLogo} alt="Loading..." className={style.imageStyle} />
    </div>
  );
}
