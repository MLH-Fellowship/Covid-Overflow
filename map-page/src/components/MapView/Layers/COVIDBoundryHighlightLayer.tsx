import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Marker} from 'react-mapbox-gl';
import {CovidSwitch, covidSwitchSelector} from "../../../context/mapStateSlice";
import {createStyles, WithStyles, withStyles,} from '@material-ui/core';
import {showPopup} from "../../../context/tooltipStateSlice";

const circleStyle=(size:number,color:string,opacity: number)=>({
    display:'block',
        height: `${size*50}px`,
        width: `${size*50}px`,
        backgroundColor:color,
        borderRadius: '50%',
        opacity: opacity,
        cursor: 'pointer'
});
const switchTypes:CovidSwitch[]=['active','deaths','recovered']
function NSOLayers({classes}:WithStyles<typeof styles>){
    console.log(classes);

    const dispatch=useDispatch();
    const switchData: { [k in CovidSwitch]: boolean } = {
        "deaths": useSelector(covidSwitchSelector('deaths')),
        "recovered": useSelector(covidSwitchSelector('recovered')),
        "active": useSelector(covidSwitchSelector('active'))
    }
    const [covidData,setCovidData]=useState<Array<any>>([]);
    useEffect(()=>{
        fetch('https://disease.sh/v2/countries?yesterday=false&allowNull=false').then(res=>res.json()).then(res=>{
            setCovidData(res);
            console.log(covidData);
        })
    },[]);
    if(!covidData||covidData.length===0)
        return <Marker coordinates={[0,0]} className={classes.loading}><p>Loading COVID Data...</p></Marker>;
    const max:{[k in CovidSwitch]:number}={deaths:0,active:0,recovered:0};
    const min:{[k in CovidSwitch]:number}={deaths:Number.MAX_SAFE_INTEGER,active:Number.MAX_SAFE_INTEGER,recovered:Number.MAX_SAFE_INTEGER};
    covidData.forEach(country=>{
        switchTypes.forEach((type)=>{
            if(country[type] <min[type])
                min[type]=country[type] as number;
            if(country[type]>max[type])
                max[type]=country[type] as number;
        });
    });
    console.log(covidData[0]);
    const ret:JSX.Element[]=[];
    const mapped=(switchType:CovidSwitch,country:any,minMap:number=0)=>scale(country[switchType],min[switchType],max[switchType],minMap,1);
    const addMarkers=(switchType:CovidSwitch,color:string)=>
        ret.push(...covidData.map((country,index)=>{
        const {lat,long}=country.countryInfo;
        const sizeMapped=mapped(switchType,country,0.1);
        const opacityMapped=mapped(switchType,country,0.5);
        return <Marker key={country.country+index+switchType} coordinates={[long,lat]}
                       onClick={()=>dispatch(showPopup({coordinates: [long,lat],locationName: country.country }))}>
            <span style={circleStyle(sizeMapped,color,opacityMapped)}/>
        </Marker>
    }));
    if(switchData.deaths)
      addMarkers('deaths','red');
    if(switchData.active)
        addMarkers('active','yellow');
    if(switchData.recovered)
        addMarkers('recovered','cyan');



    return <>{ret}</>;





}
const styles=() =>
    createStyles({

        loading: {
            position: 'absolute',
            transform: 'none',
            translate: 0,
            top:0,
            height: '100px',
            width: '500px',
            backgroundColor: 'black',
            opacity: 0.75,
            color:'white',
            fontSize: '3em',
            fontWeight:'bold',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num:number, in_min:number, in_max:number, out_min:number, out_max:number) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
export default withStyles(styles)(NSOLayers);
