import { useEffect, useState } from 'react';
import TableauEmbed from './components/TableauEmbed';
import TableauViewer from './components/TableauViewer';

export default function Dashboard(){
  const [token,setToken]=useState(null);
  return <TableauViewer token={token}/>;
}