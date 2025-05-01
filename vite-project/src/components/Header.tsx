import React, { PureComponent } from 'react'

class Header extends PureComponent {

    render() {
        return (
            <div className='bg-black text-gray-50 text-center text-4xl h-25 grid place-items-center'>
                <h1 className=''>ПАРИКМАХЕРСКАЯ</h1>
            </div>
        )
    }
}

export default Header