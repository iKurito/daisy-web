import { LabelIcon, ProteinStructureIcon, RepeatedIcon } from '../../../icons';
import RepeatClassification from '../components/RepeatClassification';
import RepeatedUnits from '../components/RepeatedUnits';
import Structure from '../components/Structure';

export const tabs = [
  {
    id: 0,
    name: 'Protein structure',
    icon: <ProteinStructureIcon />,
    component: <Structure />,
  },
  {
    id: 1,
    name: 'Repeat classifcation',
    icon: <LabelIcon />,
    component: <RepeatClassification />,
  },
  {
    id: 2,
    name: 'Repeated units',
    icon: <RepeatedIcon />,
    component: <RepeatedUnits />,
  },
];
