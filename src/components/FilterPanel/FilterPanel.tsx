import { Header, Label } from './FilterPanel.styles';
import { useFilterPanel } from './FilterPanel.hook';

const FilterPanel = ({ setQuery, setLaunchesData }: any) => {
  const { rockets, launchpads, handleSelectChange } = useFilterPanel({ setQuery, setLaunchesData });

  return (
    <Header>
      <Label>
        Rocket name:&nbsp;
        <select name={'rocket'} onChange={handleSelectChange}>
          <option key={0} value={0}>
            All
          </option>
          {rockets.map((rocket: any) => (
            <option key={rocket.id} value={rocket.id}>
              {rocket.name}
            </option>
          ))}
        </select>
      </Label>
      <Label>
        Success launch:&nbsp;
        <select name={'success'} onChange={handleSelectChange}>
          <option value={0}>All</option>
          <option value={'true'}>Yes</option>
          <option value={'false'}>No</option>
        </select>
      </Label>
      <Label>
        Launchpads:&nbsp;
        <select name={'launchpad'} onChange={handleSelectChange}>
          <option value={0}>All</option>
          {launchpads.map((launchpad: any) => (
            <option key={launchpad.id} value={launchpad.id}>
              {launchpad.name}
            </option>
          ))}
        </select>
      </Label>
    </Header>
  );
};

export default FilterPanel;
