import React from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'utils';
import Link from 'next/link';


const CovidMeasures = () => {

  const router = useRouter();
  const sponsorsURL = `/api/covidMeasures?locale=${router.locale}`;
  const { data: covidMeasuresData } = useSWR(sponsorsURL, fetcher);

  

  if(!covidMeasuresData) return ( <div className="covid__float_btn"><p className="desc">Cargando ...</p></div>)
  return (
    <div className="covid__float_btn"><a target = "_blank"  rel="noreferrer" href = {`${covidMeasuresData.covid_19_export.url}`}className="desc">{`${covidMeasuresData.covid_19_export.text}`}</a> </div>
  )
}

export default CovidMeasures