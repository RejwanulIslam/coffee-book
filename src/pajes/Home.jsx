import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Banar from '../compoment/Banar'
import Hading from '../compoment/Hading'
import Catagoris from '../compoment/Catagoris'


export default function Home() {
    const catagoris = useLoaderData()
    return (
        <div className=''>
            <Banar></Banar>
            
            <Hading title={'Brouse By Coffee'} subtitle={'this is abest coffee ,you try is , this coffe test verry nice'}></Hading>

            <Catagoris catagoris={catagoris}></Catagoris>
            <Outlet></Outlet>

        </div>
    )
}
