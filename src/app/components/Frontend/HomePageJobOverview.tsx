import React from 'react'
import JobFilteration from './JobFilteration'
import ActiveJobsToChooseFrom from './ActiveJobsToChooseFrom'

const HomePageJobOverview = () => {
  return (
    <div className='grid  md:grid-cols-3 gap-3'>
        <JobFilteration />

        <div  className='col-span-2 my-6'>
        
            <ActiveJobsToChooseFrom />
       
        </div>
    </div>
  )
}

export default HomePageJobOverview