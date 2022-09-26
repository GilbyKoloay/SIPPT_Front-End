// styles
import './styles.css';

// components
import { Header } from '../../components/molecules';

export default function Loket({ props }) {
  const { __user } = props;

  return(
    <div className='loket'>
      <Header props={{name: __user.name, role: __user.role}} />
    </div>
  );
}
