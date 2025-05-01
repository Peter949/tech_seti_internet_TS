import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
            <div className='bg-red-100 text-2xl h-25'>
                <div className="container mx-auto flex justify-between items-center ">
                    <div>
                        О нас
                    </div>
                    <div>
                        Контакты
                    </div>
                    <div>
                        График работы
                    </div>
                    <div>
                        Блог
                    </div>
                    <div>
                        © Парикмахерская
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer