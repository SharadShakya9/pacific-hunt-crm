import Link from 'next/link'
import React from 'react'

const configurationdetails =  [
  {
    key: 1,
    label: (
      <Link href=""><span>Categories</span></Link>
    )
  },
  {
    key: 2,
    label: (
      <Link href=""><span>Profession</span></Link>
    )
  },
  {
    key: 3,
    label: (
      <Link href=""><span>Company Type</span></Link>
    )
  },
  {
    key: 4,
    label: (
      <Link href=""><span>Skill</span></Link>
    )
  },
  {
    key: 5,
    label: (
      <Link href=""><span>Social Media</span></Link>
    )
  },
  {
    key: 6,
    label: (
      <Link href=""><span>Job Type</span></Link>
    )
  },
]

const Configuration = () => {
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <p className='text-dark-2 text-24-700'>Configurations</p>
        <p className='text-dark-3 text-16-400'>Configure details from here.</p>
      </div>

      <div>
        {configurationdetails.map((item) => (
          <div key={item.key}>{item.label}</div>
        ))}
      </div>
    </section>
  )
}

export default Configuration
