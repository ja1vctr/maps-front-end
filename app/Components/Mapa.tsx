// app/mapas/components/Map.tsx
import React, { useEffect, useRef } from 'react'
import 'ol/ol.css' // Importa o CSS padrão do OpenLayers
import { Map as OLMap, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import GeoJSON from 'ol/format/GeoJSON'
import { init, sources } from 'next/dist/compiled/webpack/webpack'
import IMapa from '@/app/interfaces/IMapa'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

const Mapa: React.FC<IMapa> = ({ latitude, longitude, zoom }) => {
  // window.onload = init
  const mapDivRef = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<OLMap | null>(null)

  const Estado = new VectorLayer({
    source: new VectorSource({
      format: new GeoJSON(),
      url: 'https://servicodados.ibge.gov.br/api/v3/malhas/estados/17?formato=application/vnd.geo+json&qualidade=minima',
    }),
  })

  useEffect(() => {
    // Verifica se `mapDivRef.current` não é `null` antes de criar o mapa
    if (mapDivRef.current && !mapInstance.current) {
      mapInstance.current = new OLMap({
        target: mapDivRef.current,
        view: new View({
          center: fromLonLat([longitude, latitude]), // Converte para a projeção correta
          zoom: zoom,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          Estado, // Adiciona a camada do estado
        ],
      })
    }

    // Atualiza o centro e o zoom do mapa quando as props mudam
    if (mapInstance.current) {
      mapInstance.current.getView().setCenter(fromLonLat([longitude, latitude]))
      mapInstance.current.getView().setZoom(zoom)
    }
  }, [latitude, longitude, zoom])
  return (
    <div
      ref={mapDivRef}
      // style={{ width: '100%', height: '100%' }}
      className="w-[1280px] h-[720px] absolute bg-bgCinza shadow-2xl"
    >
      <div></div>
    </div>
  )
}

export default Mapa
