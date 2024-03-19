import React, { useEffect, useState } from 'react';
import { ListCandidateByStatusRequest, readGenderRequest, totalCandateRequest } from '../../apiRequiest/apiRequiest';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
const DashBoard = () => {
    const [total, setTotal] = useState([]);
    const [shortList, setShortList] = useState([]);
    const [reject, setReject] = useState([]);


    const data = [
        { label: 'All Candidates', value: total.length > 0 ? total[0].total : 0 },
        { label: 'Shortlisted', value: shortList.totalCount || 0 },
        { label: 'Rejected Candidates', value: reject.totalCount || 0 }
    ];

      
    useEffect(()=>{
        (async()=>{
            let result = await totalCandateRequest();
            setTotal(result);
        })()
    },[])

    useEffect(()=>{
        (async()=>{
            let result = await ListCandidateByStatusRequest("Shortlisted");
            setShortList(result)
           ;
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            let result = await ListCandidateByStatusRequest("Rejected Candidates");
            setReject(result)
           ;
        })()
    },[])
    // gender api fetching
    const[gender, setGender] = useState([])
    useEffect(()=>{
        (async()=>{
            let result = await readGenderRequest();
            setGender(result);
        })()
    },[])


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="candidate">
                        <h3>Total Candidates</h3>
                        {
                           total.length>0?(
                            total.map((item, i)=>{
                                return(
                                    <p key={i}>{item['total']}</p>
                                )
                            })
                           ):("0")
                        }

                    </div>
                     
                    </div>
                    <div className="col-lg-4">
                       <div className="candidate">
                       <h3>Shortlisted Candidates</h3>
                       <p>{shortList["totalCount"]||0}</p>
                       </div>
       
                    </div>
                    <div className="col-lg-4">
                        <div className="candidate">
                        <h3>Rejected Candidates</h3>
                        <p>{reject["totalCount"]||0}</p>
                        </div>
                    </div>
                </div>

                <div className="row">

                        <div className="col-lg-7">
                            <PieChart 
                        series={[
                            {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 20, additionalRadius: -20, color: 'gray' },
                            },
                        ]}
                        height={150}
                        />
                            
                        </div>
                        <div className="col-lg-5">
    <BarChart
        xAxis={[{ scaleType: 'band', data: ['Total', 'Shortlist', 'Rejected'] }]}
        series={[
            { data: [total.length > 0 ? total[0].total : 0, shortList.totalCount ||
                 0, reject.totalCount || 0] }
        ]}
        width={400}
        height={200}
    />
</div>

                    
                </div>

                 <div className="row">

                       <div className="col-lg-6 pt-3">
                       <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={500}
      height={250}
    />
                       </div>

                       <div className="col-lg-6" style={{paddingRight:'5px'}}>
                       <PieChart
  series={[
    {
      data: [
        { id: 0, value: gender.maleCount, label: 'Male' }, 
        { id: 1, value: gender.femaleCount, label: 'Female' },
      ],
    },
  ]}
  width={400}
  height={200}
/>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;