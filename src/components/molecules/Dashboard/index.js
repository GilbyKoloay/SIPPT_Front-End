// styles
import './styles.css';

export default function Dashboard({ props }) {
  const { dashboardList, setDashboard } = props;

  return(
    <div className='dashboard'>
      <div>
        {dashboardList.map((d, index) => (
          <div key={d.id} className='item textLabel' onClick={() => setDashboard(dashboardList[index])}>{d.name}</div>
        ))}
      </div>
      <div className='logout textLabel'>Keluar</div>
    </div>
  );
}
