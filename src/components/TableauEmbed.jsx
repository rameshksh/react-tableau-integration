import { useEffect, useRef } from 'react';
export default function TableauEmbed({ token }){
  const ref=useRef(null);
  useEffect(()=>{if(!ref.current)return;
    const script=document.createElement('script');
    script.src='https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.onload=()=>{const viz=document.createElement('tableau-viz');
      viz.src='YOUR_TABLEAU_VIEW_URL';
      viz.token=token;
      viz.toolbar='hidden';
      ref.current.appendChild(viz);};
    document.body.appendChild(script);
  },[token]);
  return <div ref={ref} style={{width:'100%',height:'800px'}} />;
}