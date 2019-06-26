import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' icon='dashboard' label='Dashboard' ></MenuItem>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' icon='usd' label='Ciclos de Pagamentos'></MenuItem>
        </MenuTree>
    </ul>
)