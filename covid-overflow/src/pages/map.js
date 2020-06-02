import {Provider} from "react-redux";
import App from '../prism/components/App';
import { store } from '../prism/context/store';
export default ()=>{

    return <Provider store={store}>
        <App/>


    </Provider>


}