import React from "react";

const Page = ({ date }) => {
  return (
    <div>
      <h2>Date on server : {date} </h2>
    </div>
  )
}

export async function getServerSideProps(_) {
  return {
    props: { date: new Date().toDateString() }
  }
}

export default Page;
