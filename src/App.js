import { Field, Image, Label } from "./components";
import styled from "styled-components";
import sunImage from './assets/svg/2.svg';

const icons = {
  sunImage,
}

const Main = styled.main`
  margin: 20px;
  display: grid;
  width: 800px;
  grid-template-areas: 'field field'
                        'image todayTemperature'
                        'image weather'
                        'tomorrowWeatherBackground tomorrowWeather'
                        'afterTomorrowWeatherBackground afterTomorrowWeather';
  grid-template-columns: 1.2fr 1fr;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const TodayTemperature = styled(Section)`
  grid-area: todayTemperature;
`

const TodayWeather = styled(Section)`
  grid-area: weather;
`

const TomorrowWeather = styled.div`
  grid-area: tomorrowWeather;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`
const AfterTomorrowWeather = styled.div`
  grid-area: afterTomorrowWeather;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const EmptySpaceBackgroundTomorrow = styled.div`
  grid-area: tomorrowWeatherBackground;
`

const EmptySpaceBackgroundAfterTomorrow = styled.div`
  grid-area: afterTomorrowWeatherBackground;
`

function App() {
  return (
    <Main className="App">
      <Field
        gridArea='field'
        placeholder={'Carregando...'}
      />

      <Image src={icons.sunImage} alt='sol' gridArea='image' />

      <TodayTemperature>
        <Label bold value={'Hoje'}/>
        <Label value={`35°C`}/>
      </TodayTemperature>

      <TodayWeather>
        <Label bold value={'ensolarado'} />
        <Label value={`Vento: 10km/h`} />
        <Label value={`Humidade: 10%`} />
        <Label value={`Pressão: 10hPa`} />
      </TodayWeather>

      <TomorrowWeather>
        <Label bold value={'Amanhã'}/>
        <Label value={`25°C`}/>
      </TomorrowWeather>

      <EmptySpaceBackgroundTomorrow />

      <AfterTomorrowWeather>
        <Label bold value={'Depois de amanhã'}/>
        <Label value={`20°C`}/>
      </AfterTomorrowWeather>

      <EmptySpaceBackgroundAfterTomorrow />
    </Main>
  );
}

export default App;
