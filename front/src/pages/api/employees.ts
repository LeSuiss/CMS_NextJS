import axios          from 'axios'
import { produceApi } from '../../utils/apiHandlers'

export default produceApi('/employees?populate=*')