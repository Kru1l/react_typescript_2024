import axios from "axios";

import {baseURL} from "../constans";

const apiService = axios.create({baseURL});

export {apiService};