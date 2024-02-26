import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import {useState} from 'react';

export default function SortHandler({id, sortData, numericField}){
    const[sortType, setSortType] = useState('ASC');
    function handleSort(){
   
        sortData(userData=>{
            const sortedData = [...userData];
            if(numericField){
              sortedData.sort((a,b)=> a[id] - b[id]) ;
            }
            else{
                sortedData.sort((a,b)=> a[id].localeCompare(b[id]));
            }

            if(sortType==='DSC')  sortedData.reverse();
             
            return sortedData;
        })

        setSortType(type=> type==='ASC' ? 'DSC' : 'ASC');
    }
    
    return <>
    {sortType==='ASC' && <FaSortUp onClick={handleSort}/>}
    {sortType==='DSC' && <FaSortDown onClick={handleSort}/>}
    </>
}