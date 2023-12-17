import Image from 'next/image';
import LoadingLogo from '../../../../public/Video.gif';

export default function Loading() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0D0B2B',
  };

  const imageStyle = {
    width: '10%', // Adjust the size as needed
    height: '15%', // Adjust the size as needed
  };

  return (
    <div style={containerStyle}>
      <Image src={LoadingLogo} alt="Loading..." style={imageStyle} />
    </div>
  );
}
