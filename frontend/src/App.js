import { useState } from 'react'
import { useGetPositionQuery, useGetAirQualityQuery, useAddHistoryRecordMutation }  from './redux'
import './App.css'
import { Excel } from './components'

function App() {
	
	const [addHistoryRecord, {isError}] = useAddHistoryRecordMutation()  
	
	const [text, setText] = useState('')
	const [city, setCity] = useState('')
	
	const { data: positionData, isLoading: positionDataIsLoading} = useGetPositionQuery(city, {skip: !city})
	const { data: airQualityData, isLoading: airQualityDataIsLoading } = useGetAirQualityQuery(positionData, {skip: !positionData})
	
	if (positionDataIsLoading) return (<><h2>Статистика загрязнённости воздуха</h2><h1>Loading...</h1></>)
	if (airQualityDataIsLoading) return (<><h2>Статистика загрязнённости воздуха</h2><h1>Loading...</h1></>)
	
	function handleClick() {
		setCity(text)
	}
	function handleChangeCity(event) {
        setText(event.target.value)
    }
	
	function handleAddHistory() {
		addHistoryRecord({time: airQualityData.hourly.time, pm10: airQualityData.hourly.pm10, pm2_5:airQualityData.hourly.pm2_5})
	}
	
	const headers = ['Время', 'Количество частиц pm10', 'Количество частиц pm2_5']
	return (
		<>
			<h2>Статистика загрязнённости воздуха</h2>
			<input type="text" onChange={(event) => handleChangeCity(event)}/>
			<button onClick={handleClick}>Кнопка</button>
			{city && <button onClick={handleAddHistory}>Сохранить в БД</button>}
			<div>
				{city && <Excel data={airQualityData.hourly} headers={headers}/>}
			</div>
		</>
	)
}

export default App
