
import LoadingSpinnerWeb from '@/components/Website/loading/loading-component';

export default function Loading() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#110F37',
  };

  const imageStyle = {
    width: '15%', // Adjust the size as needed
    height: '25%', // Adjust the size as needed
  };

  return (
    <LoadingSpinnerWeb/>
  );
}
