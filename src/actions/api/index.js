import axios from 'axios';
import {config} from '../../configuration/config';

export const saralApi = axios.create({
    baseURL:config['saral-api-url']
})