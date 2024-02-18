import axios from "axios";

import {baseURL} from "../constans/urls";

const apiService = axios.create({baseURL});

export {apiService};