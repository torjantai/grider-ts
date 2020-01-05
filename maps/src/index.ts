import { User } from "./User";
import { Company } from "./Company";
import {CustomMap} from './CustomMap';
const mapParentEl = document.getElementById('map');
const map = new CustomMap(mapParentEl);
map.addMarkers([new User, new Company]);