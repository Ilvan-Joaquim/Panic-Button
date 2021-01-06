import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Timer: React.FC = ({  }) => {
    const [milliseconds, setMilliseconds] = useState(0)
    const [seconds, setSeconds] = useState<string>("0")
    const [minutes, setMinutes] = useState<string>("0")
    const [hours, setHours] = useState<string>("0")
    const [intervalStop, setIntervalStop] = useState<number>(0)

     const interval = useRef()
    let toTime = (duration: number) => {

        let milliseconds = Math.floor((duration % 1000) / 100)
        let seconds = Math.floor((duration / 1000) % 60)
        let minutes = Math.floor((duration / (1000 * 60)) % 60)
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

        if (Number(hours) > 0) {
            setSeconds(seconds.toString().padStart(2, '0'))
            setMinutes(minutes.toString())
            setHours(hours.toString())
        } else {
            setSeconds(seconds.toString().padStart(2, '0'))
            setMinutes(minutes.toString())
        }

    }

    useEffect(() => {
        if(minutes === "1"){
            console.log(minutes)
            setTimeout(() => {
                clearInterval(intervalStop)
            },200)
        }
     
    }, [minutes])


    useEffect(() => {
        let start = Date.now();
        setIntervalStop(
            setInterval(() => {
                toTime(Date.now() - start)
            }, 100)
        )
    
    }, [])
    function timesed(minutes: string){
        return (Number(minutes) > 9) ? minutes : `0${minutes}`
    }
    return <View style={styles.content}>
        <Text style={styles.item}>{timesed(minutes)}:{seconds}</Text>
    </View>
}




export default Timer;