import React from 'react';
import { Link } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../LoadingIndicator/loading'
import Axios from 'axios';


class HomeScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            surah: {}
        };

        this.LoadData = this.LoadData.bind(this);
    }

    componentDidMount() {
        this.LoadData()
    }
    
    LoadData() {
        this.setState({
            surah: [],
        });
        
        trackPromise(
            Axios.get('quran_list/surah_list.json')
            .then(res => {
                const surah = res.data;
                this.setState({ surah });
                // console.log(this.state.surah)
                Object.keys(this.state.surah).map(
                    num_surah => console.log(surah[num_surah])
                    )
            })
        );

    }

    render() {
        return (
            <div className="container">
                <h1 className="tracking-wide text-white text-3xl lg:text-5xl">Allah would not punish them while they seek forgiveness</h1>
                <LoadingIndicator />
                <h2 className="tracking-wider text-white mb-4 text-1xl lg:text-2xl">QS Al-Anfal 8:33</h2>
                <Link to='/'><button className="btn-start border-teal-400 text-teal-500 hover:text-teal-700">Program Membaca Al Qur'an Setiap Hari</button></Link>
                <Link to='/'><button className="btn-start border-gray-400 text-gray-500 hover:text-gray-700">Pilih Yang Mau Dibaca</button></Link>
            </div>
        );
    }
}

export default HomeScreen;