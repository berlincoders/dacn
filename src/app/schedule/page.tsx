// src/app/schedule/page.tsx
import React from 'react';
import SportsFilter from '@components/SportFilter';  // Use @components alias

const Schedule = () => {
  return (


<main className=" flex justify-center">
  <div className="w-full ">
    <SportsFilter />
  </div>
</main>
  );
};

export default Schedule;
