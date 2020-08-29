
const API_COVID_ALL =
  'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest'

const API_COVID_BRIEF =
  'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief'

export async function getGlobalData() {
  try {
    const response = await fetch(API_COVID_ALL)
    switch (response.status) {
      case 200:
        const data = await response.json()
        return data
      case 400:
        // alert(`Ha ocurrido un error con la petición ${response.error}`)
        return []
    }
  } catch (error) {
    alert(`Ha ocurrido un error: ${error}`)
    return []
  }
}

export async function getBriefData() {
  try {
    const response = await fetch(API_COVID_BRIEF)
    switch (response.status) {
      case 200:
        const data = await response.json()
        return data
      case 400:
        // alert(`Ha ocurrido un error con la petición ${response.error}`)
        return []
    }
  } catch (error) {
    alert(`Perdón, ha ocurrido un error: ${error}`)
    return []
  }
}

export const apiKey = "AIzaSyDXc89dygNmBSG7eUMJKKp3Rp7IFcM0ZXc"



/**
 *
 * import { getGlobalData } from '../../common/services/index.js'

export async function renderMap(map, popup, infoSelected) {
  const data = await getGlobalData()
  return onSelect(infoSelected, data, map, popup)
}

function onSelect(infoSelected, data, map, popup) {
  switch (infoSelected) {
    case 1:
      const deaths = data.filter((data) => data.deaths !== 0)
      console.log('filtro muertes ->', deaths)
      renderDataMap(deaths, map, popup)
      return
    case 2:
      const confirmed = data.filter((data) => data.confirmed !== 0)
      console.log('filtro confirmados ->', confirmed)
      renderDataMap(confirmed, map, popup)
      return
    case 3:
      const recovered = data.filter((data) => data.recovered !== 0)
      console.log('filtro recuperados ->', recovered)
      renderDataMap(recovered, map, popup)
      return
  }
}

function renderDataMap(data, map, popup) {
  data.forEach((item) => {
    const marker = new window.google.maps.Marker({
      position: {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      map,
      // icon,
      title: String(item.deaths),
    })
    marker.addListener('click', () => {})
    popup.setContent(renderAditionalInfo(item))
    popup.open(map, marker)
  })
}

function renderAditionalInfo({
  confirmed,
  deaths,
  recovered,
  provincestate,
  countryregion,
}) {
  return `
    <div>
      <p> <strong>${provincestate} - ${countryregion}</strong> </p>
      <p> confirmados: ${confirmed} </p>
      <p> muertes: ${deaths} </p>
      <p> recuperados: ${recovered} </p>
    </div>
  `
}

 *
 */