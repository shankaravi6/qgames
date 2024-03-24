import { Button, TextField } from '@mui/material'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const FooterSection = () => {
  return (
    <div className="pt-32 pb-24 relative">
    <div className="flex justify-center items-center flex-col pb-20">
        <Slide>
          <h1 className="title-text">Don‘t Miss Out, Stay Updated</h1>
        </Slide>
        <div className='pt-12 flex flex-col gap-10'>
        <TextField style={{border:"1.5px solid #9c27b0", borderRadius:"5px", color:"white !important", width:"500px"}} variant='outlined' placeholder='Email Address' color='secondary' />
        <Button variant='contained' color='secondary' size='large'>Subscribe</Button>
        </div>
        <div className='w-4/5 flex justify-center items-center flex-col pt-14 gap-2'>
            <span className='caption-text'>Q-Games</span>
            <p className='sub-text text-lg'>QGames NFT gives holders a chance to profit from the worldwide lottery market change. QGames NFT collection includes 7,777 ERC-721 token standards, each with its unique information. Each NFT gives investors a share in Metaverse largest lottery platform and a passive income for life. QGames NFTs are non-fungible; they can not be exchanged. Each NFT is 100% unique.</p>
        </div>
    </div>
    <div className='footer flex justify-between pl-20 pr-20'>
        <div>
            <span className='caption-text text-sm'>Copyright © 2024, Q-Games - All Right Reserved</span>
        </div>
        <div className='flex justify-between gap-10'>
            <span className='text-sm caption-text'>About</span>
            <span className='text-sm caption-text'>Security</span>
            <span className='text-sm caption-text'>Privacy</span>

        </div>
    </div>
    </div>
  )
}

export default FooterSection
