import { LabelIcon, ProteinStructureIcon, RepeatedIcon } from '../../../icons';
import ProteinStructure from '../components/ProteinStructure';
import RepeatClassification from '../components/RepeatClassification';
import RepeatedUnits from '../components/RepeatedUnits';

export const tabs = [
  {
    id: 0,
    name: 'Protein structure',
    icon: <ProteinStructureIcon />,
    component: <ProteinStructure />,
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
