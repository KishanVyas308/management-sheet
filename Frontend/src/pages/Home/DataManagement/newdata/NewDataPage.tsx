import React from 'react'
import NewDataHeaderComponent from './NewDataHeaderComponent'

const NewDataPage = () => {
  return (
    <div className="bg-[#e6e7e9] w-full h-full min-h-screen">
    <div className="container mx-auto px-4 py-8 ">
      
        <NewDataHeaderComponent
            backLink={"/datamanagement"}
            nextLink={"/datamanagement/newdata/part2"}
        />

        </div>
    </div>
  )
}

export default NewDataPage
